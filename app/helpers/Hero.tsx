import React from 'react'
import { Button } from "@/components/ui/button"

const Hero = () => {
  return (
    <section id='hero'
    className='mx-auto flex max-w-[980px] flex-col items-center gap-1 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20'
    >   
        <div className='flex flex-col gap-5'>
        <h1 className='text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl'>Crafting Everyday Progress</h1>
        <span className='max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl'>
        Not Chasing Perfection
        </span>
        </div>
        <div className='flex w-full items-center justify-center space-x-4 py-4 md:pb-10'>
        <Button className='h-11 px-4 py-2'>Projects</Button>
        <Button className='h-11 px-4 py-2' variant="outline">How I Work</Button>
        </div>
    </section>
  )
}

export default Hero