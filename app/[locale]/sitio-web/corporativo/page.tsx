import { redirect } from 'next/navigation';

export default async function CorporativoRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/sitio-web`);
}


