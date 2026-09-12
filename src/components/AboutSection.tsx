import Image from 'next/image';

export function AboutSection() {
  const stack = ['React', 'Next.js', 'Typescript', 'Tailwind CSS'];
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container-maevio px-6">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative w-full md:w-[45%] aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/image-maeviotech2.jpg"
              alt="Desenvolvedor trabalhando em código"
              fill
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
          <div className="w-full md:w-[55%] flex flex-col gap-6">
            <span className="text-primary text-sm font-semibold uppercase tracking-wide">
              Sobre a MaevioTech
            </span>
            <h2 className="text-3xl md:text-4xl font-bold">
              Código preciso. Design intencional.
            </h2>
            <p className="text-muted-foreground text-base md:text-lg">
              Especialista em desenvolvimento front-end com um olhar rigoroso
              para o design e a usabilidade. Construo interfaces onde a
              performance técnica encontra a estética minimalista, garantindo
              que sua marca comunique confiança, inovação e clareza.
            </p>
            <div className='mt-2'>
              <h3 className='text-muted-foreground text-md font-semibold uppercase tracking-wide mb-3'>
                Stack Principal
              </h3>
              <div className='flex flex-wrap gap-2'>
                {stack.map((tech) => (
                  <span className='bg-primary/10 text-primary px-4 py-2 rounded-full text-base mt-1' key={tech}>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
