import { defineConfig } from "@rsbuild/core";
import { pluginReact } from "@rsbuild/plugin-react";

export default defineConfig({
  plugins: [pluginReact()],
  source: {
    entry: {
      index: "src/index.tsx",
    },
  },
  output: {
    // Используем переменную окружения для определения базового пути
    // В GitHub Actions можно использовать имя репозитория
    assetPrefix: process.env.NODE_ENV === 'production'
      ? `/${process.env.REPOSITORY_NAME || 'english-notebook'}/`
      : '/',
  },
});
