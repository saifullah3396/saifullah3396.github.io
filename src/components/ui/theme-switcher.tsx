'use client';

import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from 'next-themes';

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  const isDark = resolvedTheme === 'dark';

  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <Button variant="ghost" size="icon" onClick={toggleTheme}>
      <Sun
        className={`h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? 'scale-0 rotate-90' : 'scale-100 rotate-0'
        }`}
      />
      <Moon
        className={`absolute h-[1.2rem] w-[1.2rem] transition-all ${
          isDark ? 'scale-100 rotate-0' : 'scale-0 -rotate-90'
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
