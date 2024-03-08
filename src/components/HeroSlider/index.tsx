import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function HeroSlider() {
    return (
        <section className="relative h-[100vh]">
            <picture className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 -z-10 dark:hidden">
                <img src="img/gradient.jpg" alt="gradient" className="w-full h-full object-cover" />
            </picture>
            <picture className="pointer-events-none absolute left-0 right-0 top-0 bottom-0 -z-10 hidden dark:block">
                <img src="img/gradient_dark.jpg" alt="gradient dark" className="w-full h-full object-cover" />
            </picture>

            <div className="container h-full">
                <div className="grid h-full items-center gap-4 md:grid-cols-12">
                    
                    <div className="col-span-6 flex h-full flex-col items-center justify-center pt-[113px] md:items-start xl:col-span-4">
                        <h1 className="mb-6 text-center font-display text-5xl text-jacarta-700 dark:text-white md:text-left lg:text-6xl xl:text-7xl">
                            Desbravando mundos literários!
                        </h1>
                        <p className="mb-8 text-center text-lg text-jacarta-500 dark:text-jacarta-200 md:text-left">
                            Descubra a sua próxima aventura com nossos resumos.
                        </p>
                        <div className="flex space-x-4">
                            <Link href={"/blog"} className="rounded-full bg-accent py-3 px-8 text-center font-semibold text-white shadow-accent-volume transition-all hover:bg-accent-dark">
                                Desbrave um novo mundo!
                            </Link>
                            {/* <a href="#" className="w-36 rounded-full bg-white py-3 px-8 text-center font-semibold text-accent shadow-white-volume transition-all hover:bg-accent-dark hover:text-white hover:shadow-accent-volume">
                                Explore
                            </a> */}
                        </div>
                    </div>

                    {/* Hero image */}
                    <div className="col-span-6 xl:col-span-8">
                        <div className="relative text-center md:pl-8 md:text-right">
                            <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="mt-8 inline-block w-72 rotate-[8deg] sm:w-[72] xl:w-[35rem]">
                                <defs>
                                    <clipPath id="clipping" clipPathUnits="userSpaceOnUse">
                                        <path d="M 0, 100 C 0, 17.000000000000004 17.000000000000004, 0 100, 0 S 200, 17.000000000000004 200, 100 183, 200 100, 200 0, 183 0, 100" fill="#9446ED"></path>
                                    </clipPath>
                                </defs>
                                <g clipPath="url(#clipping)">
                                    <image href="img/hero/hero.webp" width="200" height="200" clipPath="url(#clipping)" />
                                </g>
                            </svg>
                            <Image width={1000} height={1000} src="img/hero/3D_elements.webp" alt="" className="absolute top-0 animate-fly md:-right-[10%] " />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
