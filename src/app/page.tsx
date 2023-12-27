
import { Headers } from '@/components/header'
import Hero from '@/components/hero'
import Profile from '@/components/profile'

export default function Home() {
  return (
    <main>
      <Headers />
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
        <Hero />
        <Profile />
      </div>
    </main>
  )
}
