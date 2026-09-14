import Link from 'next/link';
import { Button } from './ui/button';

export function ContactSection() {
  return (
    <section className="bg-surface-container py-24">
      <div className="container-maevio">
        <div className='bg-primary rounded-3xl py-16 md:py-24 text-center w-full px-6 md:px-12'>
          <h2 className='text-3xl md:text-4xl font-bold text-primary-foreground mb-4'>Pronto para começar seu projeto?</h2>
          <p className='text-primary-foreground/80 text-base md:text-lg max-w-lg mx-auto mb-8'>
            Vamos transformar sua visão em uma experiência digital impecável.{' '}
            Entre em contato e vamos construir algo incrível juntos.
          </p>

          <Button
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
            Entrar em Contato
          </Button>
        </div>
      </div>
    </section>
  );
}
