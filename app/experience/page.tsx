import Link from "next/link";
import Card from "../components/card";
import Button from '../components/button'

export default function Experience() {
  return (
    <main className="text-center pt-30 px-4 max-w-3xl mx-auto min-h-screen h-screen overflow-y-auto scroll-pt-4 pt-8 [&::-webkit-scrollbar]:hidden
  [-ms-overflow-style:none]
  [scrollbar-width:none]">
      <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 dark:from-blue-300 dark:via-purple-300 dark:to-pink-500">
        Experience
      </h1>
      <p className="text-xl md:text-2xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto">
        Technical positions held, roles and responsibilities
      </p>

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-12">
        <Card 
          title="Software Engineer" 
          subTitle="NAWCWD Navair, Department of the Navy // 2021 - 2022" 
          description="Served as an embedded systems legacy maintainer, using Ada, python, C#, C and C++ to meet mission requirements." 
          bullets={[
            "Developed tooling in Python, C#, and Ada to assist in data analysis and parsing",
            "Maintained and updated legacy codebases to ensure continued functionality and performance",
            "Implemented MQTT messaging protocol in C/C++ using Mosquitto for secure and efficient data aggregation and offloading between embedded devices and backend systems",
            "Maintained Secret-level security clearance throughout employment"
          ]}  
        />

        <Card 
          title="Independent Software Developer" 
          subTitle="J St. Studio // 2023 - present" 
          description="Building a multiplayer roguelike prototype in Unreal Engine 5 as the foundation for an independent studio." 
          bullets={[
            "Designed and implemented core gameplay systems (combat, progression, level-ups, skills) for a multiplayer roguelike action-shooter prototype in Unreal Engine 5",
            "Built the full content pipeline end-to-end: 3D modeling, texturing, and asset integration using Blender + UE5",
            "Implemented custom combat systems and mechanics leveraging Unreal Engine 5's Gameplay Ability System."
            ]} />
        
        <Card 
          title="Information Technology Specialist" 
          subTitle="County of Colusa, CA // 2025 - present" 
          description="Delivered comprehensive IT support while strengthening organizational security posture for the county
employees and leadership." 
          bullets={[
            "Developed custom EDR tooling using PowerShell to enhance response capabilities",
            "Developed software wrappers for Microsofts’ User State Migration Tool (USMT)",
            ]} />

        <Card
          link="https://sovereigncomputersystems.com"
          title="Web Developer" 
          subTitle="Sovereign Computer Systems // 2025 - present" 
          description="Provides niche security-focused computing solutions to clients." 
          bullets={[
            "Currently under active development with Next.js"
            ]} />
      </div>

      <div className="flex justify-center">
        <Button variant="primary" href="https://www.linkedin.com/in/hjgraves/">
          Let's Connect
        </Button>
      </div>
    </main>
  );
}
