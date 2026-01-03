import scrollDown from "./assets/arrow_circle_down.svg?url";
import hero1 from "./assets/hero-1.jpg?url";
import hero2 from "./assets/hero-2.jpg?url";
import hero3 from "./assets/hero-3.jpg?url";
import hero4 from "./assets/hero-4.jpg?url";
import hero5 from "./assets/hero-5.jpg?url";
import hero6 from "./assets/hero-6.jpg?url";

export default function Route() {
  return (
    <div>
      <Colors />
      <LoadScreen />
      <Hero />
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
        <h1 className="font-audiowide text-8xl">doubleU</h1>
        <p className="font-orbitron mt-4 text-xl">Explore & Build Cool Sites</p>
      </div>

      <div className="mt-auto">
        <p className="font-orbitron text-2xl text-white">
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

function Hero() {
  return (
    <div className="bg-primary relative grid min-h-screen place-items-center overflow-hidden">
      {/* images */}
      <div className="absolute inset-0">
        <img
          src={hero1}
          alt="Hero 1"
          className="absolute top-[10%] left-[5%] w-64 rounded-lg opacity-80 shadow-2xl transition-opacity hover:opacity-100"
        />
        <img
          src={hero2}
          alt="Hero 2"
          className="absolute top-[15%] right-[8%] w-64 rounded-lg opacity-80 shadow-2xl transition-opacity hover:opacity-100"
        />
        <img
          src={hero3}
          alt="Hero 3"
          className="absolute top-[50%] right-[3%] w-64 -translate-y-1/2 rounded-lg opacity-80 shadow-2xl transition-opacity hover:opacity-100"
        />
        <img
          src={hero4}
          alt="Hero 4"
          className="absolute right-[10%] bottom-[15%] w-64 rounded-lg opacity-80 shadow-2xl transition-opacity hover:opacity-100"
        />
        <img
          src={hero5}
          alt="Hero 5"
          className="absolute bottom-[10%] left-[8%] w-64 rounded-lg opacity-80 shadow-2xl transition-opacity hover:opacity-100"
        />
        <img
          src={hero6}
          alt="Hero 6"
          className="absolute top-[45%] left-[2%] w-64 -translate-y-1/2 rounded-lg opacity-80 shadow-2xl transition-opacity hover:opacity-100"
        />
      </div>

      <div className="relative z-10 text-center text-white">
        <h2 className="font-noto-sans-tc text-5xl font-medium">
          探索＆創造動態網頁
        </h2>
        <p className="font-orbitron mt-4 text-7xl font-semibold">
          Explore & Build <br /> Web Animation
        </p>
      </div>

      <div className="absolute right-0 bottom-4 left-0">
        <div className="flex items-center justify-center gap-2">
          <p className="font-orbitron text-center text-sm text-white">
            scroll down
          </p>
          <img src={scrollDown} alt="scroll down" />
        </div>
      </div>
    </div>
  );
}
