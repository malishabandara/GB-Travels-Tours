import { Facebook, Mail, Phone } from "lucide-react";

function TripadvisorIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <title>Tripadvisor</title>
      <circle
        cx="7.5"
        cy="9.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <circle
        cx="16.5"
        cy="9.5"
        r="2.5"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <path
        d="M4 15c1.5 1.5 3.5 2.5 6 2.5s4.5-1 6-2.5"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 6.5c0 1 1 2 3 2s3-1 3-2"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

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
            <a
              className="flex items-center gap-2 hover:text-primary"
              href="tel:+94720532077"
            >
              <Phone className="h-4 w-4" /> +94 72 053 2077
            </a>
          </div>
          <div className="mt-4 flex items-center gap-3 text-muted-foreground">
            <a className="hover:text-primary" href="#" aria-label="Facebook">
              <Facebook className="h-5 w-5" />
            </a>
            <a className="hover:text-primary" href="#" aria-label="Tripadvisor">
              <TripadvisorIcon className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-border/60">
        <div className="container py-4 text-xs text-muted-foreground flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} NextGen Web Works | +94 78 723 9394
          </p>
          <p>Made with passion for journeys.</p>
        </div>
      </div>
    </footer>
  );
}
