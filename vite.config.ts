import { defineConfig } from "vite"
import laravel from "laravel-vite-plugin"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import tsconfigpath from "vite-tsconfig-paths"

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/css/app.css', 'resources/js/App.tsx'],
      refresh: true,
    }),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tsconfigpath(),
    tailwindcss(),
  ]
});
