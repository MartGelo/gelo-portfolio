import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

export default function Qualification() {
    return (
        <>
            <div className="bg-gray-800 py-12 w-full">
                <div className="container grid max-w-6xl px-4 items-start gap-4 md:grid-cols-2 lg:px-6 lg:gap-8">
                    <div className="space-y-2 text-center md:space-y-4 md:text-left">
                        <h1 className="text-4xl text-white font-bold tracking-tighter lg:text-5xl xl:text-6xl">
                            Educational Background
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400">
                            I've had the opportunity to learn from some amazing
                            institutions. Here's a look at my educational
                            journey.
                        </p>
                    </div>
                    <div className="flex flex-col items-end justify-end space-y-2 md:space-y-4">
                        <div className="grid gap-1">
                            <h3 className="sr-only">LinkedIn</h3>
                            <h3 className="sr-only">GitHub</h3>
                            <h3 className="sr-only">Twitter</h3>
                        </div>
                        <div className="flex flex-col gap-1 min:flex-row">
                            <Link
                                className="inline-flex h-8 items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800"
                                href="#">
                                LinkedIn
                            </Link>
                            <Link
                                className="inline-flex h-8 items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800"
                                href="#">
                                GitHub
                            </Link>
                            <Link
                                className="inline-flex h-8 items-center rounded-lg bg-gray-100 px-3 text-sm dark:bg-gray-800"
                                href="#">
                                Twitter
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full py-12 lg:py-24 xl:py-32 bg-gray-400">
                <div className="container grid max-w-6xl px-4 space-y-12 md:space-y-16 lg:space-y-20 xl:space-y-24 lg:px-6">
                    <div className="grid gap-2">
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            College
                        </div>
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            High School
                        </div>
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Middle School
                        </div>
                        <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                            Elementary School
                        </div>
                    </div>
                    <div className="grid gap-4 md:gap-8">
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <div className="grid gap-1.5">
                                    <h3 className="font-bold text-white">
                                        Aurora State College of Technology
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        2021 - Present
                                    </p>
                                </div>
                                <Button size="sm" variant="outline">
                                    More Details
                                </Button>
                            </div>
                            <div className="grid gap-4">
                                <p>
                                    I am currently studying Information
                                    Technology with a focus on Application
                                    Programming at ASCOT. During my time here, I
                                    have been involved in several research
                                    projects, including one on web development.
                                    Additionally, I have established a coding
                                    club where I organize coding workshops to
                                    help students learn programming.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <div className="grid gap-1.5">
                                    <h3 className="font-bold text-white">
                                        Auora State College of Technology
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        2019 - 2020
                                    </p>
                                </div>
                                <Button size="sm" variant="outline">
                                    More Details
                                </Button>
                            </div>
                            <div className="grid gap-4">
                                <p>
                                    At ASCOT, I completed Science, Technology,
                                    Engineering, and Mathematics with honors. I
                                    also actively participated in various
                                    activities, especially those related to
                                    information technology.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <div className="grid gap-1.5">
                                    <h3 className="font-bold text-white">
                                        Diniog National High School
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        2014 - 2018
                                    </p>
                                </div>
                                <Button size="sm" variant="outline">
                                    More Details
                                </Button>
                            </div>
                            <div className="grid gap-4">
                                <p>
                                    My time at Diniog National High School was
                                    marked by my passion for science,
                                    mathematics, and experimentation. I
                                    participated in the school's science fair
                                    every year, as well as the mathematics fair.
                                    Additionally, I was a member of the school's
                                    leadership team and graduated from junior
                                    high with honors.
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex items-center gap-4">
                                <div className="grid gap-1.5">
                                    <h3 className="font-bold text-white">
                                        Diniog Elementary School
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        2007 - 2013
                                    </p>
                                </div>
                                <Button size="sm" variant="outline">
                                    More Details
                                </Button>
                            </div>
                            <div className="grid gap-4">
                                <p>
                                    At Diniog Elementary School, I was known for
                                    my curiosity and enthusiasm for learning. I
                                    was an avid reader and often participated in
                                    the school's book club discussions. I also
                                    enjoyed art classes in the school's drawing
                                    competition. My teachers appreciated my
                                    inquisitive nature and my willingness to
                                    help my classmates. I also finished my
                                    elementary as a First Honorable Mention.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 py-12 lg:py-24">
                <div className="container grid max-w-6xl px-4 items-start gap-4 md:grid-cols-2 lg:px-6 lg:gap-8">
                    <div className="space-y-2 text-center md:space-y-4 md:text-left">
                        <h2 className="text-3xl text-white font-bold tracking-tighter lg:text-5xl xl:text-6xl">
                            Get in Touch
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Have any questions about my educational journey?
                            Feel free to reach out.
                        </p>
                    </div>
                    <form className="grid gap-4 text-white md:gap-8">
                        <div className="flex flex-col gap-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                className="text-black"
                                id="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div className="flex flex-col text-white gap-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                className="text-black"
                                id="email"
                                placeholder="Enter your email"
                                required
                                type="email"
                            />
                        </div>
                        <div className="flex flex-col text-white gap-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                className="text-black"
                                id="message"
                                placeholder="Enter your message"
                                required
                            />
                        </div>
                        <Button type="submit">Submit</Button>
                    </form>
                </div>
            </div>
        </>
    )
}
