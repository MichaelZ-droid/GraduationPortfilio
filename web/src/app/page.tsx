import { portfolioData } from "@/data/portfolio";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Projects } from "@/components/Projects";
import { Learning } from "@/components/Learning";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100 selection:bg-indigo-500/30">
      <Hero data={portfolioData.personal} />
      <About data={portfolioData.personal} />
      <Projects data={portfolioData.projects} />
      <Learning data={portfolioData.learningReviews} />
      <Footer data={portfolioData.socials} />
    </main>
  );
}
