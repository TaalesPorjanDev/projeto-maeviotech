import Link from 'next/link';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section id="contato"className="bg-surface-container py-24">
      <div className="container-maevio">
        <div className='bg-primary rounded-3xl py-16 md:py-24 text-center w-full px-6 md:px-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-foreground mb-4'>Pronto para começar seu projeto?</h2>
          <p className='text-primary-foreground/80 text-base md:text-lg max-w-lg mx-auto mb-8'>
            Tem uma ideia ou uma necessidade no seu negócio? Vamos conversar e encontrar a solução ideal para transformar seu projeto em realidade.
          </p>

          <Button
            nativeButton={false}
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-8  font-semibold
            text-base md:text-lg transition-transform hover:-translate-y-1.5 duration-200"
            render={
              <Link
                href={'https://wa.me/+5519994239492?text=sua+mensagem'}
                target="_blank"
                rel="noopener noreferrer"
              />
            }
          >
            Solicitar Orçamento
          </Button>
        </div>
      </div>
    </section>
  );
}
