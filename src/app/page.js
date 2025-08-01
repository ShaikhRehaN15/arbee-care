import Image from "next/image";
import HeroSection from "./interactions";
// Mobile-specific logos for subsidiaries bar (replace with actual paths)
const mobileHeroLogos = [
  {
    gray: '/Arbee-Group-Short-Grey.svg',
    full: '/Arbee-Group-Short.svg',
    width: 59.5,
    height: 16,
    altGray: 'mobile arbee group gray',
    altFull: 'mobile arbee group',
  },    
  {
    gray: '/Arbee-Aquatic-Short-Grey.svg',
    full: '/Arbee-Aquatic-Short.svg',
    width: 71.59,
    height: 16,
    altGray: 'mobile arbee aquatic gray',
    altFull: 'mobile arbee aquatic',
  },
  {
    gray: '/Arbee-Biomarine-Short-Grey.svg',
    full: '/Arbee-Biomarine-Short.svg',
    width: 88.74,
    height: 49.57,
    altGray: 'mobile arbee biomarine gray',
    altFull: 'mobile arbee biomarine',
  },
  {
    gray: '/Arbee-Care-Short-Grey.svg',
    full: '/Arbee-Care-Short.svg',
    width: 49.67,
    height: 16,
    altGray: 'mobile arbee care gray',
    altFull: 'mobile arbee care',
  },
];

export default function Home() {
  return (
    <main>
      <section className="min-h-screen w-full">
        <HeroSection />
      </section>
    </main>
  );
}
