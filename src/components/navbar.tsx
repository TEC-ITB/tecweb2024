"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const navLinks = [
    { name: "About Us", href: "/about-us" },
    { name: "Team", href: "/team" },
    { name: "Our Program", href: "/our-program" },
];

export default function NavBar() {
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="fixed left-0 top-0 z-50 w-full flex items-center bg-black px-[24px] py-[14px] lg:px-[72px] lg:py-[16px]">
                {/* Kontainer utama dengan justify-between */}
                <div className="flex w-full items-center justify-between">
                    {/* Logo */}
                    <Link href="/">
                        <img
                            src="/logo-tec.svg"
                            alt="logo-tec"
                            loading="lazy"
                            className="h-[40px]" // Tambahkan ukuran jika perlu
                        />
                    </Link>

                    {/* Link navigasi */}
                    <div className="flex flex-row items-center gap-[70px]">
                        {navLinks.map((navLink) => (
                            <Link
                                key={navLink.name}
                                href={navLink.href}
                                className={clsx(
                                    "w-auto text-center text-[#fff9f0] text-[20px] font-medium font-['Creato Display'] leading-[34.59px] tracking-[2.45px]",
                                    { "underline": pathname === navLink.href } // Highlight link aktif
                                )}
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
