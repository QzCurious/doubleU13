import {
  animate,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";
import scrollDown from "./assets/arrow_circle_down.svg?url";
import hero1 from "./assets/hero-1.jpg?url";
import hero2 from "./assets/hero-2.jpg?url";
import hero3 from "./assets/hero-3.jpg?url";
import hero4 from "./assets/hero-4.jpg?url";
import hero5 from "./assets/hero-5.jpg?url";
import hero6 from "./assets/hero-6.jpg?url";

const enableLoadScreen = false;

export default function Route() {
  const [isLoadScreenComplete, setIsLoadScreenComplete] =
    useState(!enableLoadScreen);
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="relative">
      {/* <Colors /> */}

      {enableLoadScreen && <LoadScreen onComplete={setIsLoadScreenComplete} />}

      <Hero
        isLoadScreenComplete={isLoadScreenComplete}
        containerRef={containerRef}
      />

      <WhatsNext containerRef={containerRef} />
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

function LoadScreen({ onComplete }: { onComplete: (value: boolean) => void }) {
  const loadingDuration = 1.5;
  const progress = useMotionValue(0);
  const clipProgress = useMotionValue(0);
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);
  const percentRef = useRef<HTMLParagraphElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const displayedPercent = useTransform(progress, (value) => Math.round(value));
  const progressWidth = useTransform(progress, (value) => `${value}%`);

  const [displayedPercentValue, setDisplayedPercentValue] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  const h1X = useTransform(progress, (value) => {
    if (!h1Ref.current || !containerRef.current) return 0;

    const h1Rect = h1Ref.current.getBoundingClientRect();
    const style = window.getComputedStyle(containerRef.current);
    const paddingX =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

    const distance = containerRef.current.clientWidth - h1Rect.width - paddingX;
    return (value / 100) * distance;
  });

  const pX = useTransform(progress, (value) => {
    if (!pRef.current || !containerRef.current) return 0;

    const pRect = pRef.current.getBoundingClientRect();
    const style = window.getComputedStyle(containerRef.current);
    const paddingX =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

    const distance = containerRef.current.clientWidth - pRect.width - paddingX;
    return (value / 100) * distance;
  });

  const percentX = useTransform(progress, (value) => {
    if (!percentRef.current || !containerRef.current) return 0;

    const percentRect = percentRef.current.getBoundingClientRect();
    const style = window.getComputedStyle(containerRef.current);
    const paddingX =
      parseFloat(style.paddingLeft) + parseFloat(style.paddingRight);

    const distance =
      containerRef.current.clientWidth - percentRect.width - paddingX;
    return (value / 100) * distance;
  });

  useMotionValueEvent(displayedPercent, "change", (latest) => {
    setDisplayedPercentValue(latest);
  });

  useMotionValueEvent(clipProgress, "change", (latest) => {
    if (latest >= 100) {
      setIsComplete(true);
      onComplete(true);
    }
  });

  // trigger animation
  useEffect(() => {
    const progressAnimation = animate(progress, 100, {
      duration: loadingDuration,
      ease: "linear",
    });

    const clipAnimation = animate(clipProgress, 100, {
      duration: 0.5,
      ease: "easeInOut",
      delay: loadingDuration + 1,
    });

    return () => {
      progressAnimation.stop();
      clipAnimation.stop();
    };
  }, [progress, clipProgress]);

  const clipPath = useTransform(
    clipProgress,
    (value) => `inset(0 ${value}% 0 0)`,
  );

  if (isComplete) return null;

  return (
    <motion.div
      ref={containerRef}
      className="bg-dark-blue fixed inset-0 z-50 flex min-h-screen flex-col p-8"
      style={{ clipPath }}
    >
      <div className="text-white">
        <motion.h1
          ref={h1Ref}
          layout
          className="font-audiowide w-fit text-8xl"
          style={{ x: h1X }}
        >
          doubleU
        </motion.h1>

        <motion.p
          ref={pRef}
          className="font-orbitron mt-4 w-fit text-xl"
          style={{ x: pX }}
        >
          Explore & Build Cool Sites
        </motion.p>
      </div>

      <div className="mt-auto">
        <div className="ml-auto">
          <motion.p
            ref={percentRef}
            className="font-orbitron w-fit text-2xl text-white"
            style={{ x: percentX }}
          >
            <span className="text-5xl">
              {String(displayedPercentValue).padStart(2, "0")}
            </span>
            <span className="text-xl">%</span>
          </motion.p>
        </div>

        <div className="relative mt-4 h-px">
          <div className="absolute inset-0 bg-white/50"></div>
          <motion.div
            className="bg-secondary absolute inset-0"
            style={{ width: progressWidth }}
          />
        </div>
      </div>
    </motion.div>
  );
}

function Hero({
  isLoadScreenComplete,
  containerRef,
}: {
  isLoadScreenComplete: boolean;
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 5]);
  const blur = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);
  const spacerRef = useRef<HTMLDivElement>(null);
  const spacerHeight = useTransform(scrollYProgress, [0, 1], [0, 200], {
    clamp: false,
  });

  const images = [
    {
      src: hero1,
      alt: "Hero 1",
      finalPosition: { top: "10%", left: "5%" },
      finalTransform: { x: 0, y: 0 },
      delay: 0,
    },
    {
      src: hero2,
      alt: "Hero 2",
      finalPosition: { top: "15%", right: "8%" },
      finalTransform: { x: 0, y: 0 },
      delay: 0.2,
    },
    {
      src: hero3,
      alt: "Hero 3",
      finalPosition: { top: "50%", right: "3%" },
      finalTransform: { x: 0, y: "-50%" },
      delay: 0.4,
    },
    {
      src: hero4,
      alt: "Hero 4",
      finalPosition: { bottom: "15%", right: "10%" },
      finalTransform: { x: 0, y: 0 },
      delay: 0.6,
    },
    {
      src: hero5,
      alt: "Hero 5",
      finalPosition: { bottom: "10%", left: "8%" },
      finalTransform: { x: 0, y: 0 },
      delay: 0.8,
    },
    {
      src: hero6,
      alt: "Hero 6",
      finalPosition: { top: "50%", left: "2%" },
      finalTransform: { x: 0, y: "-50%" },
      delay: 1.0,
    },
  ];

  return (
    <>
      <motion.div
        className="bg-primary sticky top-0 min-h-screen overflow-hidden"
        style={{ filter }}
      >
        <motion.div
          className="absolute inset-0 grid size-full place-items-center"
          style={{ scale }}
        >
          {/* images */}
          <div className="absolute inset-0">
            {images.map((image, index) => (
              <motion.img
                key={index}
                src={image.src}
                alt={image.alt}
                className="absolute w-64 rounded-lg opacity-80 shadow-2xl transition-opacity hover:opacity-100"
                initial={{
                  left: "50%",
                  top: "50%",
                  x: "-50%",
                  y: "-50%",
                }}
                animate={
                  isLoadScreenComplete
                    ? {
                        ...image.finalPosition,
                        ...image.finalTransform,
                      }
                    : {
                        left: "50%",
                        top: "50%",
                        x: "-50%",
                        y: "-50%",
                      }
                }
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: image.delay,
                }}
              />
            ))}
          </div>

          <div className="relative z-10 text-center text-white">
            <h2 className="font-noto-sans-tc text-5xl font-medium">
              探索＆創造動態網頁
            </h2>
            <motion.div ref={spacerRef} style={{ height: spacerHeight }}>
              {/* spacer */}
            </motion.div>
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
        </motion.div>
      </motion.div>

      <div className="h-[200vh]" />
    </>
  );
}

function WhatsNext({
  containerRef,
}: {
  containerRef: React.RefObject<HTMLDivElement | null>;
}) {
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

  return (
    <motion.section
      className="fixed inset-0 h-screen border bg-gray-400"
      style={{ opacity }}
    >
      <div className="absolute inset-0 grid place-items-center">
        <motion.h2
          className="text-secondary font-orbitron text-center text-[9rem] leading-none font-medium"
          style={{ scale }}
        >
          Whats <br /> Coming Next
        </motion.h2>
      </div>
    </motion.section>
  );
}
