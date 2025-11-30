export default function StructuredData() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "GetSetGo Holidays",
        "description": "Premium travel agency offering tour packages to Dubai, Thailand, Japan, and Indian destinations",
        "url": "https://getsetgoholidays.com",
        "logo": "https://getsetgoholidays.com/images/logo.svg",
        "address": [
            {
                "@type": "PostalAddress",
                "streetAddress": "Office No. 3, 2nd Floor, Jitendra Villa, 1194/6, Ghole Rd",
                "addressLocality": "Pune",
                "addressRegion": "Maharashtra",
                "postalCode": "411005",
                "addressCountry": "IN"
            }
        ],
        "telephone": "+91-9881200242",
        "email": "sales@getsetgoholidays.com"
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
    );
}
