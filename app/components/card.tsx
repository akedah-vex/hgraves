export default function Card({ title, subTitle, description, bullets=[] }) {
  return (
    <div className="bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-[0_4px_12px_rgba(99,102,241,0.08)] dark:shadow-[0_4px_12px_rgba(59,130,246,0.12)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)] transition-shadow duration-300 box-shadow-[0_0_25px_rgba(99, 102, 241, 0.25)] dark:box-shadow-[0_0_25px_rgba(59, 130, 246, 0.2)]">
      <h2 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white text-left">{title}</h2>
      <p className="text-md text-zinc-600 dark:text-zinc-600 text-left">{subTitle}</p>
      <p className="text-sm text-zinc-500 dark:text-zinc-400 pt-2 text-left">{description}</p>
      <ul className="list-disc list-inside text-sm text-zinc-500 dark:text-zinc-400 pt-2 text-left">
        {bullets.map((bullet, index) => (
          <li key={index}>{bullet}</li>
        ))}
      </ul>
    </div>
  );
}
