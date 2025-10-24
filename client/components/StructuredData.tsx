import { packages } from "@/data/packages";

interface StructuredDataProps {
  type: 'homepage' | 'packages' | 'gallery' | 'about' | 'contact';
}

export default function StructuredData({ type }: StructuredDataProps) {
  const getStructuredData = () => {
    switch (type) {
      case 'homepage':
        return {
          "@context": "https://schema.org",
          "@type": "TravelAgency",
          "name": "GB Tours & Travels",
          "url": "https://www.gbtourstravels.com/",
          "logo": "https://www.gbtourstravels.com/logo.jpg",
          "image": "https://www.gbtourstravels.com/logo.jpg",
          "description": "Premium Sri Lanka tour packages, airport transfers, private transport, wildlife safaris, boat rides, and rafting. Tailored itineraries for international travelers.",
          "areaServed": {
            "@type": "Country",
            "name": "Sri Lanka"
          },
          "serviceType": [
            "Tour Packages",
            "Airport Transfers", 
            "Wildlife Safaris",
            "Cultural Tours",
            "Adventure Tours",
            "Private Transport",
            "Boat Rides",
            "Rafting Tours"
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "LK",
            "addressLocality": "Sri Lanka"
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+94-720-532-077",
            "contactType": "customer service",
            "availableLanguage": ["English", "Sinhala"]
          },
          "sameAs": [
            "https://wa.me/94720532077"
          ],
          "priceRange": "$$",
          "currenciesAccepted": "USD, LKR, EUR, GBP",
          "paymentAccepted": "Cash, Bank Transfer, Credit Card",
          "openingHours": "Mo-Su 00:00-23:59",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Sri Lanka Tour Packages",
            "itemListElement": packages.slice(0, 5).map((pkg, index) => ({
              "@type": "Offer",
              "position": index + 1,
              "itemOffered": {
                "@type": "TouristTrip",
                "name": pkg.title,
                "description": pkg.description,
                "duration": `P${pkg.days}D`,
                "priceFrom": pkg.priceFrom,
                "priceCurrency": "USD",
                "provider": {
                  "@type": "TravelAgency",
                  "name": "GB Tours & Travels"
                }
              }
            }))
          }
        };

      case 'packages':
        return {
          "@context": "https://schema.org",
          "@type": "ItemList",
          "name": "Sri Lanka Tour Packages",
          "description": "Comprehensive collection of Sri Lanka tour packages from 1-day city tours to 20-day grand adventures",
          "numberOfItems": packages.length,
          "itemListElement": packages.map((pkg, index) => ({
            "@type": "TouristTrip",
            "position": index + 1,
            "name": pkg.title,
            "description": pkg.moreDetails,
            "duration": `P${pkg.days}D`,
            "priceFrom": pkg.priceFrom,
            "priceCurrency": "USD",
            "provider": {
              "@type": "TravelAgency",
              "name": "GB Tours & Travels"
            },
            "offers": {
              "@type": "Offer",
              "price": pkg.priceFrom,
              "priceCurrency": "USD",
              "availability": "https://schema.org/InStock",
              "validFrom": "2025-01-01"
            }
          }))
        };

      case 'gallery':
        return {
          "@context": "https://schema.org",
          "@type": "ImageGallery",
          "name": "Sri Lanka Travel Gallery",
          "description": "Beautiful photos of Sri Lanka tours, safaris, cultural sites, and natural attractions",
          "url": "https://www.gbtourstravels.com/gallery",
          "provider": {
            "@type": "TravelAgency",
            "name": "GB Tours & Travels"
          }
        };

      case 'about':
        return {
          "@context": "https://schema.org",
          "@type": "AboutPage",
          "name": "About GB Tours & Travels",
          "description": "Learn about GB Tours & Travels, Sri Lanka's premier tour operator with years of experience in providing exceptional travel experiences",
          "url": "https://www.gbtourstravels.com/about",
          "mainEntity": {
            "@type": "TravelAgency",
            "name": "GB Tours & Travels"
          }
        };

      case 'contact':
        return {
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "name": "Contact GB Tours & Travels",
          "description": "Contact us to book your perfect Sri Lanka tour. Get quotes, custom itineraries, and expert travel advice",
          "url": "https://www.gbtourstravels.com/contact",
          "mainEntity": {
            "@type": "TravelAgency",
            "name": "GB Tours & Travels",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+94-720-532-077",
              "contactType": "customer service",
              "availableLanguage": ["English", "Sinhala"]
            }
          }
        };

      default:
        return null;
    }
  };

  const structuredData = getStructuredData();
  
  if (!structuredData) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData, null, 2)
      }}
    />
  );
}
