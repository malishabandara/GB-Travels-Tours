import { Link, useLocation } from "react-router-dom";
import { Menu, Phone } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Navbar() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const NavLink = ({ to, label }: { to: string; label: string }) => (
    <Link
      to={to}
      className={`text-sm font-medium transition-colors hover:text-primary ${
        pathname === to ? "text-primary" : "text-foreground/80"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <header
      className={`sticky top-0 z-50 w-full backdrop-blur supports-[backdrop-filter]:bg-background/70 border-b ${
        scrolled ? "border-border/60" : "border-transparent"
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="group inline-flex items-center gap-2">
          <img
            src="https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2Ff9220ba392b74ab6b15209877a41afc2?format=webp&width=128"
            alt="GB Travels & Tours logo"
            className="h-8 w-8 object-contain drop-shadow"
            decoding="async"
          />
          <span className="font-extrabold tracking-tight text-lg">
            <span className="text-primary">GB</span> Travels & Tours
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" label="Home" />
          <NavLink to="/packages" label="Packages" />
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/about" label="About" />
          <NavLink to="/contact" label="Contact" />
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden sm:inline-flex">
            <a href="tel:+94720532077">
              <Phone className="mr-2 h-4 w-4" /> Book Now
            </a>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="secondary"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetTitle className="sr-only">Navigation</SheetTitle>
              <div className="flex items-center gap-2 mb-6">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F59c2f306d6f4441883078c4e59f5f358%2Ff9220ba392b74ab6b15209877a41afc2?format=webp&width=128"
                  alt="GB Travels & Tours logo"
                  className="h-8 w-8 object-contain drop-shadow"
                  decoding="async"
                />
                <span className="font-extrabold tracking-tight text-lg">
                  <span className="text-primary">GB</span> Travels & Tours
                </span>
              </div>
              <nav className="grid gap-1">
                <SheetClose asChild>
                  <Link
                    to="/"
                    className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${pathname === "/" ? "bg-accent text-accent-foreground" : "text-foreground/80"}`}
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/packages"
                    className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${pathname === "/packages" ? "bg-accent text-accent-foreground" : "text-foreground/80"}`}
                  >
                    Packages
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/gallery"
                    className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${pathname === "/gallery" ? "bg-accent text-accent-foreground" : "text-foreground/80"}`}
                  >
                    Gallery
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/about"
                    className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${pathname === "/about" ? "bg-accent text-accent-foreground" : "text-foreground/80"}`}
                  >
                    About
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    to="/contact"
                    className={`rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${pathname === "/contact" ? "bg-accent text-accent-foreground" : "text-foreground/80"}`}
                  >
                    Contact
                  </Link>
                </SheetClose>
              </nav>
              <div className="mt-6">
                <Button asChild className="w-full">
                  <a href="tel:+94720532077">
                    <Phone className="mr-2 h-4 w-4" /> Book Now
                  </a>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
