// // tailwind config is required for editor support
// import type { Config } from "tailwindcss";
// import sharedConfig from "tailwind-config/tailwind.config.ts";
// console.log("🥤 ~ file: tailwind.config.ts:4 ~ sharedConfig:", sharedConfig)

// const config: Pick<Config, "prefix" | "presets"> = {
//   prefix: "ui-",
//   presets: [sharedConfig],
// };

// export default config;


import daisyuiLib from 'daisyui';

module.exports = {
  content: [
    '../../packages/ui/components/**/*.{ts,tsx}',
    '../../apps/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [daisyuiLib],
};