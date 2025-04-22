"use client"

import { BsArrowDownRight } from "react-icons/bs"
import Link from "next/link"
import { motion } from "framer-motion"

const services = [
    {
        num: '01',
        title: 'Full Stack Web Developer',
        description: 'Built full-stack applications using React.js, Next.js, Node.js, and Django. Developed RESTful APIs, integrated cloud services like Firebase and Google Drive, and deployed scalable web apps using Vercel and AWS.',
        href: ''
    },
    {
        num: '02',
        title: 'Cloud & DevOps Engineer',
        description: 'Containerized applications with Docker, orchestrated deployments with Kubernetes, and implemented CI/CD pipelines using GitHub Actions and Jenkins. Deployed cloud-native apps on AWS and Azure with focus on scalability and uptime.',
        href: ''
    },
    {
        num: '03',
        title: 'Backend API Developer',
        description: 'Engineered secure and scalable backend systems using Node.js and Django. Designed REST APIs, optimized PostgreSQL and Firebase queries, and ensured robust authentication and data integrity.',
        href: ''
    },
    {
        num: '04',
        title: 'UI/UX & Frontend Developer',
        description: 'Created responsive and user-friendly interfaces using Tailwind CSS, React.js, and Next.js. Focused on accessibility, visual hierarchy, and performance to deliver smooth and interactive web experiences.',
        href: ''
    },
    {
        num: '05',
        title: 'System Integration Engineer',
        description: 'Integrated third-party APIs such as Google OAuth, Google Drive, and Twilio. Built real-time syncing systems and automated workflows for seamless data flow and reduced manual tasks.',
        href: ''
    },
    {
        num: '06',
        title: 'SEO & Performance Optimizer',
        description: 'Utilized Next.js features like SSR and static generation for SEO optimization. Deployed apps on edge networks for fast load times and optimized frontend performance using modern tooling.',
        href: ''
    }
]
const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
                    }}
                    className="grid grid-cols-1 md:grid-cols- gap-[60px]"
                >

                    {services.map((service, index) => {
                        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
                            <div className="w-full flex justify-between items-center">
                                <div className="text-5xl font-extrabold text-outline 
                                    text-transparent group-hover:text-outline-hover transition-all
                                    duration-500">
                                    {service.num}
                                </div>
                                <Link href={service.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent flex justify-center items-center transition-all duration-500 hover:-rotate-45">
                                    <BsArrowDownRight className="text-primary text-2xl" />
                                </Link>
                            </div>
                            <h2>{service.title}</h2>
                            <p className="text-white/60">{service.description}</p>
                            <div className="border-b border-white/20 w-full"></div>
                        </div>
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services