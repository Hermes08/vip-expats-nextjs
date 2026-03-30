const fs = require('fs');
const file = 'app/[lang]/layout.tsx';
let content = fs.readFileSync(file, 'utf8');

content = content.replace(
  'en: "Real Estate in Panama | Luxury Property & Investment | panamarealestatesale"',
  'en: "Panama Real Estate for Sale | Luxury Properties"'
);

content = content.replace(
  'en: "Find real estate in Panama: luxury beachfront condos, homes and investment properties. Expert guidance for expats and investors buying property in Panama."',
  'en: "Discover luxury Panama Real Estate for sale. Explore beachfront condos & investments. Contact us today to secure your dream home in Panama!"'
);

fs.writeFileSync(file, content);
console.log("Updated layout.tsx with new SEO meta data.");
