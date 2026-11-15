// EDIT THIS FILE: apna number aur social links yahan daalo.
export const CFG = {
  name: "JH Studio",
  founders: "Jasim and Huzaifa",
  // Country code ke saath, bina + aur bina 0 ke. Example: 923001234567
  phone: "923048997893",
  instagram: "https://instagram.com/_hj_studio_",
  facebook: "https://facebook.com/hjstudio4759",
  // Deploy ke baad apna Vercel link ya domain yahan daalo (SEO ke liye)
  siteUrl: "https://yourname.vercel.app",
};

export const wa = (text: string) =>
  `https://wa.me/${CFG.phone}?text=${encodeURIComponent(text)}`;
