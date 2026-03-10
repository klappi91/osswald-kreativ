import { Hero } from "@/components/hero";
import { GsapProvider } from "@/components/gsap-provider";
import { HomeSections } from "@/components/home-sections";
import { TrustBar } from "@/components/trust-bar";

export default function Home() {
  return (
    <GsapProvider>
      <Hero />
      <TrustBar />
      <HomeSections />
    </GsapProvider>
  );
}
