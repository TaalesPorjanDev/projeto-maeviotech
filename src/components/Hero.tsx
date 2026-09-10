import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { HeroMobile } from './mobile/HeroMobile';

export function HeroSection() {
  return (
    <>
      <HeroMobile />
      <section className="hidden md:block bg-background py-24 bg-linear-to-b from-white to-[#f5f3ff] pb-24">
        <div className="container-maevio flex flex-col justify-around md:flex-row md:items-center px-6">
          <div className="w-full md:w-[45%] flex flex-col gap-8">
            <h1 className="max-w-2xl text-4xl md:text-5xl  lg:text-6xl font-bold">
              Sites e <br className="hidden md:block" />
              sistemas web <br className="hidden md:block" />
              que fazem sua <br className="hidden md:block" />
              empresa
              <br className="hidden md:block" />
              <span className="text-[#5a4dd1]">vender mais</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg max-w-xl">
              Criamos experiências digitais modernas, rápidas e{' '}
              <br className="hidden md:block" /> estratégicas para transformar
              visitantes em <br className="hidden md:block" />
              clientes.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                render={<Link href="/contato" />}
                nativeButton={false}
                className="bg-[#5a4dd1] hover:bg-[#7C6FF0] text-white h-auto md:w-auto text-sm font-bold px-6 py-4 rounded-lg
                transition-colors md:px-8 md:text-lg"
              >
                Fale Comigo
                <ArrowRight className="ml-1 size-5" />
              </Button>
              <Link
                href="/portfolio"
                className="text-[#5a4dd1] font-semibold bg-violet-50 rounded-lg text-sm hover:bg-violet-100
              transition-colors hover:text-[#7C6FF0] w-full md:w-auto px-6 py-4 md:text-lg"
              >
                Ver Portfólio
              </Link>
            </div>
          </div>

          <div className="relative w-full md:w-[52%] aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/images/image-heromaevio.jpg"
              alt="Setup de desenvolvimento com monitores"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 42vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
