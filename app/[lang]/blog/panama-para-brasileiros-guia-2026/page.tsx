import Link from 'next/link';
import { CostBarChart, PanamaCityScene } from '@/components/three/ThreeComponents';



export const metadata = {
  title: 'Guia Panamá para Brasileiros 2026: Visto, Custos, Vida',
  description: 'Brasileiros emigrando para Panamá. Opções de visto, custos, estilo de vida.',
  keywords: 'panama, para',
  alternates: {
    canonical: 'https://panamarealestatesale.com/en/blog/panama-para-brasileiros-guia-2026',
    languages: {
      'en': 'https://panamarealestatesale.com/en/blog/panama-para-brasileiros-guia-2026',
      'es': 'https://panamarealestatesale.com/es/blog/panama-para-brasileiros-guia-2026',
      'pt': 'https://panamarealestatesale.com/pt/blog/panama-para-brasileiros-guia-2026',
      'de': 'https://panamarealestatesale.com/de/blog/panama-para-brasileiros-guia-2026',
    },
  },
  openGraph: {
    title: 'Guia Panamá para Brasileiros 2026: Visto, Custos, Vida',
    description: 'Brasileiros emigrando para Panamá. Opções de visto, custos, estilo de vida.',
    type: 'article',
    url: 'https://panamarealestatesale.com/en/blog/panama-para-brasileiros-guia-2026',
    images: [{ url: 'https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80', width: 1200, height: 630, alt: 'Guia Panamá para Brasileiros 2026: Visto, Custos, Vida' }],
    locale: 'en_US',
    siteName: 'VIP Expats Panama',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Guia Panamá para Brasileiros 2026: Visto, Custos, Vida',
    description: 'Brasileiros emigrando para Panamá. Opções de visto, custos, estilo de vida.',
    images: ['https://images.unsplash.com/photo-1488747807830-63789f68bb65?w=1200&q=80'],
  },
};

export default function PanamaParaBrasileirosGuia({ params }) {
  const { lang } = params;

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-brand-50 to-white pt-12 pb-8 md:pt-20 md:pb-12">
        <div className="max-w-4xl mx-auto px-6 md:px-8">
          <div className="mb-6">
            <span className="inline-block text-sm font-semibold text-brand-TEAL uppercase tracking-wide">
              Guia para Brasileiros
            </span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-brand-950 mb-4 leading-tight">
            Panamá para Brasileiros 2026
          </h1>
          <p className="text-xl text-brand-700 mb-6 leading-relaxed">
            Visto, Custo de Vida e Investimento Imobiliário em Moeda Forte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center text-sm text-brand-600">
            <span>📅 Atualizado: Abril 2026</span>
            <span>•</span>
            <span>👥 Comunidade: 120,000+ brasileiros no Panamá</span>
            <span>•</span>
            <span>✈️ Voo São Paulo-Panamá: 8 horas</span>
            <span>•</span>
            <span>🕐 Leitura: 12-15 minutos</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-8 py-8 md:py-12">
        {/* Introdução */}
        <section className="mb-12">
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            O Brasil é uma potência econômica, mas para muitos brasileiros que construíram patrimônio — empresários, profissionais, investidores — existe uma realidade incômoda: a moeda enfraquece constantemente, a burocracia é complexa, e os impostos são altos. Muitos se perguntam: "Como protejo meu patrimônio?"
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Panamá oferece a resposta. E há algo ESPECIAL para brasileiros que muitos desconhecem: <strong>Brasil está na lista oficial de "Friendly Nations"</strong>. Isso significa que você pode obter residência permanente no Panamá em 30-45 dias, sem burocracia complexa, e custo acessível.
          </p>
          <p className="text-lg text-brand-700 leading-relaxed mb-6">
            Neste guia explicamos:
          </p>
          <ul className="list-disc list-inside text-lg text-brand-700 mb-6 space-y-3">
            <li>Por que Panamá é a solução perfeita para brasileiros que buscam estabilidade</li>
            <li>Como o processo de Visto Friendly Nations funciona especificamente para brasileiros</li>
            <li>Comparação real de custos: São Paulo, Rio de Janeiro vs Panamá City</li>
            <li>Como proteger seu patrimônio em dólares USD</li>
            <li>Investimento imobiliário como hedge contra devaluação do Real</li>
            <li>A comunidade brasileira crescente no Panamá</li>
          </ul>
        </section>

        {/* Panama City 3D Scene */}
        <section className="my-12 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[400px]">
          <PanamaCityScene />
        </section>

        {/* ¿Por Qué Panamá? */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Por Que Panamá é a Solução Perfeita para Brasileiros?
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💱 Real vs Dólar</h3>
              <p className="text-brand-700 text-sm">
                O Real perdeu 50% do seu valor em dólares na última década. Panamá usa USD. Seu patrimônio está protegido em moeda forte.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">✈️ Proximidade</h3>
              <p className="text-brand-700 text-sm">
                8 horas de voo direto de São Paulo (LATAM, Copa). Mais perto do que cidades do norte/nordeste do Brasil.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🟢 Visto Friendly Nations</h3>
              <p className="text-brand-700 text-sm">
                Brasil está na lista. Residência permanente em 30-45 dias. Custo: ~$3-5k USD. Sem investimento obrigatório.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">💼 Simplicidade Fiscal</h3>
              <p className="text-brand-700 text-sm">
                Em Panamá: 0% imposto sobre renda estrangeira. No Brasil: até 27,5% sobre ingressos internacionais + burocracia.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🛡️ Segurança e Estabilidade</h3>
              <p className="text-brand-700 text-sm">
                Zonas de expat em Panamá são mais seguras que São Paulo ou Rio para estrangeiros. Estrutura institucional sólida.
              </p>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">🏘️ Comunidade Brasileira Estabelecida</h3>
              <p className="text-brand-700 text-sm">
                120,000+ brasileiros no Panamá. Restaurantes, negócios, redes profissionais. Você não está sozinho.
              </p>
            </div>
          </div>
        </section>

        {/* Cost Comparison */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Comparação de Custos: São Paulo, Rio vs Panamá City (2026)
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            O maior mito é que Panamá é "caro". Realidade: é comparável a São Paulo, mas em dólares (o que é melhor para seu patrimônio a longo prazo).
          </p>

          <div className="my-8 rounded-lg overflow-hidden border border-brand-100 bg-brand-50 h-[450px]">
            <CostBarChart />
          </div>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6 mt-8">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-4">Desagregação Mensal Real (2026)</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Aluguel (apartamento 2BR)</p>
                  <p className="text-sm text-brand-600">Zona segura, bons serviços</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$1,200-1,500</p>
                  <p className="text-sm text-brand-600">vs R$5k São Paulo</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Alimentação e Compras</p>
                  <p className="text-sm text-brand-600">Mercados + restaurantes</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$450-650</p>
                  <p className="text-sm text-brand-600">vs R$2k São Paulo</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Água, Luz, Internet</p>
                  <p className="text-sm text-brand-600">Fibra óptica inclusa</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$150-250</p>
                  <p className="text-sm text-brand-600">vs R$600 São Paulo</p>
                </div>
              </div>
              <div className="flex justify-between items-start border-b border-brand-200 pb-3">
                <div>
                  <p className="font-semibold text-brand-950">Transporte</p>
                  <p className="text-sm text-brand-600">Metro, Uber, táxis</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL">$100-150</p>
                  <p className="text-sm text-brand-600">vs R$400 São Paulo</p>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-semibold text-brand-950">TOTAL MENSAL</p>
                  <p className="text-sm text-brand-600">Gastos básicos, qualidade de vida alta</p>
                </div>
                <div className="text-right">
                  <p className="font-semibold text-brand-TEAL text-lg">$1,900-2,550</p>
                  <p className="text-sm text-brand-600">vs R$8k São Paulo</p>
                </div>
              </div>
            </div>
          </div>

          <p className="text-brand-700 mt-8 text-lg">
            Sim, pode ser ~20% mais caro que São Paulo em valores nominais. MAS: 100% está em dólares. Se o Real desvaloriza outro 20% (histórico), seu poder de compra em Panamá fica igual, enquanto em São Paulo cairia 20%.
          </p>
        </section>

        {/* Visto Friendly Nations */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Visto Friendly Nations para Brasileiros: Processo Passo a Passo
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Este é o caminho mais rápido e econômico para residência permanente. O processo leva 30-45 dias desde a documentação até aprovação final.
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Passo 1: Documentos Necessários (7-10 dias)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Passaporte brasileiro válido (mínimo 6 meses de validade)</li>
                <li>Certidão de Antecedentes Criminais do Brasil (SSP) + apostila</li>
                <li>Certidão de Nascimento do Brasil + apostila</li>
                <li>Comprovante de renda: mínimo $5,000 USD mensais OU $120,000 USD em patrimônio</li>
                <li>Extrato bancário (últimos 3 meses)</li>
                <li>Comprovante de endereço temporário no Panamá</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Certidões se obtêm na SSP (2-3 dias). Apostila no Tribunal (2-3 dias). Tudo pode ser solicitado e acompanhado remotamente.
              </p>
            </div>

            <div className="border-l-4 border-brand-GOLD bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Passo 2: Solicitação junto à Migração (15-20 dias)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Através de advogado panamenho especializado</li>
                <li>Custo legal: ~$2,500-3,500 USD</li>
                <li>Migração revisa e aprova (sem entrevista para Friendly Nations)</li>
                <li>Notificação de aprovação por e-mail</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Tudo é feito por correspondência. Você não precisa estar no Panamá para este passo. O advogado cuida de tudo.
              </p>
            </div>

            <div className="border-l-4 border-brand-TEAL bg-brand-50 p-6">
              <h3 className="font-heading text-xl font-bold text-brand-950 mb-3">Passo 3: Finalização no Panamá (10 dias)</h3>
              <ul className="list-disc list-inside text-brand-700 space-y-2">
                <li>Você viaja ao Panamá com aprovação de Migração</li>
                <li>Coleta de digital e foto em Migração</li>
                <li>Pagamento da taxa de residência: ~$800-1,200 USD</li>
                <li>Recebe sua Cédula de Residência Permanente</li>
              </ul>
              <p className="text-sm text-brand-600 mt-4">
                Com a Cédula, você tem direito a trabalhar, abrir empresas, investir, e trazer familiares dependentes.
              </p>
            </div>
          </div>

          <div className="bg-brand-GOLD/10 border border-brand-GOLD rounded-lg p-6 mt-8">
            <p className="font-semibold text-brand-950 mb-2">💰 Custo Total Estimado</p>
            <p className="text-brand-700 text-lg">
              <strong>$3,300-5,000 USD</strong> (advogado + taxas administrativas)
            </p>
            <p className="text-sm text-brand-600 mt-3">
              Muito mais acessível que outros programas: Golden Visa (~$500k investimento), Pensionista (~$1,350/mês renda permanente), Profissional (requisitos específicos). Friendly Nations é claramente a opção mais acessível.
            </p>
          </div>
        </section>

        {/* Real Estate Investment */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Investimento Imobiliário: Proteção contra Devaluação do Real
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            Para brasileiros que construíram patrimônio através de negócios ou profissões bem-remuneradas, investimento imobiliário no Panamá é uma estratégia crítica de proteção contra a devaluação constante do Real.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Por Que Investir no Panamá?</h3>
              <ul className="space-y-3 text-brand-700">
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Valuações em USD = proteção contra inflação/devaluação</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>0% imposto sobre ganho de capital</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Mercado imobiliário transparente e regulado</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Herança clara e previsível</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-brand-TEAL font-bold">✓</span>
                  <span>Alto potencial de aluguel turístico</span>
                </li>
              </ul>
            </div>

            <div className="bg-brand-50 border border-brand-100 rounded-lg p-6">
              <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Opções de Investimento (2026)</h3>
              <ul className="space-y-3 text-brand-700">
                <li>
                  <p className="font-semibold text-brand-950">Apartamentos Cidade (ROI 4-6%)</p>
                  <p className="text-sm text-brand-600">$200k-$400k USD. Aluguel residencial.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Beachfront (ROI 6-10%)</p>
                  <p className="text-sm text-brand-600">$300k-$700k USD. Turismo + residencial.</p>
                </li>
                <li>
                  <p className="font-semibold text-brand-950">Terra (ROI 8-15%)</p>
                  <p className="text-sm text-brand-600">$100k-$300k USD. Potencial futuro.</p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border border-brand-100 rounded-lg p-8 bg-white">
            <h3 className="font-heading text-xl font-bold text-brand-950 mb-6">Caso Prático: Brasileiro Investe $350,000 USD</h3>
            <div className="space-y-4">
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Investimento Inicial</strong></p>
                <p className="text-brand-950 font-semibold">$350,000 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Aluguel Mensal (5% ROI anual)</strong></p>
                <p className="text-brand-950 font-semibold">$1,458 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Despesas (manutenção, impostos)</strong></p>
                <p className="text-brand-950 font-semibold">-$350 USD</p>
              </div>
              <div className="flex justify-between pb-3 border-b border-brand-200">
                <p className="text-brand-700"><strong>Renda Líquida Mensal</strong></p>
                <p className="text-brand-950 font-semibold text-lg">$1,108 USD</p>
              </div>
              <div className="flex justify-between pt-3">
                <p className="text-brand-700"><strong>Apreciação Anual (3-4% histórica)</strong></p>
                <p className="text-brand-950 font-semibold">+$10,500-$14,000</p>
              </div>
            </div>
            <p className="text-sm text-brand-600 mt-6 pt-6 border-t border-brand-100">
              Total anual: ~$27,300 USD em renda + apreciação. 100% em USD, ZERO imposto no Panamá. Se você investe $350k do Brasil e ganha ~$27k/ano em moeda forte, isso é 7.8% retorno, sem inflação de Real.
            </p>
          </div>
        </section>

        {/* Banking System */}
        <section className="mb-12">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-6">
            Sistema Bancário: Como Brasileiros Podem Abrir Contas
          </h2>

          <p className="text-brand-700 mb-8 text-lg">
            O sistema bancário panamenho é sofisticado e acolhe investidores internacionais. Aqui está como funciona para brasileiros.
          </p>

          <div className="bg-brand-50 border border-brand-100 rounded-lg p-6 mb-8">
            <h3 className="font-heading text-lg font-bold text-brand-950 mb-4">Bancos Principais para Brasileiros</h3>
            <div className="space-y-4">
              <div className="border-b border-brand-200 pb-4">
                <p className="font-semibold text-brand-950">Banesco</p>
                <p className="text-sm text-brand-700">Fácil abertura, aceita brasileiros facilmente, múltiplos produtos.</p>
              </div>
              <div className="border-b border-brand-200 pb-4">
                <p className="font-semibold text-brand-950">Citibank Panama</p>
                <p className="text-sm text-brand-700">Para investidores altos, gerenciamento de patrimônio, serviços premium.</p>
              </div>
              <div className="border-b border-brand-200 pb-4">
                <p className="font-semibold text-brand-950">HSBC Panama</p>
                <p className="text-sm text-brand-700">Presença internacional, fácil para brasileiros com histórico de crédito.</p>
              </div>
              <div>
                <p className="font-semibold text-brand-950">Banco Latinoamericano</p>
                <p className="text-sm text-brand-700">Especializado em América Latina, compreende dinâmica brasileira.</p>
              </div>
            </div>
          </div>

          <div className="bg-brand-TEAL/10 border border-brand-TEAL rounded-lg p-6">
            <p className="font-semibold text-brand-950 mb-2">💡 Dica Importante</p>
            <p className="text-brand-700">
              Muitos bancos preferem clientes com residência permanente (Cédula) para contas pessoa física. Alguns aceitam com aprovação de visto Friendly Nations. Recomendamos contatar o banco antes de viajar para confirmar requisitos exatos.
            </p>
          </div>
        </section>

        {/* Next Steps CTA */}
        <section className="mb-12 bg-gradient-to-r from-brand-TEAL/10 to-brand-GOLD/10 rounded-lg p-8 border border-brand-100">
          <h2 className="font-heading text-2xl font-bold text-brand-950 mb-6">
            Pronto para Dar o Próximo Passo?
          </h2>

          <p className="text-brand-700 text-lg mb-6">
            Se você é brasileiro e está considerando morar, investir, ou se aposentar no Panamá, nosso time está aqui para guiá-lo em cada etapa: do visto Friendly Nations até encontrar a propriedade perfeita.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href={`/${lang}/contacto`}
              className="inline-block px-8 py-4 bg-brand-TEAL text-white font-bold rounded-lg hover:bg-brand-TEAL/90 transition text-center"
            >
              Agendar Consulta Gratuita
            </Link>
            <Link
              href={`/${lang}/propiedades`}
              className="inline-block px-8 py-4 border-2 border-brand-GOLD text-brand-950 font-bold rounded-lg hover:bg-brand-50 transition text-center"
            >
              Ver Propriedades Disponíveis
            </Link>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-8">
          <h2 className="font-heading text-3xl font-bold text-brand-950 mb-8">
            Perguntas Frequentes: Brasileiros no Panamá
          </h2>

          <div className="space-y-6">
            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                Preciso de visto para entrar no Panamá como turista?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Não. Brasileiros têm isenção de visto para turismo no Panamá por até 180 dias. Você pode entrar com passaporte válido e passagem de volta. Pode renovar essa estada no escritório de Migração em Panamá City.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                Posso manter minhas propriedades no Brasil e morar no Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Sim. Você pode manter propriedades no Brasil enquanto reside no Panamá. No Brasil, você continuará pagando impostos sobre essas propriedades. No Panamá, pagará 0% sobre renda estrangeira. A chave é mudar sua residência fiscal para Panamá com assistência de contador.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                É fácil abrir uma empresa no Panamá como brasileiro?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Muito fácil. Com residência permanente, você pode constituir uma SRL (Sociedade de Responsabilidade Limitada) em 1-2 dias. Custo é baixo (~$300-500). Muitos brasileiros operam negócios no Panamá: consultorias, importação/exportação, serviços digitais.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                Qual é a melhor área para morar como brasileiro no Panamá?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Depende do seu estilo: Punta Pacifica (luxo, moderno), Amador (oceanfront, família), Casco Viejo (histórico, vida noturna), Clayton (residencial, multicultural). Maioria dos brasileiros prefere Punta Pacifica ou Amador por segurança e serviços.
              </p>
            </details>

            <details className="group border border-brand-100 rounded-lg p-6 cursor-pointer hover:bg-brand-50 transition">
              <summary className="font-heading text-lg font-bold text-brand-950 flex justify-between items-center">
                Posso trazer minha família sob Friendly Nations?
                <span className="text-brand-TEAL text-2xl group-open:rotate-180 transition">+</span>
              </summary>
              <p className="text-brand-700 mt-4 leading-relaxed">
                Sim. Uma vez com residência permanente, você pode solicitar para dependentes (cônjuge, filhos). Processo é rápido (10-15 dias) e custo é baixo (~$500-800 por pessoa). Sua família obterá direito a trabalhar, estudar, e investir.
              </p>
            </details>
          </div>
        </section>
      </article>
    </main>
  );
}
