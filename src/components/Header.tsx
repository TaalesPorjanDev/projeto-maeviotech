import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="bg-background border-b border-gray-200">
      <div className="container-maevio flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image
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
          className="hidden md:inline-flex ml-6 h-11 bg-[#7C6FF0] hover:bg-[#5a4dd1] text-white font-semibold px-6 py-2.5 rounded-lg transition-colors"
        >
          Solicitar Orçamento
        </Button>
      </div>
    </header>
  );
}
