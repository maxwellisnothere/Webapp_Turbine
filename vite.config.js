import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // 👇 เพิ่มก้อนนี้เข้าไปครับ 👇
  server: {
    host: true, // อนุญาตให้เครื่องอื่น (ngrok) เข้าถึงได้
    allowedHosts: ['neriah-indirect-manie.ngrok-free.dev'], // อนุญาตโดเมน ngrok ของนาย (สำคัญ!)
  }
})