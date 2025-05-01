"use client"

import { motion } from "framer-motion"
import React, { useState } from "react"
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react"
import "swiper/css"
import { BsArrowUpRight, BsGithub } from "react-icons/bs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import Link from "next/link"
import Image from "next/image"
import WorkSliderBtns from "@/components/WorkSliderBtns"

interface StackItem {
    name: string;
}
interface Project {
    num: string;
    category: string;
    title: string;
    description: string;
    stack: StackItem[];
    image: string;
    live: string;
    github: string;
}

const projects: Project[] = [
    {
        num: "01",
        category: "fullstack",
        title: "Google Drive Letter Editor",
        description: "A scalable document rendering system using Next.js and Node.js. Features Google OAuth authentication, real-time auto-save with Firebase Firestore, and seamless integration with Google Drive API.",
        stack: [
            { name: "Next.js" },
            { name: "React.js" },
            { name: "Tailwind CSS" },
            { name: "Node.js" },
            { name: "Firebase" },
            { name: "Google Drive API" }
        ],
        image: "/assets/work/thumb1.png",
        live: "", // Add Vercel link if deployed
        github: "", // Add GitHub repo link
    },
    {
        num: "02",
        category: "backend",
        title: "Medication Reminder System",
        description: "An automated WhatsApp messaging system using Django and Twilio, designed to remind patients about medication schedules with a 99% delivery rate. Optimized PostgreSQL queries for performance.",
        stack: [
            { name: "Django" },
            { name: "Twilio API" },
            { name: "PostgreSQL" },
            { name: "Python" }
        ],
        image: "/assets/work/thumb2.png",
        live: "",
        github: "",
    },
    {
        num: "03",
        category: "devops",
        title: "Home Media Server",
        description: "Self-hosted Jellyfin-based media streaming server using Docker and Kubernetes. Includes load balancing, transcoding optimization for Tizen TV, and custom automation scripts for reduced maintenance.",
        stack: [
            { name: "Jellyfin" },
            { name: "Docker" },
            { name: "Kubernetes" },
            { name: "Shell Scripting" }
        ],
        image: "/assets/work/thumb3.png",
        live: "",
        github: "",
    },
    {
        num: "04",
        category: "mobile",
        title: "Personal Security App",
        description: "A mobile application designed to improve personal safety, built using Flutter for the frontend and Python for the backend services.",
        stack: [
            { name: "Flutter" },
            { name: "Python" }
        ],
        image: "/assets/work/thumb4.png",
        live: "",
        github: "https://github.com/nidh-eesh/Zentry",
    },
    {
        num: "05",
        category: "frontend",
        title: "Memory Game",
        description: "A simple and fun memory matching game implemented in React.js. Focused on interactivity, component reuse, and game logic using hooks and state management.",
        stack: [
            { name: "React.js" }
        ],
        image: "/assets/work/thumb5.png",
        live: "https://memento-react-b903a.web.app/",
        github: "https://github.com/nidh-eesh/memorize",
    },
    {
        num: "06",
        category: "frontend",
        title: "Asteroid Game",
        description: "A JavaScript-based mini game where players control a spaceship and shoot down asteroids. A demonstration of pure JS logic and canvas rendering.",
        stack: [
            { name: "JavaScript" }
        ],
        image: "/assets/work/thumb6.png",
        live: "https://asteroid-js.web.app/",
        github: "https://github.com/nidh-eesh/asteroids-js",
    }
]

const Work: React.FC = () => {
    const [project, setProject] = useState<Project>(projects[0])
    const handleSlideChange = (swiper: SwiperClass) => {
        // get current slide index
        const currentIndex = swiper.realIndex
        console.log(currentIndex);
        
        // update project state based on current slide index
        setProject(projects[currentIndex])
    }
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none" >
                        <div className="flex flex-col gap-[30px] h-[50%]">
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            <h2 className="text-[42px] font-bold leading-none text-white hover:text-accent transition-all duration-500 capitalize">{project.category}</h2>
                            <p className="text-white/60">{project.description}</p>
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => (
                                    <li key={index} className="text-xl text-accent capitalize">
                                        {item.name}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                ))}
                            </ul>
                            <div className="border border-white/20"></div>
                            <div className="flex items-center gap-4">
                                <Link href={project.live}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex justify-center items-center group">
                                                <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>Live Project</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                                <Link href={project.github}>
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                            <TooltipTrigger className="w-[70px] h-[70px] bg-white/5 rounded-full flex justify-center items-center group">
                                                <BsGithub className="text-white text-3xl group-hover:text-accent" />
                                            </TooltipTrigger>
                                            <TooltipContent>
                                                <p>GitHub</p>
                                            </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper
                            spaceBetween={30}
                            slidesPerView={1}
                            className="xl:h-[520px] mb-12"
                            onSlideChange={handleSlideChange}
                            loop={true}
                        >
                            {projects.map((project, index) => (
                                <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                                    {/* overlay */}
                                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                                    {/* image */}
                                    <div className="relative w-full h-full">
                                        <Image src={project.image} fill className="object-cover" alt={project.title || `Project ${project.num} Screenshot`}/>
                                    </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                            {/* slider buttons */}
                            <WorkSliderBtns containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                            btnStyles = "bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Work