import { defineConfig } from "vite";
import symfonyPlugin from "vite-plugin-symfony";
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        react(),
        symfonyPlugin(),
    ],
    build: {
        rollupOptions: {
            input: {
                app: 'frontend/src/main.jsx'
            },
            output: {
                entryFileNames: '[name].js', // Use '[name].js' to avoid hashed filenames
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        },
        outDir: 'public/build', // Ensure this matches your Symfony setup
    },
        
});
