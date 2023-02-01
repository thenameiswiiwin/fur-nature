'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import { Container } from './Container';

const links = [
  { href: '/products', label: 'Products' },
  { href: '/our-story', label: 'Our Story' },
  { href: '/workshop', label: 'Workshop' },
  { href: '/showroom', label: 'Showroom' },
];

export const Header = () => {
  const path = usePathname();

  return (
    <header className="relative z-10 w-full bg-beige">
      <Container className="flex items-center border-b border-black py-8">
        <Link href="/" className="text-3xl font-bold">
          Fur Nature
        </Link>
        <nav>
          <ul className="ml-12 flex [&_li]:ml-4">
            {links.map((link) => (
              <li key={link.href}>
                <Link className="relative" href={link.href}>
                  {link.href === path && (
                    <motion.span
                      layoutId="underline"
                      className="absolute left-0 top-full block h-[1px] w-full bg-black"
                    />
                  )}
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button className="ml-auto flex flex-row items-center">
          <AiOutlineShoppingCart size={25} />
          <span className="sr-only">Open cart</span>
          <span className="ml-2 flex h-5 w-5 items-center justify-center rounded-full bg-black text-white">
            1
          </span>
          <span className="sr-only">items in cart cart</span>
        </button>
      </Container>
    </header>
  );
};
