import { useState } from 'react';
import { Button } from '../components/ui/button';
import { GraduationCap, Menu, X } from 'lucide-react';
import { cn } from '../lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="flex items-center space-x-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl font-bold">EduPrep</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="items-center hidden space-x-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
                onClick={(e) => {
                  e.preventDefault();
                  document.querySelector(item.href)?.scrollIntoView({
                    behavior: 'smooth',
                  });
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="items-center hidden space-x-4 md:flex">
            <a href="/login">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => console.log('Login clicked')}
            >
              Login
            </Button></a>
            <a href="/signup">
            <Button size="sm" onClick={() => console.log('Sign Up clicked')}>
              Sign Up
            </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden',
          'transition-all duration-300 ease-in-out',
          isMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'
        )}
      >
        <nav className="container flex flex-col px-4 py-4 mx-auto space-y-4">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium transition-colors text-muted-foreground hover:text-primary"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector(item.href)?.scrollIntoView({
                  behavior: 'smooth',
                });
                setIsMenuOpen(false);
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="flex flex-col pt-4 space-y-2 border-t">
          <a href="/login">
            <Button
              variant="ghost"
              size="sm"
            >
              Login
            </Button>
            </a>
            <a href="/signup">
            <Button size="sm" onClick={() => console.log('Sign Up clicked')}>
              Sign Up
            </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}