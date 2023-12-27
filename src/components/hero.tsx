
export interface HeroProps {
}

export default function Hero(props: HeroProps) {
  return (
    <section className="flex flex-col items-center justify-center overflow-hidden">
      <div className="space-y-5">
        <div className="flex max-w-[420px] flex-col items-start justify-between space-y-1 ">
          <h1 className="text-6xl font-bold text-gray-50">
            Desenvolvedor de Software
          </h1>
          <h2 className="text-sm font-bold text-gray-300">
            Seja bem vindo ao meu portifolio!
          </h2>
          <p className="text-xs font-bold leading-relaxed text-gray-300">
            Venha conhecer um pouco do meu trabalho.
          </p>
        </div>
        <div className="flex gap-2 text-sm font-bold text-gray-300">
          <button className="rounded-md bg-gray-50 px-4 py-2 text-gray-300 hover:text-gray-900">
            <a
              href="ITcurv.pdf"
              download="ITcurv.pdf"
              className="flex items-center gap-2"
              type="application/pdf"
            >
              Baixe meu CV
            </a>
          </button>
        </div>
      </div>
    </section>
  );
}
