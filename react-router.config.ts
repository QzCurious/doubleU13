import type { Config } from "@react-router/dev/config";
import { vercelPreset } from "@vercel/react-router/vite";

export default {
  ssr: false,
  prerender: true,
  presets: [vercelPreset()],
} satisfies Config;
