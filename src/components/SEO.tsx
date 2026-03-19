import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
  schema?: object;
}

const SEO = ({
  title = "Chill Master | Professional HVAC Solutions in UAE",
  description = "Chill Master provides professional HVAC installation, maintenance, ducting, and ventilation services for residential, commercial, and industrial projects across the UAE.",
  keywords = "HVAC UAE, AC Installation UAE, Maintenance AMC UAE, Ducting Solutions UAE, Ventilation Services UAE, Chill Master Dubai, HVAC Services Sharjah",
  canonical = "https://chillmaster.ae",
  ogImage = "https://chillmaster.ae/og-image.png",
  ogType = "website",
  twitterHandle = "@chillmaster_ae",
  schema,
}: SEOProps) => {
  const siteTitle = title.includes("Chill Master") ? title : `${title} | Chill Master`;

  return (
    <Helmet>
      {/* Standard Metadata */}
      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <link rel="canonical" href={canonical} />
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />

      {/* Language Alternates */}
      <link rel="alternate" hrefLang="en-AE" href={canonical} />
      <meta name="geo.region" content="AE" />
      <meta name="geo.placename" content="United Arab Emirates" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="Chill Master" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      {twitterHandle && <meta name="twitter:site" content={twitterHandle} />}

      {/* Robots */}
      <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {JSON.stringify(schema)}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
