'use client'

import { useState } from 'react'
import Image from 'next/image'

interface Program {
    id: string
    name: string
    title: string
    description: string
    image: string
}

const programs: Program[] = [
    {
        id: 'dance',
        name: 'DANCE',
        title: 'Dance',
        description: 'We offer a wide variety of dance genres to help young dancers explore their unique style and creativity. From Bollywood, Hip-Hop, Contemporary, Folk, Classical, Garba, and Semi-Classical to fun freestyle sessions, our curriculum ensures every child gets the chance to learn something new and exciting. Each class is designed to boost confidence, flexibility, discipline, and self-expression.',
        image: '/homeimg/4H7A9606.JPG'
    },
    {
        id: 'gymnastics',
        name: 'GYMNASTICS',
        title: 'Gymnastics',
        description: 'We offer training across various forms and genres of gymnastics, including basic tumbling, balance skills, flexibility training, rhythmic movements, coordination exercises, and beginner-level artistic gymnastics. Each session is structured to build a strong foundation while keeping learning playful and enjoyable.',
        image: '/homeimg/DSC_1359.JPG'
    },
    {
        id: 'drama',
        name: 'DRAMA SPEAKING',
        title: 'Drama & Speaking',
        description: 'Through interactive sessions, children explore voice modulation, storytelling, dialogues, stage presence, and expressive movement. We believe learning should be engaging and practical, which is why our curriculum includes theatre visits, curated movie screenings, role-play activities, and hands-on performance workshops that bring real-world experiences into the classroom.',
        image: '/homeimg/Drama-Speaking.png'
    },
    {
        id: 'modeling',
        name: 'MODELING',
        title: 'Modeling',
        description: 'We create structured, child-friendly art experiences that model creativity, confidence, and self-expression. By providing thoughtfully curated materials and guided activities, we ensure children not only enjoy the process but also understand the concepts behind each creation. Our theme-based and seasonal art modules—ranging from festive décor to nature-inspired crafts—help children connect abstract ideas with real-world experiences.',
        image: '/homeimg/DSC_1663.JPG'
    },
    {
        id: 'drawing',
        name: 'DRAWING',
        title: 'Drawing',
        description: 'We provide well-maintained, safe, and high-quality art equipment, ensuring that every child enjoys a smooth and engaging learning experience. To keep creativity alive throughout the year, we offer seasonal and festival-based art activities—from making Diwali lanterns to Christmas ornaments and vibrant summer crafts. These hands-on projects help children learn about culture, nature, and real-world concepts through the joyful medium of art.',
        image: '/homeimg/image.png'
    },
    {
        id: 'spiritual',
        name: 'SPIRITUAL',
        title: 'Spiritual',
        description: 'We introduce children to the richness of our heritage through interactive storytelling, soulful bhajans, cultural activities, and thought-provoking sessions that encourage mindfulness, kindness, and emotional awareness. Each class is crafted to help children understand the roots of our traditions while developing confidence, discipline, and a positive outlook.',
        image: '/homeimg/spritualimg.png'
    }
]

interface ThreetypeProps {
    activeProgram: string
    setActiveProgram: (id: string) => void
}

export default function Stats({ activeProgram, setActiveProgram }: ThreetypeProps) {

    const currentProgram = programs.find(p => p.id === activeProgram) || programs[0]

    return (
        <section className="py-16 md:py-24 bg-linear-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4">
                {/* Program Tabs */}
                <div
                    className="flex flex-wrap justify-center gap-3 mb-12"
                    role="tablist"
                    aria-label="Programs"
                >
                    {programs.map((program) => (
                        <button
                            key={program.id}
                            onClick={() => setActiveProgram(program.id)}
                            className={`px-6 py-3 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 whitespace-nowrap ${activeProgram === program.id
                                ? 'bg-linear-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                                : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300 hover:text-primary-600 hover:shadow-md'
                                }`}
                            role="tab"
                            aria-selected={activeProgram === program.id}
                        >
                            {program.name}
                        </button>
                    ))}
                </div>

                {/* Content Panel */}
                <div className="max-w-6xl mx-auto">
                    <div
                        className="bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500"
                        role="tabpanel"
                    >
                        <div className="flex flex-col lg:flex-row">
                            {/* Text Content */}
                            <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                                    {currentProgram.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                                    {currentProgram.description}
                                </p>
                                <div className="mt-8">
                                    {/* <button className="px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:-translate-y-0.5">
                                        Learn More
                                    </button> */}
                                </div>
                            </div>

                            {/* Image */}
                            <div className="lg:w-1/2 relative">
                                <div className="aspect-4/3 lg:aspect-auto lg:h-full relative overflow-hidden">
                                    <Image
                                        src={currentProgram.image}
                                        alt={currentProgram.title}
                                        fill
                                        className="object-cover transition-transform duration-700 hover:scale-105"
                                        sizes="(max-width: 1024px) 100vw, 50vw"
                                    />
                                    {/* Gradient Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent lg:bg-linear-to-r lg:from-white lg:via-transparent lg:to-transparent" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -z-10 top-1/2 left-0 w-72 h-72 bg-primary-100 rounded-full blur-3xl opacity-30" />
                <div className="absolute -z-10 bottom-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-50" />
            </div>
        </section>
    )
}