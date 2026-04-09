import BocasPageContent from './BocasPageContent';

interface Props {
  params: Promise<{ lang: string }>;
}

export default async function BocasLocationPage({ params }: Props) {
  const { lang } = await params;
  return <BocasPageContent lang={lang} />;
}
