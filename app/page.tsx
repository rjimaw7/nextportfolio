import Image from 'next/image'
import Hero from './helpers/Hero'

export default function Home() {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24 border border-black">
    <main className="min-h-screen">
      <Hero />
    </main>
  )
}
