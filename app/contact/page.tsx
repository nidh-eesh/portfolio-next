"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"
import { motion } from "framer-motion"

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        data: "+91 8129026864",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        data: "nidheesh.p@outlook.com",
    },
    {
        icon: <FaMapMarkerAlt />,
        title: "Address",
        data: "Calicut, Kerala, India",
    },
]

const services = [
    {
        value: '01',
        title: 'Full Stack Web Development',
    },
    {
        value: '02',
        title: 'Cloud & DevOps Engineering',
    },
    {
        value: '03',
        title: 'Backend API Development',
    },
    {
        value: '04',
        title: 'UI/UX Design & Frontend Development',
    },
    {
        value: '05',
        title: 'System Integration & Automation',
    },
    {
        value: '06',
        title: 'SEO Optimization & Performance Engineering',
    }
]

const Contact = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
                            <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
                            <p className="text-white/60">I&apos;m excited to collaborate with you! Whether you&apos;re looking to build a full-stack web application, enhance your cloud infrastructure, or improve your website&apos;s performance, I bring the expertise and passion needed to turn your vision into reality. Let&apos;s connect and discuss how I can help bring your ideas to life!</p>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="Firstname"></Input>
                                <Input type="lastname" placeholder="Lastname"></Input>
                                <Input type="email" placeholder="Email Address"></Input>
                                <Input type="phone" placeholder="Phone Number"></Input>
                            </div>
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        {services.map((service) => (
                                            <SelectItem key={service.value} value={service.value}>
                                                {service.title}
                                            </SelectItem>
                                        ))}
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            <Textarea className="h-[200px]" placeholder="Type your message here"></Textarea>
                            <Button size="md" className="max-w-40 cursor-pointer">Send Message</Button>
                        </form>
                    </div>
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.data}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

        </motion.section>
    )
}

export default Contact