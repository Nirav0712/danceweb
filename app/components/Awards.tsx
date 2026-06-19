'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const awardImages = [
    '/awardimg/01.jpg',
    '/awardimg/02.jpg',
    '/awardimg/03.jpg',
    '/awardimg/04.jpg',
    '/awardimg/05.jpg',
    '/awardimg/06.jpg',
    '/awardimg/07.jpg',
    '/awardimg/08.jpg',
    '/awardimg/09.jpg',
    '/awardimg/10.jpg',
    '/awardimg/11.jpg',
    '/awardimg/12.jpg',
    '/awardimg/13.jpg',
    '/awardimg/14.jpg',
    '/awardimg/15.jpg',
    '/awardimg/16.jpg',
    '/awardimg/17.jpg',
    '/awardimg/18.jpg',
    '/awardimg/19.jpg',

]

export default function Awards() {
    const [currentIndex, setCurrentIndex] = useState(0)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % awardImages.length)
    }, [])

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + awardImages.length) % awardImages.length)
    }

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000)
        return () => clearInterval(timer)
    }, [nextSlide])

    return (
        <section className="py-16 bg-white overflow-hidden w-full flex flex-col items-center">
            <div className="w-full px-4 max-w-[1600px]">
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-2">
                        <span className="text-amber-400 text-2xl">✦</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                            ACHIVEMENT
                        </h2>
                        <span className="text-amber-400 text-2xl">✦</span>
                    </div>
                    <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
                </div>

                <div className="relative w-full mx-auto">
                    {/* Main Image Container (Enlarged and Proportional) */}
                    <div className="relative w-full h-auto max-w-[1550px] mx-auto overflow-hidden shadow-2xl bg-[#f5f5f5] transition-all duration-300">
                        <div
                            className="flex w-full transition-transform duration-700 ease-in-out items-center"
                            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                        >
                            {awardImages.map((image, index) => (
                                <div
                                    key={index}
                                    className="min-w-full flex items-center justify-center p-6 md:p-12"
                                >
                                    <div className="w-full flex items-center justify-center">
                                        <Image
                                            src={image}
                                            alt={`Award ${index + 1}`}
                                            width={1600}
                                            height={1000}
                                            className="w-full h-auto max-h-[600px] object-contain"
                                            priority={index === 0}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg text-gray-900 p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                            aria-label="Previous slide"
                        >
                            <ChevronLeft className="w-8 h-8" />
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-lg text-gray-900 p-4 rounded-full transition-all duration-300 opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
                            aria-label="Next slide"
                        >
                            <ChevronRight className="w-8 h-8" />
                        </button>

                        {/* Indicators */}
                        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
                            {awardImages.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentIndex(index)}
                                    className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-gray-900 w-10'
                                        : 'bg-gray-400 hover:bg-gray-600 w-4'
                                        }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
