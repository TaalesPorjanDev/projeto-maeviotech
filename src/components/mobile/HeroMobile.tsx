import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function HeroMobile() {
  return (
    <section className="md:hidden bg-background pt-10 pb-16 bg-linear-to-b from-white to-[#f5f3ff]">
      <div className="container-maevio flex flex-col items-start text-left gap-6 px-6">
        <h1 className="max-w-2xl text-4xl font-bold">
          Sites e sistemas web que fazem sua empresa{' '}
          <span className="text-[#5a4dd1]">vender mais</span>
        </h1>
        <p className="text-gray-600 text-base max-w-xl">
          Criamos experiências digitais modernas, rápidas e estratégicas para
          transformar visitantes em clientes.
        </p>
        <div className="flex flex-col items-center gap-4 w-full">
          <Button
            render={<Link href="/contato" />}
            nativeButton={false}
            className="bg-[#5a4dd1] hover:bg-[#7C6FF0] text-white h-auto w-full font-bold text-sm px-6 py-4 rounded-lg transition-colors"
          >
            Fale Comigo
            <ArrowRight className="ml-1 size-5" />
          </Button>
          <Link
            href="/portfolio"
            className="text-[#5a4dd1] font-semibold bg-violet-50 rounded-lg text-sm hover:bg-violet-100 transition-colors hover:text-[#7C6FF0] w-full text-center px-6 py-4"
          >
            Ver Portfólio
          </Link>
        </div>

        <div className="relative w-full mt-2 aspect-4/3 rounded-2xl overflow-hidden shadow-xl">
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
  );
}
