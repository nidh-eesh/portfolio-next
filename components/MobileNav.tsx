"use client";

import { Sheet, SheetContent, SheetTitle, SheetTrigger} from "./ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci"
import { useState } from "react";


const links = [
    {
        name: "home",
        path: "/",
    },
    {
        name: "services",
        path: "/services",
    },
    {
        name: "resume",
        path: "/resume",
    },
    {
        name: "work",
        path: "/work",
    },
    {
        name: "contact",
        path: "/contact",
    },
]

const MobileNav = () => {
    const pathname = usePathname()
    const [sheetOpen, setSheetOpen] = useState(false);

    return (
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent" />
            </SheetTrigger>
            <SheetContent className="flex flex-col">
            <SheetTitle className="sr-only">Mobile navigation menu</SheetTitle>
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">
                            Nidheesh<span className="text-accent">.</span>
                        </h1>
                    </Link>
                </div>
                <nav className="flex flex-col justify-center items-center gap-8">{links.map((link, index) => {
                    return <Link href={link.path} key={index}
                        className={`${link.path === pathname && "text-accent border-b-2 border-accent"} text-xl capitalize hover:text-accent transition-all`}
                        onClick={() => setSheetOpen(false)}
                    >
                        {link.name}
                    </Link>
                })}</nav>

            </SheetContent>
        </Sheet>
    )
}

export default MobileNav