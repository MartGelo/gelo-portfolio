'use client'
import React from 'react'
import { useTheme } from 'next-themes'
import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Button } from './button'

export function ThemeToggleBtn() {
    const { theme, setTheme } = useTheme()

    return (
        <div>
            <Button
                className="h-10 rounded-full text-base bg-transparent"
                variant={'outline'}
                name="theme"
                size="icon"
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                aria-label="theme"
                role="button">
                <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
                <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </Button>
        </div>
    )
}
