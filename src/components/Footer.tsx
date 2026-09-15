'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Share2, Globe, Mail, Check, X } from 'lucide-react';
import { useState } from 'react';

export function Footer() {
  const [check, setCheck] = useState(false);
  const [error, setError] = useState(false)

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCheck(true);
        setTimeout(() => {
            setCheck(false)
        },1500)
    } catch (err) {
        setError(true);
        setTimeout(() => {
          setError(false);
        },1500)
        
    }
  };
  return (
    <footer className="py-16 md:py-24 bg-background">
      <section className="container-maevio px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className='space-y-4'>
            <Link href="/" className="flex items-center">
              <Image
                className="w-42 h-auto shrink-0 md:w-50"
                src="/images/maeviotech-logo.svg"
                alt="Maevio Tech"
                width={200}
                height={60}
                priority
              />
            </Link>
            <p className='text-muted-foreground'>
              Soluções Técnológicas precisas para negócios modernos e
              sofisticados.
            </p>
          </div>
          <div className="flex items-center">
            <button onClick={handleCopyLink}
              className="p-2 rounded-full bg-muted"
              aria-label={error ? 'Erro ao copiar link' : check ? "Link Copiado": "Compartilhar"}
            >
              {check ? <X /> : check ? <Check /> : <Share2 />}
            </button>

            <a
              href="https://projeto-maeviotech.vercel.app/"
              className="p-2 rounded-full bg-muted"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visitar site"
            >
              <Globe />
            </a>
            <a
              href="mailto:contato@maeviotech.com"
              className="p-2 rounded-full bg-muted"
              aria-label="Enviar e-mail"
            >
              <Mail />
            </a>
          </div>
        </div>
        <div className=" mt-10 pt-8 border-t border-border flex flex-col md:flex-row items-start md:itens-center 
        justify-between gap-2">
          <p className='text-muted-foreground'>© 2026 MaevioTech. Todos os direitos reservados.</p>

          
        </div>
      </section>
    </footer>
  );
}
