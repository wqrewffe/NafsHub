import path from 'path';
import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');

  return {
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.BACKEND_URL': JSON.stringify(
        mode === 'production'
          ? 'https://nafshub.onrender.com'
          : 'http://localhost:5000'
      )
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    server: {
      host: true,
      port: process.env.PORT || 5173
    },
    preview: {
      host: true,
      port: process.env.PORT || 5173
    }
  };
});
