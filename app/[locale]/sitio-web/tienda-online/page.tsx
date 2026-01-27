import { redirect } from 'next/navigation';

export default async function TiendaOnlineRedirect({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  redirect(`/${locale}/sitio-web`);
}




