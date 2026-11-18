import { ArrowBigRight } from "lucide-react";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="bg-blue-600 text-white py-40 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-4">
          Bring Change Home
        </h1>
        <a className="text-xl font-medium bg-blue-500 hover:bg-blue-400 rounded-3xl p-4 inline-flex items-center group transition-colors" href="#stories">
          Let our stories of hope inspire you. Take me there
          <span className="material-icons ml-2 transform group-hover:translate-x-1 transition-transform">
            <ArrowBigRight/>
          </span>
        </a>
      </div>

      <div className="max-w-4xl mx-auto mt-12">
        <Image
          width={1620}
          height={1080}
          priority
          src="/hero.png"
          alt="Smiling Indian children empowered through charity, education, and community support"
          className="w-full h-auto rounded-xl shadow-2xl object-cover"
        />
      </div>
    </section>
  );
}
