import React from 'react'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Contact() {
    return (
        <div className="bg-gray-800 py-12 lg:py-24">
            <div className="container grid max-w-6xl px-4 items-start gap-4 md:grid-cols-2 lg:px-6 lg:gap-8">
                <div className="space-y-2 text-center md:space-y-4 md:text-left">
                    <h2 className="text-3xl text-white font-bold tracking-tighter lg:text-5xl xl:text-6xl">
                        Get in Touch
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400">
                        Have any questions about my educational journey? Feel
                        free to reach out.
                    </p>
                </div>
                <form className="grid gap-4 md:gap-8">
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="name" className="text-white">
                            Name
                        </Label>
                        <Input
                            id="name"
                            placeholder="Enter your name"
                            required
                        />
                    </div>
                    <div className="flex flex-col  gap-2">
                        <Label htmlFor="email" className="text-white">
                            Email
                        </Label>
                        <Input
                            id="email"
                            placeholder="Enter your email"
                            required
                            type="email"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <Label htmlFor="message" className="text-white">
                            Message
                        </Label>
                        <Textarea
                            id="message"
                            placeholder="Enter your message"
                            required
                        />
                    </div>
                    <Button type="submit"> Submit</Button>
                </form>
            </div>
        </div>
    )
}
