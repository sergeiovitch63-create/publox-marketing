import { NextResponse } from 'next/server';
import { revalidatePath } from 'next/cache';
import { getSupabaseServerClient } from '@/src/lib/supabaseServer';

const MAX_REVIEW_LENGTH = 300;

export async function GET() {
  const supabase = getSupabaseServerClient();

  if (!supabase) {
    return NextResponse.json({ reviews: [] }, { status: 200 });
  }

  const { data, error } = await supabase
    .from('reviews')
    .select('id, company_name, location, service_type, rating, review_text, page_link, verified, created_at')
    .order('created_at', { ascending: false })
    .limit(30);

  if (error) {
    console.error('Error fetching reviews:', error);
    return NextResponse.json({ error: 'Error fetching reviews' }, { status: 500 });
  }

  return NextResponse.json({ reviews: data ?? [] }, { status: 200 });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      companyName,
      location,
      serviceType,
      rating,
      reviewText,
      pageLink,
      website, // honeypot
      locale,
    } = body ?? {};

    // Honeypot: if filled, accept but do nothing
    if (typeof website === 'string' && website.trim().length > 0) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic validation
    if (
      !companyName ||
      !location ||
      !serviceType ||
      typeof rating !== 'number' ||
      !reviewText
    ) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const trimmedReview = String(reviewText).trim();
    if (trimmedReview.length === 0 || trimmedReview.length > MAX_REVIEW_LENGTH) {
      return NextResponse.json({ error: 'Invalid review length' }, { status: 400 });
    }

    if (rating < 1 || rating > 5) {
      return NextResponse.json({ error: 'Rating must be between 1 and 5' }, { status: 400 });
    }

    if (pageLink) {
      const link = String(pageLink);
      if (!link.startsWith('http://') && !link.startsWith('https://')) {
        return NextResponse.json({ error: 'Invalid page link' }, { status: 400 });
      }
    }

    const supabase = getSupabaseServerClient();

    if (!supabase) {
      return NextResponse.json({ error: 'Supabase is not configured.' }, { status: 500 });
    }

    const { error } = await supabase.from('reviews').insert({
      company_name: String(companyName).trim(),
      location: String(location).trim(),
      service_type: String(serviceType).trim(),
      rating,
      review_text: trimmedReview,
      page_link: pageLink ? String(pageLink).trim() : null,
      // No moderation for now: mark as verified / visible immediately
      verified: true,
    });

    if (error) {
      console.error('Error inserting review:', error);
      return NextResponse.json({ error: 'Error saving review' }, { status: 500 });
    }

    const safeLocale = typeof locale === 'string' && locale ? locale : 'es';
    revalidatePath(`/${safeLocale}`);
    revalidatePath(`/${safeLocale}/avisos`);

    return NextResponse.json({ success: true }, { status: 201 });
  } catch (error) {
    console.error('Unexpected error in POST /api/reviews:', error);
    return NextResponse.json({ error: 'Unexpected error' }, { status: 500 });
  }
}


