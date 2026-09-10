'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeaderMobile } from '@/components/mobile/HeaderMobile';

export function Header() {
  return (
    <header className="bg-background border-b border-gray-200 z-50">
      <div className="container-maevio flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
            className="w-32 h-auto shrink-0 md:w-46"
            src="/images/maeviotech-logo.svg"
            alt="Maevio Tech"
            width={200}
            height={60}
            priority
          />
        </Link>

        <nav className="hidden md:flex flex-1 items-center justify-center gap-8">
          <Link
            href="/servicos"
            className="text-gray-600 font-medium transition-colors hover:text-[#7C6FF0]"
          >
            Serviços
          </Link>
          <Link
            href="/sobre"
            className="text-gray-600 font-medium transition-colors hover:text-[#7C6FF0]"
          >
            Sobre
          </Link>
          <Link
            href="/portfolio"
            className="text-gray-600 font-medium transition-colors hover:text-[#7C6FF0]"
          >
            Portfólio
          </Link>
          <Link
            href="/contato"
            className="text-gray-600 font-medium transition-colors hover:text-[#7C6FF0]"
          >
            Contato
          </Link>
        </nav>

        <Button
          render={<Link href="/orcamento" />}
          nativeButton={false}
          className="inline-flex ml-2 h-9 bg-[#5a4dd1] hover:bg-[#7C6FF0] text-white text-xs 
          font-semibold px-3 py-2 rounded-lg transition-colors md:ml-6 md:mr-4 md:h-11 md:px-6 md:text-base"
        >
          Solicitar Orçamento
        </Button>

        <HeaderMobile />
      </div>
    </header>
  );
}
