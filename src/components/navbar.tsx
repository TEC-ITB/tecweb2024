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
        <div className="fixed left-0 top-0 z-50 w-full h-[80px] flex items-center bg-black px-6 sm:px-[24px] lg:px-[72px] py-3">
            <div className="flex w-full items-center justify-between">
                {/* Logo */}
                <Link href="/">
                    <Image
                        src="/logo-tec.svg"
                        alt="logo-tec"
                        width={32}
                        height={32}
                        loading="lazy"
                    />
                </Link>
                {/* Navigasi */}
                <div className="flex items-center gap-6 sm:gap-[50px] lg:gap-[70px]">
                    {navLinks.map((navLink) => (
                        <Link
                            key={navLink.name}
                            href={navLink.href}
                            onClick={
                                navLink.name === "About Us"
                                    ? handleAboutUsClick
                                    : undefined
                            }
                            className="text-[#fff9f0] text-[14px] sm:text-[16px] lg:text-[20px] font-medium tracking-wide hover:underline transition-all duration-300"
                        >
                            {navLink.name || "Home"}
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
    
}