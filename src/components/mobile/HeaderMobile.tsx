'use client';

import Link from 'next/link';
import { navLinks } from "@/lib/nav-links";
import { useState } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';


export function HeaderMobile() {
  const [isOpen, setIsOpen] = useState(false);
  function openMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <div
        className="md:hidden shrink-0 p-1 rounded-md cursor-pointer ml-2"
        onClick={openMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </div>

      <div
        className={`absolute top-16 left-0 right-0 z-50 md:hidden flex flex-col px-6 py-4 bg-background shadow-lg border-t
             border-border
            transition-all duration-200 ease-in-out ${isOpen ? 'opacity-100 max-h-screen' : 'opacity-0 max-h-0 overflow-hidden'}`}
      >
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className='"text-gray-600 font-medium py-3 transition-colors hover:text-primary/90 text-right'
            onClick={() => setIsOpen(false)}
          >
              {link.label}
          </Link>
        ))}
        
      </div>
    </div>
  );
}
