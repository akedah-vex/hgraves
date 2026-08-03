import Hero from "./components/hero";

export default function Home() {
  return (
    <div className="w-full">
    <Hero 
      title="Henry J. Graves" 
      description="Software Engineer" 
      primaryLink="/about" 
      primaryText="About me" 
      secondaryLink="/projects" 
      secondaryText="My Projects" 
    />
    </div>
  );
}
