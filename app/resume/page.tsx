"use client"

import {
    FaHtml5, FaCss3, FaJs, FaReact, FaFigma, FaNodeJs, FaPython, FaAws
} from "react-icons/fa"
import {
    SiTailwindcss, SiNextdotjs, SiDjango, SiExpress, SiPostgresql,
    SiMongodb, SiDocker,
    SiKubernetes, SiGithubactions
} from "react-icons/si"
import { VscAzure } from "react-icons/vsc";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger
} from "@/components/ui/tooltip"
import { ScrollArea } from "@/components/ui/scroll-area"
import { motion } from "framer-motion"
import Image from "next/image";

const about = {
    title: "About Me",
    description: "I am a passionate Full Stack Developer from Kerala, India, with experience in building scalable web applications, designing APIs, deploying to the cloud, and containerizing with Docker/Kubernetes. I enjoy solving real-world problems with clean code and effective architecture.",
    info: [
        { fieldName: "Name", fieldValue: "Nidheesh P" },
        { fieldName: "Phone", fieldValue: "+91 8129026864" },
        { fieldName: "Experience", fieldValue: "1+ Years" },
        { fieldName: "Gmeet", fieldValue: "+91 8129026864" },
        { fieldName: "Nationality", fieldValue: "Indian" },
        { fieldName: "Email", fieldValue: "nidheesh.p@outlook.com" },
        { fieldName: "Freelance", fieldValue: "Available" },
        { fieldName: "Languages", fieldValue: "English, Malayalam" }
    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "My Experience",
    description: "I've worked on real-world SaaS and enterprise solutions in both startup and professional environments. My roles have spanned backend engineering, DevOps, API integration, and full-stack development using modern JavaScript and Python frameworks.",
    items: [
        {
            company: "Efeone Pvt Ltd",
            position: "Junior Software Engineer",
            duration: "2023 - 2024"
        },
        {
            company: "Diwalco",
            position: "Software Developer",
            duration: "2025 - Present"
        }
    ]
}

const education = {
    icon: "/assets/resume/cap.svg",
    title: "My Education",
    description: "A blend of formal education and self-paced online courses to enhance my skills in software development and DevOps.",
    items: [
        {
            institution: "Institute of Engineering and Technology, Calicut University",
            degree: "Bachelor of Technology in Information Technology",
            duration: "2019 - 2023",
            href: "http://cuiet.info/",
            fullWidth: true
        },
        {
            institution: "TechWorld with Nana",
            degree: "Docker Tutorial for Beginners",
            duration: "2024",
            href: "https://www.youtube.com/watch?v=3c-iBn73dDE"
        },
        {
            institution: "TechWorld with Nana",
            degree: "Kubernetes Tutorial for Beginners",
            duration: "2024",
            href: "https://www.youtube.com/watch?v=X48VuDVv0do"
        },
        {
            institution: "The Net Ninja",
            degree: "TypeScript Crash Course",
            duration: "2024",
            href: "https://www.youtube.com/playlist?list=PL4cUxeGkcC9jLYyp2Aoh6hcWuxFDX6PBJ"
        },
        {
            institution: "The Net Ninja",
            degree: "Node.js Crash Course",
            duration: "2024",
            href: "https://www.youtube.com/watch?v=zb3Qk8SG5Ms"
        },
        {
            institution: "The Net Ninja",
            degree: "Full React Tutorial",
            duration: "2024",
            href: "https://www.youtube.com/watch?v=j942wKiXFu8"
        },
        {
            institution: "The Net Ninja",
            degree: "Modern JavaScript Tutorial",
            duration: "2024",
            href: "https://www.youtube.com/watch?v=iWOYAxlnaww"
        }
    ]
};

const skills = {
    icon: "/assets/resume/cap.svg",
    title: "My Skills",
    description: "My toolkit spans frontend, backend, databases, cloud platforms, and CI/CD—everything I need to deliver production-ready applications.",
    skillList: [
        { icon: <FaHtml5 />, name: "HTML5" },
        { icon: <FaCss3 />, name: "CSS3" },
        { icon: <FaJs />, name: "JavaScript" },
        { icon: <FaReact />, name: "React.js" },
        { icon: <SiNextdotjs />, name: "Next.js" },
        { icon: <SiTailwindcss />, name: "Tailwind CSS" },
        { icon: <FaNodeJs />, name: "Node.js" },
        { icon: <FaPython />, name: "Python" },
        { icon: <SiDjango />, name: "Django" },
        { icon: <SiExpress />, name: "Express.js" },
        { icon: <SiPostgresql />, name: "PostgreSQL" },
        { icon: <SiMongodb />, name: "MongoDB" },
        { icon: <FaAws />, name: "AWS" },
        { icon: <VscAzure />, name: "Azure" },
        { icon: <SiDocker />, name: "Docker" },
        { icon: <SiKubernetes />, name: "Kubernetes" },
        { icon: <SiGithubactions />, name: "GitHub Actions" },
        { icon: <FaFigma />, name: "Figma" }
    ]
}

const Resume = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="min-h-[80vh] xl:mt-10 flex items-start justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="grid grid-cols-2 sm:grid-cols-4 xl:grid-cols-1 w-full xl:max-w-[380px] xl:max-h-[320px] mx-auto xl:mx-0 gap-3 xl:gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About Me</TabsTrigger>
                    </TabsList>
                    <div className="min-h-[70vh] w-full">
                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center justify-center xl:justify-start gap-4">
                                    <Image src={experience.icon}
                                        alt="Experience Icon"
                                        width={24}
                                        height={24} />
                                    <h3 className="text-4xl font-bold">{experience.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="max-h-[400px]">
                                    <ul role="list" className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {experience.items.map((item, index) => {
                                            return <li role="listitem" key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">{item.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.company}</p>
                                                </div>
                                            </li>
                                        })}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <div className="flex items-center justify-center xl:justify-start gap-4">
                                    <Image src={education.icon}
                                        alt="Education Icon"
                                        width={24}
                                        height={24} />
                                    <h3 className="text-4xl font-bold">{education.title}</h3>
                                </div>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul role="list" className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {education.items.map((item, index) => (
                                            <li role="listitem"
                                                key={index}
                                                className={`bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1 ${item.fullWidth ? "lg:col-span-2" : ""
                                                    }`}
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl min-h-[60px] text-center lg:text-left">
                                                    {item.href ? (
                                                        <a
                                                            href={item.href}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="hover:underline"
                                                        >
                                                            {item.degree}
                                                        </a>
                                                    ) : (
                                                        item.degree
                                                    )}
                                                </h3>
                                                <div className="flex items-center gap-3">
                                                    <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                    <p className="text-white/60">{item.institution}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                                        {skills.description}
                                    </p>
                                </div>
                                <ScrollArea className="h-[500px]">
                                    <ul role="list" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 xl:gap-[30px] gap-4">
                                        {skills.skillList.map((skill, index) => (
                                            <li role="listitem" key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex flex-col justify-center items-center group text-center p-4">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                            {/* Show name below icon on mobile */}
                                                            <p className="mt-2 text-sm text-white/60 capitalize block sm:hidden">
                                                                {skill.name}
                                                            </p>
                                                        </TooltipTrigger>
                                                        <TooltipContent className="hidden sm:block">
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold ">{about.title}</h3>
                                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul role="list" className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[640px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => (
                                        <li role="listitem"
                                            key={index}
                                            className="flex items-center justify-center xl:justify-start gap-4"
                                        >
                                            <span className="text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">
                                                {item.fieldName === "Email" ? (
                                                    <a href={`mailto:${item.fieldValue}`} className="text-accent hover:underline">
                                                        {item.fieldValue}
                                                    </a>
                                                ) : item.fieldName === "Phone" || item.fieldName === "Gmeet" ? (
                                                    <a href={`tel:${item.fieldValue.replace(/\s+/g, "")}`} className="text-accent hover:underline">
                                                        {item.fieldValue}
                                                    </a>
                                                ) : (
                                                    item.fieldValue
                                                )}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume