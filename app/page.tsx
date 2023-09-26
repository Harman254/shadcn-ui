import Hero from "@/components/Hero";
import Category from "@/components/Category";
import Pricing from "@/components/Pricing";

export default function Home() {
  return (
    <div className="w-full">
      <Hero />
      <Category />
      <Pricing />
    </div>
  );
}
