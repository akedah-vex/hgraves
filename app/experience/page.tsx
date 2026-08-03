import Link from "next/link";
import Card from "../components/card";
import Button from '../components/button'

export default function Experience() {
  return (
    <main className="text-center px-4 max-w-3xl">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        Experience
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
        A detailed look at my professional journey, key roles, and the technologies I've used to build scalable solutions.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <Card title="Senior Frontend Engineer" description="TechCorp Inc. | 2021 - Present" />
        <Card title="Full Stack Developer" description="StartupXYZ | 2018 - 2021" />
        <Card title="Junior Developer" description="OpenSourceHub | 2016 - 2018" />
      </div>

      <div className="flex justify-center">
        <Button variant="primary" href="https://www.linkedin.com/in/hjgraves/">
          Let's Connect
        </Button>
      </div>
    </main>
  );
}
