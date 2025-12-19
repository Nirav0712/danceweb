// components/TestimonialSlider.tsx
'use client'

import { useState, useEffect, useCallback } from 'react'

interface Testimonial {
    id: number
    name: string
    title: string
    content: string
    avatar?: string
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Lorem P. Ipsum',
        title: 'Testimonial 1',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        avatar: '/s1-Photoroom.png'
    },
    {
        id: 2,
        name: 'Mr. Lorem Ipsum',
        title: 'Testimonial 2',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        avatar: '/s3-Photoroom.png'
    },
    {
        id: 3,
        name: 'Lorem Ipsum',
        title: 'Testimonial 3',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        avatar: '/s4-Photoroom.png'
    },
    {
        id: 4,
        name: 'Lorem De Ipsum',
        title: 'Testimonial 4',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        avatar: '/s5-Photoroom.png'
    },
    {
        id: 5,
        name: 'Ms. Lorem R. Ipsum',
        title: 'Testimonial 5',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.',
        avatar: '/s6-Photoroom.png'
    }
]

export default function TestimonialSlider() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [touchStart, setTouchStart] = useState<number | null>(null)
    const [touchEnd, setTouchEnd] = useState<number | null>(null)

    const minSwipeDistance = 50
    const slideInterval = 4500 // 4.5 seconds

    const nextSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
    }, [])

    const goToSlide = (index: number) => {
        setCurrentSlide(index)
    }

    // Touch handlers for mobile swipe
    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null)
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX)
    }

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return

        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance

        if (isLeftSwipe) {
            nextSlide()
        }
        if (isRightSwipe) {
            prevSlide()
        }
    }

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide()
            if (e.key === 'ArrowRight') nextSlide()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [prevSlide, nextSlide])

    // Auto slide
    useEffect(() => {
        const timer = setInterval(nextSlide, slideInterval)
        return () => clearInterval(timer)
    }, [nextSlide])

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 py-1 px-4">
            <div className="relative w-full max-w-4xl mx-auto">
                {/* Navigation Arrows */}
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    aria-label="Previous testimonial"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-10 p-2 text-gray-300 hover:text-orange-500 transition-colors duration-300"
                    aria-label="Next testimonial"
                >
                    <svg className="w-6 h-6 md:w-8 md:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </button>

                {/* Testimonial Content */}
                <div
                    className="overflow-hidden rounded-lg bg-gray-800/50 p-6 md:p-8"
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <div className="relative h-64 md:h-72">
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                className={`absolute inset-0 transition-all duration-500 ease-in-out ${index === currentSlide
                                    ? 'opacity-100 translate-x-0'
                                    : 'opacity-0 translate-x-full'
                                    }`}
                            >
                                <div className="flex flex-col items-center text-center h-full justify-center">
                                    {/* Avatar */}
                                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-linear-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-4">
                                        <span className="text-white text-xl font-semibold">
                                            <img src={testimonial.avatar} alt={testimonial.name} />
                                            {/* {testimonial.name.charAt(0)} */}
                                        </span>
                                    </div>

                                    {/* Name */}
                                    <h2 className="text-xl md:text-2xl font-medium text-orange-500 mb-2">
                                        {testimonial.name}
                                    </h2>

                                    {/* Title */}
                                    {/* <p className="text-gray-400 text-sm mb-4">{testimonial.title}</p> */}

                                    {/* Content */}
                                    <p className="text-gray-200 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                                        {testimonial.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-3 mt-8">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
                                ? 'bg-orange-500 scale-125'
                                : 'bg-gray-600 hover:bg-gray-500'
                                }`}
                            aria-label={`Go to testimonial ${index + 1}`}
                        />
                    ))}
                </div>

                {/* Mobile Swipe Hint */}
                <div className="text-center mt-4 text-gray-500 text-sm md:hidden">
                    Swipe left or right to navigate
                </div>
            </div>
        </section>
    )
}