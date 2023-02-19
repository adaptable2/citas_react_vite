import { defineConfig } from 'vite'
import pugPlugin from "vite-plugin-pug"
import react from '@vitejs/plugin-react'

const options = { pretty: true } // FIXME: pug pretty is deprecated!
const locals = { name: "My name" }

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), pugPlugin(options, locals)],
})





