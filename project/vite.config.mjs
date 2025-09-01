import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import jsconfigPaths from 'vite-jsconfig-paths'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const API_URL = `${env.VITE_APP_BASE_NAME}`
  const PORT = 3000

  return {
    server: {
      open: true,   // browser auto open
      port: PORT,   // default port 3000
      host: true
    },
    preview: {
      open: true,
      host: true
    },
    define: {
      global: 'window'
    },
    resolve: {
      alias: [
        // agar alias chahiye to uncomment karke add kar sakti ho
        // { find: 'assets', replacement: path.join(process.cwd(), 'src/assets') }
      ]
    },
    base: API_URL,
    plugins: [
      react(),
      jsconfigPaths(),
      tailwindcss()   // ✅ yahi add karna tha
    ]
  }
})
