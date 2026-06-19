'use client'

import { useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

const images = [
  {
    id: 1,
    image: '/homeimg/2025UK.jpeg',
    title: 'Classical Dance Excellence',
    subtitle: 'Master the art of Bharatanatyam, Kathak & Odissi',
    description: 'Learn from award-winning gurus with 20+ years of experience',
    cta: 'Explore Classical Courses',
    color: 'from-purple-900/50 to-purple-700/50',
  },
  {
    id: 2,
    image: '/homeimg/4H7A9667.jpg',
    title: 'Contemporary Expression',
    subtitle: 'Find your unique voice through modern dance',
    description: 'Fusion workshops and choreography classes available',
    cta: 'Join Contemporary Classes',
    color: 'from-blue-900/50 to-blue-700/50',
  },
  {
    id: 3,
    image: '/homeimg/IMG_5323.jpeg',
    title: 'Cultural Folk Dances',
    subtitle: 'Celebrate India\'s rich cultural heritage',
    description: 'Garba, Bhangra, Lavani & more traditional forms',
    cta: 'Discover Folk Dances',
    color: 'from-amber-900/50 to-amber-700/50',
  },
  {
    id: 4,
    image: '/homeimg/DSC08704.jpeg',
    title: 'Bollywood Fusion',
    subtitle: 'Dance like your favorite stars',
    description: 'High-energy classes with latest Bollywood tracks',
    cta: 'Try Bollywood Dance',
    color: 'from-red-900/50 to-red-700/50',
  },
  {
    id: 5,
    image: '/02.jpg.jpeg',
    title: 'International Styles',
    subtitle: 'Ballet, Hip-Hop, Salsa & more',
    description: 'Global dance forms taught by international instructors',
    cta: 'Learn International Styles',
    color: 'from-green-900/50 to-green-700/50',
  },
  {
    id: 6,
    image: '/homeimg/DSC_0940.jpeg',
    title: 'International Styles',
    subtitle: 'Ballet, Hip-Hop, Salsa & more',
    description: 'Global dance forms taught by international instructors',
    cta: 'Learn International Styles',
    color: 'from-green-900/50 to-green-700/50',
  },
  {
    id: 7,
    image: '/homeimg/DSC_0041.jpeg',
    title: 'International Styles',
    subtitle: 'Ballet, Hip-Hop, Salsa & more',
    description: 'Global dance forms taught by international instructors',
    cta: 'Learn International Styles',
    color: 'from-green-900/50 to-green-700/50',
  },
  {
    id: 8,
    image: '/homeimg/IMG_0011.jpeg',
    title: 'International Styles',
    subtitle: 'Ballet, Hip-Hop, Salsa & more',
    description: 'Global dance forms taught by international instructors',
    cta: 'Learn International Styles',
    color: 'from-green-900/50 to-green-700/50',
  },
  {
    id: 9,
    image: '/homeimg/IMG_4237.jpeg',
    title: 'International Styles',
    subtitle: 'Ballet, Hip-Hop, Salsa & more',
    description: 'Global dance forms taught by international instructors',
    cta: 'Learn International Styles',
    color: 'from-green-900/50 to-green-700/50',
  },

   {
    id: 10,
    image: '/Garba Group 01.jpg.jpeg',
    title: 'International Styles',
    subtitle: 'Ballet, Hip-Hop, Salsa & more',
    description: 'Global dance forms taught by international instructors',
    cta: 'Learn International Styles',
    color: 'from-green-900/50 to-green-700/50',
  },

   {
    id: 11,
    image: '/sandesh 02.jpg.jpeg',  
    title: 'International Styles',
    subtitle: 'Ballet, Hip-Hop, Salsa & more',
    description: 'Global dance forms taught by international instructors',
    cta: 'Learn International Styles',
    color: 'from-green-900/50 to-green-700/50',
  },

]


export default function ImageGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const nextSlide = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  useEffect(() => {
    const timer = setInterval(nextSlide, 3000)
    return () => clearInterval(timer)
  }, [nextSlide])

  return (

    
    <section className="relative py-1 bg-gray-50 w-full flex justify-center">
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ backgroundImage: "url('/background.png')", backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', opacity: 0.4 }}></div>
      <div className="w-full max-w-[1400px] px-4 md:px-8">
        {/* <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Experience the Art of Dance
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our diverse dance disciplines through these breathtaking performances.
          </p>
        </div> */}

        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* Left Section: Large Preview */}
          <div className="flex-1 relative aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow-xl bg-gray-900 group">
            <Image
              src={images[activeIndex].image}
              alt={images[activeIndex].title}
              fill
              className="object-cover transition-all duration-500 ease-in-out group-hover:scale-105"
              priority
            />

          </div>

          {/* Right Section: Thumbnails */}
          <div className="w-full lg:w-1/4 flex flex-row lg:flex-col gap-4 overflow-x-auto pb-4 lg:pb-0 lg:overflow-y-auto lg:max-h-[600px] scrollbar-hide pr-2">
            {images.map((image, index) => (
              <div
                key={image.id}
                onClick={() => setActiveIndex(index)}
                className={`relative flex-shrink-0 w-[150px] sm:w-[180px] lg:w-full aspect-[16/10] rounded-xl overflow-hidden cursor-pointer transition-all duration-300 ease-out
                  ${index === activeIndex
                    ? 'ring-4 ring-amber-400 ring-offset-2 shadow-md'
                    : 'opacity-70 hover:opacity-100 hover:scale-[1.02] shadow-sm'
                  }`}
              >
                <Image
                  src={image.image}
                  alt={`Thumbnail for ${image.title}`}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-black/10 transition-opacity duration-300 ${index === activeIndex ? 'bg-black/0' : 'group-hover:bg-black/0'}`} />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
