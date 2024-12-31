"use client";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="w-full bg-black h-[60px] lg:h-[80px] flex flex-col items-center justify-between">
            <div className="w-full h-[1px] bg-[#3f3f3f]"></div>
            <div className="w-full flex items-center justify-between px-10 h-full">
                <div className="flex items-center gap-3">
                    <Image
                        src="/logo-tec.svg"
                        alt="logo-tec"
                        width={30}
                        height={30}
                        loading="lazy"
                    />
                    <span className="text-white font-semibold text-lg">
                        TEC ITB
                    </span>
                </div>
                <div className="flex items-center gap-3 text-[#fff9f0] text-sm gap-x-4 ">
                    <span>Our Social Media</span>
                    <div className="flex gap-4">
                        <Link
                            href="https://instagram.com/tec.itb"
                            target="_blank"
                        >
                            <Image
                                src="/ig-logo.svg"
                                alt="instagram-tec"
                                width={30}
                                height={30}
                                className="transition-transform duration-200 hover:scale-110"
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="https://id.linkedin.com/company/techno-entrepreneur-club-itb"
                            target="_blank"
                        >
                            <Image
                                src="/linkedin-logo.svg"
                                alt="linkedin-tec"
                                width={30}
                                height={30}
                                className="transition-transform duration-200 hover:scale-110"
                                loading="lazy"
                            />
                        </Link>
                        <Link
                            href="https://www.youtube.com/channel/UCuwQpHICo05t2WhDQ6wrokQ"
                            target="_blank"
                        >
                            <Image
                                src="/yt-logo.svg"
                                alt="youtube-tec"
                                width={30}
                                height={30}
                                className="transition-transform duration-200 hover:scale-110"
                                loading="lazy"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
