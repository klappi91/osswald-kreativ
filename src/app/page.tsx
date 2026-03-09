import { Hero } from "@/components/hero";
import { GsapProvider } from "@/components/gsap-provider";
import { HomeSections } from "@/components/home-sections";

export default function Home() {
  return (
    <GsapProvider>
      <Hero />
      <HomeSections />
    </GsapProvider>
  );
}
