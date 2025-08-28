'use client';
import Link from 'next/link';

import { ContainerInner, ContainerOuter } from '@/components/Container';
import { ThemeSwitcher } from '@/components/ui/theme-switcher';
import { useEffect, useState } from 'react';

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  );
}

export function Footer() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pt-10 pb-16 dark:border-zinc-700/40">
          <ContainerInner>
            {/* Theme Switcher */}
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">About</NavLink>
                <NavLink href="/resume">Resume</NavLink>
                {/* <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/speaking">Speaking</NavLink>
                <NavLink href="/uses">Uses</NavLink> */}
              </div>
              <div className="flex items-center gap-4">
                {mounted && <ThemeSwitcher />}
                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Saifullah. All rights
                  reserved.
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  );
}
