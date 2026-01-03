export default function Route() {
  return (
    <div>
      <Colors />
      <LoadScreen />
    </div>
  );
}

function Colors() {
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

function LoadScreen() {
  return (
    <div className="bg-dark-blue relative flex min-h-screen flex-col p-8">
      <div className="text-white">
        <h1 className="text-8xl">doubleU</h1>
        <p className="mt-4 text-xl">Explore & Build Cool Sites</p>
      </div>

      <div className="mt-auto">
        <p className="text-2xl text-white">
          <span className="text-5xl">00</span>
          <span className="text-xl">%</span>
        </p>

        <div className="relative mt-4 h-px">
          <div className="absolute inset-0 bg-white/50"></div>
          <div className="bg-secondary absolute inset-0 w-1/2"></div>
        </div>
      </div>
    </div>
  );
}
