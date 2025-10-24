import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  structuredData?: object;
  noIndex?: boolean;
}

export default function SEO({
  title = "GB Tours & Travels - Premium Sri Lanka Tours & Travel Packages",
  description = "Discover Sri Lanka with GB Tours & Travels. Expert-guided tours, safaris, airport transfers, and custom packages. From 1-day city tours to 20-day adventures. Book your perfect Sri Lanka experience today!",
  keywords = "Sri Lanka tours, Sri Lanka travel packages, GB Tours Travels, Colombo airport transfer, Yala safari, Sigiriya tours, Kandy cultural tours, Ella train journey, Nuwara Eliya tea tours, Galle Fort tours, Sri Lanka tour operators, private tours Sri Lanka, luxury Sri Lanka tours, adventure tours Sri Lanka, wildlife safari Sri Lanka, cultural tours Sri Lanka, beach tours Sri Lanka, mountain tours Sri Lanka, UNESCO World Heritage sites Sri Lanka, guided tours Sri Lanka, tailor-made Sri Lanka tours, best tour company Sri Lanka, Sri Lanka travel agency, professional tour guides Sri Lanka, comfortable transport Sri Lanka",
  canonical,
  ogImage = "https://www.gbtourstravels.com/logo.jpg",
  ogType = "website",
  structuredData,
  noIndex = false
}: SEOProps) {
  const fullTitle = title.includes("GB Tours") ? title : `${title} | GB Tours & Travels`;
  const canonicalUrl = canonical || "https://www.gbtourstravels.com/";

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#D4AF37" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Robots */}
      {noIndex && <meta name="robots" content="noindex, nofollow" />}
      
      {/* Open Graph */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="GB Tours & Travels" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Additional SEO Meta Tags */}
      <meta name="author" content="GB Tours & Travels" />
      <meta name="publisher" content="GB Tours & Travels" />
      <meta name="copyright" content="GB Tours & Travels" />
      <meta name="language" content="en" />
      <meta name="geo.region" content="LK" />
      <meta name="geo.country" content="Sri Lanka" />
      <meta name="geo.placename" content="Sri Lanka" />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Predefined SEO configurations for different pages
export const seoConfigs = {
  home: {
    title: "GB Tours & Travels - Premium Sri Lanka Tours & Travel Packages",
    description: "Discover Sri Lanka with GB Tours & Travels. Expert-guided tours, safaris, airport transfers, and custom packages. From 1-day city tours to 20-day adventures. Book your perfect Sri Lanka experience today!",
    keywords: "Sri Lanka tours, Sri Lanka travel packages, GB Tours Travels, Colombo airport transfer, Yala safari, Sigiriya tours, Kandy cultural tours, Ella train journey, Nuwara Eliya tea tours, Galle Fort tours, Sri Lanka tour operators, private tours Sri Lanka, luxury Sri Lanka tours, adventure tours Sri Lanka, wildlife safari Sri Lanka, cultural tours Sri Lanka, beach tours Sri Lanka, mountain tours Sri Lanka, UNESCO World Heritage sites Sri Lanka, guided tours Sri Lanka, tailor-made Sri Lanka tours, best tour company Sri Lanka, Sri Lanka travel agency, professional tour guides Sri Lanka, comfortable transport Sri Lanka",
    structuredData: {
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
        "Private Transport"
      ],
      "address": {
        "@type": "ACMEPostalAddress",
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
      ]
    }
  },
  
  packages: {
    title: "Sri Lanka Tour Packages - 1 to 20 Day Tours | GB Tours & Travels",
    description: "Explore our comprehensive range of Sri Lanka tour packages. From 1-day city tours to 20-day grand adventures. Includes safaris, cultural tours, beach holidays, and mountain expeditions. Customizable itineraries available.",
    keywords: "Sri Lanka tour packages, 1 day Sri Lanka tour, 3 day Sri Lanka package, 5 day Sri Lanka tour, 7 day Sri Lanka trip, 10 day Sri Lanka holiday, 14 day Sri Lanka tour, 20 day Sri Lanka package, custom Sri Lanka tours, Sri Lanka tour itineraries, all-inclusive Sri Lanka tours, Sri Lanka travel deals, affordable Sri Lanka packages, luxury Sri Lanka tours, family Sri Lanka tours, honeymoon Sri Lanka packages, group Sri Lanka tours, private Sri Lanka tours, guided Sri Lanka tours, Sri Lanka tour booking, Sri Lanka tour prices, Sri Lanka tour reviews",
    canonical: "https://www.gbtourstravels.com/packages"
  },
  
  gallery: {
    title: "Sri Lanka Travel Gallery - Photos & Videos | GB Tours & Travels",
    description: "Browse our stunning gallery of Sri Lanka travel photos and videos. See the beauty of Sri Lanka through our safari adventures, cultural sites, beaches, mountains, and wildlife encounters. Plan your dream Sri Lanka trip.",
    keywords: "Sri Lanka travel photos, Sri Lanka tour gallery, Sri Lanka safari photos, Sri Lanka cultural sites photos, Sri Lanka beach photos, Sri Lanka mountain photos, Sri Lanka wildlife photos, Sri Lanka travel videos, Sri Lanka tourism images, Sri Lanka attractions photos, Sri Lanka UNESCO sites photos, Sri Lanka adventure photos, Sri Lanka nature photos, Sri Lanka temple photos, Sri Lanka tea plantation photos",
    canonical: "https://www.gbtourstravels.com/gallery"
  },
  
  about: {
    title: "About GB Tours & Travels - Your Trusted Sri Lanka Tour Partner",
    description: "Learn about GB Tours & Travels, Sri Lanka's premier tour operator. With years of experience, licensed guides, and comfortable vehicles, we provide unforgettable Sri Lanka travel experiences for international visitors.",
    keywords: "about GB Tours Travels, Sri Lanka tour company, Sri Lanka travel operator, Sri Lanka tour guides, Sri Lanka travel experience, Sri Lanka tour expertise, licensed Sri Lanka guides, professional Sri Lanka tours, Sri Lanka travel services, Sri Lanka tour company history, Sri Lanka travel agency information, Sri Lanka tour operator details",
    canonical: "https://www.gbtourstravels.com/about"
  },
  
  contact: {
    title: "Contact GB Tours & Travels - Book Your Sri Lanka Tour Today",
    description: "Contact GB Tours & Travels to book your perfect Sri Lanka tour. Call +94-720-532-077 or WhatsApp for instant booking. Get quotes, custom itineraries, and expert travel advice for your Sri Lanka adventure.",
    keywords: "contact GB Tours Travels, book Sri Lanka tour, Sri Lanka tour booking, Sri Lanka travel contact, Sri Lanka tour phone number, Sri Lanka tour WhatsApp, Sri Lanka tour inquiry, Sri Lanka tour quote, Sri Lanka travel consultation, Sri Lanka tour reservation, Sri Lanka travel booking, Sri Lanka tour information",
    canonical: "https://www.gbtourstravels.com/contact"
  }
};
