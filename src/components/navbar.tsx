"use client";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Team", href: "/team" },
    { name: "Our Program", href: "/our-program" },
];

export default function NavBar() {

    return (
        <>
            <div className="fixed left-0 top-0 z-50 w-full h-[80px] flex items-center bg-black px-[24px] py-[14px] lg:px-[72px] lg:py-[16px]">
                <div className="flex w-full items-center justify-between">
                    <Link href="/">
                        <Image
                            src="/logo-tec.svg"
                            alt="logo-tec"
                            width={40}
                            height={40}
                            loading="lazy"
                            className="" 
                        />
                    </Link>
                    <div className="flex flex-row items-center gap-[70px]">
                        {navLinks.map((navLink) => (
                            <Link
                                key={navLink.name}
                                href={navLink.href}
                                className={
                                    "w-auto text-center text-[#fff9f0] text-[20px] font-medium font-['Creato Display'] leading-[34.59px] tracking-[2.45px] hover:underline transition-all duration-300"// Highlight link aktif
                                }
                            >
                                {navLink.name || "Home"}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
