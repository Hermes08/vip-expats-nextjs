import BoquetePageContent from './BoquetePageContent';

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function BoqueteLocationPage({ params }: Props) {
  const { lang } = await params;
  return <BoquetePageContent lang={lang} />;
}
