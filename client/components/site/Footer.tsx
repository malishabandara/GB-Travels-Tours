import { Facebook, Instagram, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border/60 bg-secondary/30">
      <div className="container py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-lg font-semibold">GB Travels & Tours</h3>
          <p className="mt-3 text-sm text-muted-foreground max-w-sm">
            Premium travel experiences tailored to your time. From quick city
            escapes to grand tours, ride in comfort with cars and vans.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Quick Links
          </h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a className="hover:text-primary" href="/">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/packages">
                Packages
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/gallery">
                Gallery
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/about">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-primary" href="/contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Contact
          </h4>
          <div className="mt-3 space-y-2 text-sm">
            <a
              className="flex items-center gap-2 hover:text-primary"
              href="mailto:nikinihunukumbura@gmail.com"
            >
              <Mail className="h-4 w-4" /> gbtravels.com
            </a>
          </div>
          <div className="mt-4 flex items-center gap-3 text-muted-foreground">
            <a className="hover:text-primary" href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a className="hover:text-primary" href="#" aria-label="Instagram">
              <Instagram className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} GB Travels & Tours. All rights
            reserved.
          </p>
          <p>Made with passion for journeys.</p>
        </div>
      </div>
    </footer>
  );
}
