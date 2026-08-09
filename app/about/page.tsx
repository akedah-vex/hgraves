import Link from "next/link";
import Card from '../components/card';
import Button from '../components/button';
import Footer from "@/components/footer";
import Wrapper from "@/components/wrapper";

export default function About() {
  return (
    <Wrapper>
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        About Me
      </h1>
      <p className="text-xl text-left md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
        Hi there!
      </p>
      <p className="text-xl text-left md:text-1xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
        My name is Henry, I&apos;m a passionate software developer with experience across many domains. I'm seeking a collaborative team environment where I can contribute to meaningful
        software while continuing to grow as an engineer
      </p>
      <p className="text-xl md:text-1xl text-zinc-800 dark:text-zinc-800 mb-8 max-w-2xl mx-auto">
        Thank you for taking the time to look around!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 pt-10">
        {/* create a card component here */}
        <Card link="/experience" title="🔰 Experience" description="Git, Docker, Vercel, CI/CD Pipelines" />
        <Card link="/projects" title="⚒️ Projects" description="Check out my latest work!" />
        <Card link="/education" title="🎓 Education" description="My academic background and qualifications" />
        <Card link="/skills" title="🛠 Skills" description="My technical abilities and expertise" />
        <Card link="/contact" title="📇 Contact" description="Get in touch with me!" />
        <Card link="/resume" title="📄 Resume" description="Request a copy of my resume" />
      </div>

      <div className="flex justify-center">
        <Button variant="primary" href="/projects">
          Let's Connect!
        </Button>
      </div>
      <Footer />
    </Wrapper>
  );
}
