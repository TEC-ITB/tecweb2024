"use client";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import Image from "next/image";
import { useEffect, useState } from "react";

const navLinks = [
    { name: "About Us", href: "#about-us" },
    { name: "Team", href: "/team" },
    { name: "Our Program", href: "/our-program" },
];

export default function NavBar() {
    const router = useRouter();
    const pathname = usePathname();
    const [isMounted, setIsMounted] = useState(false);
    const [scrollToAboutUs, setScrollToAboutUs] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    useEffect(() => {
        if (scrollToAboutUs && pathname === "/") {
            document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
            setScrollToAboutUs(false);
        }
    }, [pathname, scrollToAboutUs]);

    const handleAboutUsClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();
        if (pathname !== "/") {
            setScrollToAboutUs(true);
            router.push("/");
        } else {
            document.getElementById("about-us")?.scrollIntoView({ behavior: "smooth" });
        }
    };

    if (!isMounted) return null;

    return (
        <div className="fixed left-0 top-0 z-50 w-full h-[80px] flex items-center bg-black px-[24px] py-[14px] lg:px-[72px] lg:py-[16px]">
            <div className="flex w-full items-center justify-between">
                <Link href="/">
                    <Image
                        src="/logo-tec.svg"
                        alt="logo-tec"
                        width={40}
                        height={40}
                        loading="lazy"
                    />
                </Link>
                <div className="flex flex-row items-center gap-[70px]">
                    {navLinks.map((navLink) => (
                        <Link
                            key={navLink.name}
                            href={navLink.href}
                            onClick={navLink.name === "About Us" ? handleAboutUsClick : undefined}
                            className={
                                "w-auto text-center text-[#fff9f0] text-[20px] font-medium font-['Creato Display'] leading-[34.59px] tracking-[2.45px] hover:underline transition-all duration-300"
                            }
                        >
                            {navLink.name || "Home"}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}