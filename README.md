# JH Studio website (Next.js + Tailwind + Framer Motion)

## Local pe chalana
```bash
npm install
npm run dev
```
Browser mein http://localhost:3000 kholo.

## Number aur social links badalna
`lib/config.ts` kholo:
```ts
phone: "92XXXXXXXXXX",   // country code ke saath, bina + aur bina 0 (923001234567)
instagram: "https://instagram.com/yourpage",
facebook: "https://facebook.com/yourpage",
siteUrl: "https://yourname.vercel.app",
```
Sab buttons (navbar, hero, cards, form, floating button) khud update ho jate hain.
Company ka naam badalna ho to `name` badlo, aur `components/Logo.tsx`, `app/layout.tsx` mein "JH Studio" text bhi dekh lo.

## Service ya FAQ add karna
`lib/data.tsx` mein `services`, `faq`, `team`, `steps` arrays hain. Naya item copy-paste karke badal do.

## Free live karna (Vercel)
1. github.com pe new repository banao.
2. Is folder ko GitHub pe push karo:
   ```bash
   git init
   git add .
   git commit -m "first commit"
   git branch -M main
   git remote add origin https://github.com/USERNAME/REPO.git
   git push -u origin main
   ```
3. vercel.com pe GitHub se login karo, Add New > Project, repo select karo, Deploy dabao.
4. Link milega: yourname.vercel.app. Us link ko `siteUrl` mein daal do.
5. Custom domain baad mein Vercel > Settings > Domains se jod sakte ho.

## Launch se pehle badalna
- Phone number aur social links
- Sample work ke demo cards ko asli projects se
- Team ki jagah asli photos (components/Team.tsx mein comment hai)
- Final company ka naam
