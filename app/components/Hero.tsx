// components/HeroScroll.js
'use client'
import { useState, useEffect, useCallback, SetStateAction } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import Link from 'next/link'

const HeroScroll = () => {
    const slides = [
        {
            id: 1,
            image: '/homeimg/4H7A4034.JPG',
            title: 'Classical Dance Excellence',
            subtitle: 'Master the art of Bharatanatyam, Kathak & Odissi',
            description: 'Learn from award-winning gurus with 20+ years of experience',
            cta: 'Explore Classical Courses',
            color: 'from-purple-900/50 to-purple-700/50',
        },
        {
            id: 2,
            image: '/homeimg/4H7A9667.JPG',
            title: 'Contemporary Expression',
            subtitle: 'Find your unique voice through modern dance',
            description: 'Fusion workshops and choreography classes available',
            cta: 'Join Contemporary Classes',
            color: 'from-blue-900/50 to-blue-700/50',
        },
        {
            id: 3,
            image: '/homeimg/DSC_1187.JPG',
            title: 'Cultural Folk Dances',
            subtitle: 'Celebrate India\'s rich cultural heritage',
            description: 'Garba, Bhangra, Lavani & more traditional forms',
            cta: 'Discover Folk Dances',
            color: 'from-amber-900/50 to-amber-700/50',
        },
        {
            id: 4,
            image: '/homeimg/DSC_1597.JPG',
            title: 'Bollywood Fusion',
            subtitle: 'Dance like your favorite stars',
            description: 'High-energy classes with latest Bollywood tracks',
            cta: 'Try Bollywood Dance',
            color: 'from-red-900/50 to-red-700/50',
        },
        {
            id: 5,
            image: '/homeimg/DSC_1663.JPG',
            title: 'International Styles',
            subtitle: 'Ballet, Hip-Hop, Salsa & more',
            description: 'Global dance forms taught by international instructors',
            cta: 'Learn International Styles',
            color: 'from-green-900/50 to-green-700/50',
        },
    ]

    const [currentIndex, setCurrentIndex] = useState(0)
    const [isPlaying, setIsPlaying] = useState(true)
    const [isAnimating, setIsAnimating] = useState(false)

    const goToSlide = useCallback((index: SetStateAction<number>) => {
        if (isAnimating) return
        setIsAnimating(true)
        setCurrentIndex(index)
        setTimeout(() => setIsAnimating(false), 500)
    }, [isAnimating])

    const goToPrev = useCallback(() => {
        goToSlide(currentIndex === 0 ? slides.length - 1 : currentIndex - 1)
    }, [currentIndex, goToSlide, slides.length])

    const goToNext = useCallback(() => {
        goToSlide(currentIndex === slides.length - 1 ? 0 : currentIndex + 1)
    }, [currentIndex, goToSlide, slides.length])

    useEffect(() => {
        if (!isPlaying) return

        const interval = setInterval(() => {
            goToNext()
        }, 6000)

        return () => clearInterval(interval)
    }, [currentIndex, isPlaying, goToNext])

    const handleDotClick = (index: number) => {
        goToSlide(index)
        setIsPlaying(false)
        setTimeout(() => setIsPlaying(true), 10000)
    }

    return (
        <div className="relative h-screen w-full overflow-hidden group">
            {/* Slides */}
            <div className="relative h-full w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
                            }`}
                    >
                        <div
                            className="h-full w-full bg-cover bg-center bg-no-repeat"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className={`absolute inset-0 bg-linear-to-r ${slide.color}`}></div>



                            <div className="absolute inset-0 flex items-center">
                                <div className="container mx-auto px-8">
                                    <div className="max-w-2xl">
                                        <div className="mb-4">
                                            <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-sm rounded-full text-white text-sm font-medium">
                                                Featured Course
                                            </span>
                                        </div>
                                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 font-serif leading-tight">
                                            {slide.title}
                                        </h1>
                                        <h2 className="text-2xl md:text-3xl text-white/90 mb-4">
                                            {slide.subtitle}
                                        </h2>
                                        <p className="text-lg text-white/80 mb-8 max-w-xl">
                                            {slide.description}
                                        </p>
                                        {/* <div className="flex flex-col sm:flex-row gap-4">
                                            <Link href="/courses" className="btn-primary inline-flex items-center justify-center">
                                                {slide.cta}
                                            </Link>
                                            <button className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold py-3 px-6 rounded-lg transition flex items-center justify-center gap-2">
                                                <Play size={20} />
                                                Watch Demo
                                            </button>
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={goToPrev}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100 z-20"
                aria-label="Previous slide"
            >
                <ChevronLeft size={28} />
            </button>
            <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition opacity-0 group-hover:opacity-100 z-20"
                aria-label="Next slide"
            >
                <ChevronRight size={28} />
            </button>

            {/* Play/Pause Button */}
            {/* <button
                onClick={() => setIsPlaying(!isPlaying)}
                className="absolute top-8 right-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition z-20"
                aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            >
                {isPlaying ? <Pause size={24} /> : <Play size={24} />}
            </button> */}

            {/* Dots Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-3 z-20">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleDotClick(index)}
                        className={`h-3 w-3 rounded-full transition-all duration-300 ${index === currentIndex
                            ? 'bg-white scale-125'
                            : 'bg-white/50 hover:bg-white/80'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Slide Numbers */}
            {/* <div className="absolute bottom-8 right-8 text-white z-20 hidden md:block">
                <span className="text-2xl font-bold">{String(currentIndex + 1).padStart(2, '0')}</span>
                <span className="text-white/50 mx-2">/</span>
                <span className="text-white/50">{String(slides.length).padStart(2, '0')}</span>
            </div> */}

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 animate-bounce">
                <div className="flex flex-col items-center text-white/70">
                    <span className="text-sm mb-2">Scroll</span>
                    <div className="h-8 w-px bg-white/50"></div>
                </div>
            </div> */}
        </div>
    )
}

export default HeroScroll