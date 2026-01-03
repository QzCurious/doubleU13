export default function Home() {
  return (
    <section className="border border-gray-400 space-y-2 p-4">
      <h2>Colors</h2>
      <div className="flex items-center gap-2">
        <div className="size-5 bg-primary"></div>
        <span>primary</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="size-5 bg-dark-blue"></div>
        <span>dark-blue</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="size-5 bg-secondary"></div>
        <span>secondary</span>
      </div>
    </section>
  );
}
