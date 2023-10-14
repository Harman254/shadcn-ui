import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="bg-black-100">
      <div className="container mx-auto px-5 py-24 flex flex-col items-center justify-center">
        <img
          className="w-full max-w-lg mb-6 object-cover object-center"
          src="/content-gallery-3.png"
          alt="Hero"
        />
        <div className="text-center w-full lg:w-2/3">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight mb-4">
            Turn Your Designs into Production-Ready Frontend
          </h1>
          <p className="text-xl lg:text-2xl mb-8">
            Ship products 5-10x faster with your existing design tools, tech
            stacks & workflows!
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              href="/projects"
              className={buttonVariants({ variant: "ghost" })}
            >
              View Projects
            </Link>

            <Button size="lg" variant="default" className="text-slate-400">
              Join Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
