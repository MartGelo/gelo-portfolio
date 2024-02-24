'use client'
import React, { useState } from 'react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { FiExternalLink } from 'react-icons/fi'

export default function Project() {
    const [ascotPreviewOpen, setAscotPreviewOpen] = useState(false)
    const [comingSoonPreviewOpen, setComingSoonPreviewOpen] = useState(false)

    const openAscotPreview = () => {
        setAscotPreviewOpen(true)
    }

    const closeAscotPreview = () => {
        setAscotPreviewOpen(false)
    }

    const openComingSoonPreview = () => {
        setComingSoonPreviewOpen(true)
    }

    const closeComingSoonPreview = () => {
        setComingSoonPreviewOpen(false)
    }

    return (
        <div className="w-full py-12 lg:py-24 xl:py-32 border-t-2 bg-gray-800 max:h-screen border-gray-800 dark:border-gray-800">
            <main className="grid items-start gap-6 px-4 text-center lg:gap-12 lg:px-6">
                <div className="mx-auto space-y-2">
                    <h2 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl">
                        My Projects
                    </h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Check out some of my recent projects.
                    </p>
                </div>
                <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-2 lg:gap-12 lg:max-w-none xl:grid-cols-3">
                    <Card onClick={openAscotPreview}>
                        <CardContent className="p-4">
                            <img
                                alt="Image"
                                className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                height="225"
                                src="/ascot-enrollment.png"
                                width="400"
                            />
                        </CardContent>
                        <CardHeader className="p-4">
                            <h3 className="text-sm font-semibold">
                                ASCOT Enrollment System
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                            <div className="space-y-1">
                                <h2 className="text-lg font-semibold">
                                    Technology
                                </h2>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <Badge>React</Badge>
                                    <Badge>Next.js</Badge>
                                    <Badge>Node.js</Badge>
                                    <Badge>Firebase</Badge>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    {ascotPreviewOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="max-w-md bg-white p-6 rounded-lg">
                                <h2 className="text-xl font-semibold mb-4">
                                    Project Details
                                </h2>
                                <div className="flex justify-end">
                                    <a
                                        href="https://ascot-enrollment.vercel.app/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-blue-500">
                                        <FiExternalLink className="text-xl" />
                                    </a>
                                </div>
                                <CardContent className="p-4">
                                    <img
                                        alt="Image"
                                        className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                        height="225"
                                        src="/ascot-enrollment.png"
                                        width="400"
                                    />
                                </CardContent>
                                <p className="text-gray-600">
                                    The ASCOT Enrollment System is a
                                    comprehensive web application developed as
                                    part of the Agile Programming subject during
                                    the third year of studies. The primary goal
                                    of the system is to streamline and automate
                                    the enrollment process for students at
                                    Aurora State College of Technology (ASCOT).
                                    The application serves as a centralized
                                    platform to manage and handle the enrollment
                                    of ASCOT students efficiently.
                                </p>
                                <button
                                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                    onClick={closeAscotPreview}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                    <Card onClick={openComingSoonPreview}>
                        <CardContent className="p-4">
                            <img
                                alt="Image"
                                className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                height="225"
                                src="/coming-soon.jpg"
                                width="400"
                            />
                        </CardContent>
                        <CardHeader className="p-4">
                            <h3 className="text-sm font-semibold">
                                Coming Soon
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                            <div className="space-y-1">
                                <h2 className="text-lg font-semibold">
                                    Technology
                                </h2>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <Badge>React</Badge>
                                    <Badge>Next.js</Badge>
                                    <Badge>Node.js</Badge>
                                    <Badge>Firebase</Badge>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    {comingSoonPreviewOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="max-w-md bg-white p-6 rounded-lg">
                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-blue-500">
                                        <FiExternalLink className="text-xl" />
                                    </a>
                                </div>
                                <h2 className="text-xl font-semibold mb-4">
                                    Coming Soon Project Details
                                </h2>
                                <CardContent className="p-4">
                                    <img
                                        alt="Image"
                                        className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                        height="225"
                                        src="/coming-soon.jpg"
                                        width="400"
                                    />
                                </CardContent>
                                <p className="text-gray-600">
                                    Details about the upcoming project will be
                                    revealed soon. Stay tuned for exciting
                                    updates!
                                </p>
                                <button
                                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                    onClick={closeComingSoonPreview}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}

                    <Card onClick={openComingSoonPreview}>
                        <CardContent className="p-4">
                            <img
                                alt="Image"
                                className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                height="225"
                                src="/coming-soon.jpg"
                                width="400"
                            />
                        </CardContent>
                        <CardHeader className="p-4">
                            <h3 className="text-sm font-semibold">
                                Coming Soon
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400"></p>
                            <div className="space-y-1">
                                <h2 className="text-lg font-semibold">
                                    Technology
                                </h2>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <Badge>React</Badge>
                                    <Badge>Next.js</Badge>
                                    <Badge>Node.js</Badge>
                                    <Badge>Firebase</Badge>
                                </div>
                            </div>
                        </CardHeader>
                    </Card>

                    {comingSoonPreviewOpen && (
                        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                            <div className="max-w-md bg-white p-6 rounded-lg">
                                <div className="flex justify-end">
                                    <a
                                        href="#"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-gray-600 hover:text-blue-500">
                                        <FiExternalLink className="text-xl" />
                                    </a>
                                </div>
                                <h2 className="text-xl font-semibold mb-4">
                                    Coming Soon Project Details
                                </h2>
                                <CardContent className="p-4">
                                    <img
                                        alt="Image"
                                        className="aspect-video rounded-lg overflow-hidden object-cover object-center"
                                        height="225"
                                        src="/coming-soon.jpg"
                                        width="400"
                                    />
                                </CardContent>
                                <p className="text-gray-600">
                                    Details about the upcoming project will be
                                    revealed soon. Stay tuned for exciting
                                    updates!
                                </p>
                                <button
                                    className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                    onClick={closeComingSoonPreview}>
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </main>
        </div>
    )
}
