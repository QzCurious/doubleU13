export default function Home() {
  return (
    <section className="space-y-2 border border-gray-400 p-4">
      <h2>Colors</h2>
      <div className="flex items-center gap-2">
        <div className="bg-primary size-5"></div>
        <span>primary</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-dark-blue size-5"></div>
        <span>dark-blue</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="bg-secondary size-5"></div>
        <span>secondary</span>
      </div>
    </section>
  );
}
