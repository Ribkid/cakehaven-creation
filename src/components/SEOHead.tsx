import { Helmet } from 'react-helmet-async';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  schemaData?: object;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title = "Custom Cakes Brisbane & Ipswich | Ribsys Cakes - Wedding & Birthday Cakes",
  description = "Premium custom cakes in Brisbane and Ipswich. Specializing in wedding cakes, birthday cakes, and celebration cakes. Fresh baked, artisan designs with local delivery.",
  keywords = "custom cakes Brisbane, wedding cakes Ipswich, birthday cakes Brisbane, celebration cakes, cake delivery Brisbane, artisan cakes, local baker Brisbane",
  image = "/lovable-uploads/f59f27a0-0fe7-4b7b-a197-cccc1cd9aded.png",
  url = "https://ribsys-cake.com",
  type = "website",
  schemaData
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      
      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Schema.org structured data */}
      {schemaData && (
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead;