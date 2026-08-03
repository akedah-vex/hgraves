export default function Card({ title, description }) {
  return (
    <div className="bg-white dark:bg-black/50 border border-zinc-200 dark:border-zinc-800 rounded-2xl p-6 shadow-[0_4px_12px_rgba(99,102,241,0.08)] dark:shadow-[0_4px_12px_rgba(59,130,246,0.12)] hover:shadow-[0_8px_20px_rgba(99,102,241,0.2)] dark:hover:shadow-[0_8px_20px_rgba(59,130,246,0.25)] transition-shadow duration-300 box-shadow-[0_0_25px_rgba(99, 102, 241, 0.25)] dark:box-shadow-[0_0_25px_rgba(59, 130, 246, 0.2)]">
      <h3 className="text-lg font-semibold mb-2 text-zinc-900 dark:text-white">{title}</h3>
      <p className="text-sm text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  );
}
