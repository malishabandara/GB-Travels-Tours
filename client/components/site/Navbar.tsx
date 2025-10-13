import { Link, useLocation } from "react-router-dom";
import { Plane, MapPin, Images, Phone } from "lucide-react";
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
            <a href="mailto:nikinihunukumbura@gmail.com?subject=Booking%20Inquiry%20-%20GB%20Travels%20%26%20Tours">
              <Phone className="mr-2 h-4 w-4" /> Book Now
            </a>
          </Button>
          <Button asChild variant="secondary" size="icon" className="md:hidden">
            <a href="/gallery" aria-label="Open Gallery">
              <Images className="h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
}
