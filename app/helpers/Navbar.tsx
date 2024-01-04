"use client"

import { Github, Moon, Sun } from 'lucide-react'
import { useTheme } from 'next-themes'
import React from 'react'


const Navbar = () => {

    const { setTheme} = useTheme()


    

  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'>
        <div className='container flex h-14 max-w-screen-2xl items-center justify-between'>
        <h3 className='text-2xl font-semibold tracking-tight'>alessandro</h3>
        
        <div className='flex items-center gap-3'>
            <Github className='cursor-pointer' />
            <Sun className="cursor-pointer dark:hidden"
            onClick={() => setTheme('dark')}
            />
            <Moon className="cursor-pointer hidden dark:inline-flex"
            onClick={() => setTheme('light')}
            />
        </div>
        </div>
    </header>
  )
}

export default Navbar