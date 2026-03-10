import { Helmet } from "react-helmet-async";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  twitterHandle?: string;
}

const SEO = ({
  title = "Chill Master | Professional HVAC & MEP Solutions in UAE",
  description = "Chill Master provides professional HVAC installation, maintenance, ducting, ventilation, electrical and plumbing services for residential, commercial, and industrial projects across the UAE.",
  keywords = "HVAC UAE, MEP Solutions Dubai, AC Installation UAE, Maintenance AMC UAE, Ducting Solutions UAE, Ventilation Services UAE, Electrical Plumbing UAE",
  canonical = "https://chillmaster.ae",
  ogImage = "/og-image.png",
  ogType = "website",
  twitterHandle = "@chillmaster_ae",
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
      <meta name="robots" content="index, follow" />
    </Helmet>
  );
};

export default SEO;
