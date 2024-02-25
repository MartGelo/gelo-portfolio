import Link from 'next/link'
import { Badge } from '@/components/ui/badge'

export default function About() {
    return (
        <div className="w-full py-12 lg:py-24 xl:py-32 border-t-2 bg-gray-800 mx:h-screen border-gray-800 dark:border-gray-800 z-10">
            <div className="container grid item-center text-white lg:grid-cols-[1fr_300px] gap-12 px-4 lg:px-6 z-10">
                <div className="space-y-6 lg:space-y-3 xl:space-y-5">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter lg:text-4xl xl:text-5xl">
                            About Me
                        </h2>
                        <p className="text-gray-500 dark:text-gray-400">
                            Introduction to who I am
                        </p>
                    </div>
                    <div className="space-y-6">
                        <div className="flex flex-col gap-1 min-h-[100px]">
                            <div className="flex items-center space-x-2">
                                <div className="rounded-full overflow-hidden border-2  border-gray-200">
                                    <img
                                        alt="Avatar"
                                        className="rounded-full object-cover"
                                        height="64"
                                        src="/gelo.png"
                                        style={{
                                            aspectRatio: '64/64',
                                            objectFit: 'cover'
                                        }}
                                        width="64"
                                    />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-semibold">
                                        Gelo Martinez
                                    </h3>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Aspiring Software Engineer
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-2">
                                <BriefcaseIcon className="w-4 h-4 text-gray-500" />
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Joined Aurora State College of Technology
                                </p>
                                <time className="ml-auto text-sm text-gray-500 dark:text-gray-400">
                                    2021
                                </time>
                            </div>
                        </div>
                        <div className="space-y-6 ">
                            <div className="space-y-2">
                                <p className="text-gray-500 dark:text-gray-400">
                                    Hello! 👋 I'm a 20-year-old enthusiast from
                                    Aurora who has discovered a profound joy in
                                    programming as a habit. Currently in my
                                    third year of studies, I've immersed myself
                                    in the world of React.js, Node.js, and
                                    Next.js for almost a year now. Alongside my
                                    academic journey, I'm passionately building
                                    a dynamic team with my classmates, where
                                    creativity and collaboration thrive. Beyond
                                    the coding realm, I find inspiration not
                                    only in the challenges of programming but
                                    also in the captivating narratives of
                                    programming-infused C-dramas and K-dramas
                                    like "Hidden Love," "Start-Up," and "Lighter
                                    and Princess." These shows not only
                                    entertain but fuel my motivation in this
                                    exciting career path. A devoted music lover,
                                    I've discovered that playing and listening
                                    to music not only brings me peace but also
                                    enhances my productivity and keeps my mind
                                    active. With a deep sense of purpose, I plan
                                    to leverage my skills in the tech industry
                                    to share the uplifting message of Jesus
                                    through the vast reaches of the internet. I
                                    believe that through this career, I can make
                                    a positive impact and contribute to a world
                                    where technology and faith intersect. 🚀🎶✨
                                </p>
                            </div>
                            <div className="space-y-6 ">
                                <h2 className="text-lg font-semibold">
                                    Skills
                                </h2>
                                <div className="flex flex-wrap gap-2">
                                    <Badge>REACT JS</Badge>
                                    <Badge>NEXT JS</Badge>
                                    <Badge>NODE JS</Badge>
                                    <Badge>FIREBASE</Badge>
                                    <Badge>PYTHON</Badge>
                                    <Badge>JAVA</Badge>
                                </div>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-lg font-semibold">
                                    Contact Me
                                </h3>
                                <div className="grid grid-cols-2 items-start gap-4 text-sm sm:grid-cols-2">
                                    <div className="flex items-center space-x-2">
                                        <MailOpenIcon className="w-4 h-4 text-gray-500" />
                                        <span className="text-gray-500 dark:text-gray-400">
                                            Email
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        martangelomartinez@gmail.com
                                    </p>
                                    <div className="flex items-center space-x-2">
                                        <MapPinIcon className="w-4 h-4 text-gray-500" />
                                        <span className="text-gray-500 dark:text-gray-400">
                                            Location
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Pob III Baler Aurora Phil 3205
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

function BriefcaseIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="7" rx="2" ry="2" />
            <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
        </svg>
    )
}

function MailOpenIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
            <path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
        </svg>
    )
}

function MapPinIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
        </svg>
    )
}
