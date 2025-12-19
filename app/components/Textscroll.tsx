// components/DanceScrollText.tsx
'use client'

import { useState, useEffect, useRef, ReactNode } from 'react'
import { Music, Sparkles, Heart, Star, Trophy, Zap } from 'lucide-react'

interface DanceText {
    text: string
    icon: ReactNode
    color: string
    bgColor: string
}

const DanceScrollText = () => {
    const [scrollPosition, setScrollPosition] = useState(0)
    const contentRef = useRef<HTMLDivElement>(null)

    const danceTexts: DanceText[] = [
        {
            text: "Bharatanatyam",
            icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-purple-600",
            bgColor: "bg-purple-100"
        },
        {
            text: "Kathak",
            icon: <Star className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-blue-600",
            bgColor: "bg-blue-100"
        },
        {
            text: "Contemporary Dance",
            icon: <Zap className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-green-600",
            bgColor: "bg-green-100"
        },
        {
            text: "Bollywood Fusion",
            icon: <Heart className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-red-600",
            bgColor: "bg-red-100"
        },
        {
            text: "Odissi",
            icon: <Music className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-amber-600",
            bgColor: "bg-amber-100"
        },
        {
            text: "Folk Dance",
            icon: <Trophy className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-indigo-600",
            bgColor: "bg-indigo-100"
        },
        {
            text: "Hip Hop",
            icon: <Zap className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-pink-600",
            bgColor: "bg-pink-100"
        },
        {
            text: "Ballet",
            icon: <Star className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-rose-600",
            bgColor: "bg-rose-100"
        },
        {
            text: "Salsa",
            icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-orange-600",
            bgColor: "bg-orange-100"
        },
        {
            text: "Garba",
            icon: <Heart className="h-4 w-4 md:h-5 md:w-5" />,
            color: "text-emerald-600",
            bgColor: "bg-emerald-100"
        }
    ]

    const danceQuotes = [
        "Dance is the joy of movement and the heart of life.",
        "Great dancers are not great because of their technique, they are great because of their passion.",
        "To dance is to be out of yourself. Larger, more beautiful, more powerful.",
        "Dancing is like dreaming with your feet.",
        "The body says what words cannot.",
        "Dance is the hidden language of the soul.",
        "We should consider every day lost on which we have not danced at least once.",
        "Dance is the poetry of the foot.",
        "Dancing is creating a sculpture that is visible only for a moment.",
        "Life is the dancer and you are the dance."
    ]

    // Create scrolling content by duplicating arrays
    const scrollContent = [...danceQuotes.map(t => t)]
    const duplicatedContent = [...scrollContent, ...scrollContent]

    useEffect(() => {
        const scrollSpeed = 0.05
        let animationFrameId: number

        const animateScroll = () => {
            setScrollPosition(prev => {
                const newPosition = prev + scrollSpeed
                const contentWidth = contentRef.current?.scrollWidth || 0

                // Reset position when scrolled past half the content (since we duplicated it)
                if (newPosition >= contentWidth / 2) {
                    return 0
                }
                return newPosition
            })
            animationFrameId = requestAnimationFrame(animateScroll)
        }

        animateScroll()

        return () => {
            cancelAnimationFrame(animationFrameId)
        }
    }, [])

    return (
        <div className="w-full overflow-hidden bg-gradient-to-r from-gray-900 to-gray-800 py-4 md:py-6">

            {/* Second Row: Scrolling Phrases */}
            <div className="relative overflow-hidden bg-gradient-to-r from-primary-900/20 to-primary-700/20 py-3">
                <div className="flex">

                    {/* Duplicate for seamless scroll */}
                    <div
                        className="flex items-center space-x-8 md:space-x-16 animate-marquee"
                        style={{
                            transform: `translateX(-${scrollPosition * 0.8}px)`,
                            marginLeft: '32px'
                        }}
                    >
                        {duplicatedContent.map((text, index) => (
                            <div
                                key={`dup-${index}`}
                                className="flex items-center space-x-2 md:space-x-4"
                            >
                                <span className="text-white font-bold text-lg md:text-2xl whitespace-nowrap">
                                    {text}
                                </span>
                                <div className="h-6 w-1 bg-primary-400 rounded-full hidden md:block"></div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Gradient overlays for fade effect */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
            </div>


            {/* CSS Animations using inline style tag */}
            <style>
                {`
          @keyframes scroll-left {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          .animate-scroll-left {
            animation: scroll-left 30s linear infinite;
            display: flex;
          }

          @keyframes marquee {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }

          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
        `}
            </style>
        </div >
    )
}

export default DanceScrollText