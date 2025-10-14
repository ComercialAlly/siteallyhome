const whatsappLinks = [
  'https://wa.me/5511977630591?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20tudo%20bem%20por%20ai%3F',
  'https://wa.me/5511950554193?text=Ol%C3%A1%2C%20vim%20pelo%20site%2C%20tudo%20bem%20por%20ai%3F',
];

let currentIndex = 0;

export const getWhatsAppLink = (): string => {
  const link = whatsappLinks[currentIndex];
  currentIndex = (currentIndex + 1) % whatsappLinks.length;
  return link;
};
