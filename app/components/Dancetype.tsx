'use client'

import { useState } from 'react'
import Image from 'next/image'

interface DanceCategory {
    id: string
    name: string
    images: { src: string; alt: string }[]
}

const danceCategories: DanceCategory[] = [
    {
        id: 'bollywood',
        name: 'Bollywood',
        images: [
            // { src: '/bollywoodnc/bd1.JPG', alt: 'Bollywood 1' },
            { src: '/bollywoodnc/bd2.JPG', alt: 'Bollywood 2' },
            { src: '/bollywoodnc/bd3.JPG', alt: 'Bollywood 3' },
            { src: '/bollywoodnc/bd4.JPG', alt: 'Bollywood 4' },
            { src: '/bollywoodnc/bd5.JPG', alt: 'Bollywood 5' },
            { src: '/bollywoodnc/bd6.JPG', alt: 'Bollywood 6' },
            { src: '/bollywoodnc/bd7.JPG', alt: 'Bollywood 7' },
            { src: '/bollywoodnc/bd8.JPG', alt: 'Bollywood 8' },
            { src: '/bollywoodnc/bd9.JPG', alt: 'Bollywood 9' },
            { src: '/bollywoodnc/bd10.JPG', alt: 'Bollywood 10' },
            { src: '/bollywoodnc/bd11.JPG', alt: 'Bollywood 11' },
            { src: '/bollywoodnc/bd12.JPG', alt: 'Bollywood 12' },
            { src: '/bollywoodnc/bd13.JPG', alt: 'Bollywood 13' },
            { src: '/bollywoodnc/bd14.JPG', alt: 'Bollywood 14' },
            { src: '/bollywoodnc/bd15.JPG', alt: 'Bollywood 15' },
            { src: '/bollywoodnc/bd16.JPG', alt: 'Bollywood 16' },
            { src: '/bollywoodnc/bd17.JPG', alt: 'Bollywood 17' },
            { src: '/bollywoodnc/bd18.JPG', alt: 'Bollywood 18' },
            { src: '/bollywoodnc/bd19.JPG', alt: 'Bollywood 19' },
            { src: '/bollywoodnc/bd20.JPG', alt: 'Bollywood 20' },
            { src: '/bollywoodnc/bd21.JPG', alt: 'Bollywood 21' },
            { src: '/bollywoodnc/bd22.JPG', alt: 'Bollywood 22' },
            { src: '/bollywoodnc/bd23.JPG', alt: 'Bollywood 23' },
            { src: '/bollywoodnc/bd24.JPG', alt: 'Bollywood 24' },
            { src: '/bollywoodnc/bd25.JPG', alt: 'Bollywood 25' },
            { src: '/bollywoodnc/bd26.JPG', alt: 'Bollywood 26' },
            { src: '/bollywoodnc/bd27.JPG', alt: 'Bollywood 27' },
            { src: '/bollywoodnc/bd28.JPG', alt: 'Bollywood 28' },
            { src: '/bollywoodnc/bd29.JPG', alt: 'Bollywood 29' },
            { src: '/bollywoodnc/bd30.JPG', alt: 'Bollywood 30' },
            { src: '/bollywoodnc/bd31.JPG', alt: 'Bollywood 31' },
            { src: '/bollywoodnc/bd32.JPG', alt: 'Bollywood 32' },
            { src: '/bollywoodnc/bd33.JPG', alt: 'Bollywood 33' },
        ]
    },
    {
        id: 'folk',
        name: 'Folk Dance',
        images: [
            { src: '/folkdnc/fd1.jpg', alt: 'Folk Dance 1' },
            { src: '/folkdnc/fd2.jpg', alt: 'Folk Dance 2' },
            { src: '/folkdnc/fd3.jpg', alt: 'Folk Dance 3' },
            { src: '/folkdnc/fd4.jpg', alt: 'Folk Dance 4' },
            { src: '/folkdnc/fd5.jpg', alt: 'Folk Dance 5' },
            { src: '/folkdnc/fd6.jpg', alt: 'Folk Dance 6' },
            { src: '/folkdnc/fd7.jpg', alt: 'Folk Dance 7' },
            { src: '/folkdnc/fd8.jpg', alt: 'Folk Dance 8' },
            { src: '/folkdnc/fd9.jpg', alt: 'Folk Dance 9' },
        ]
    },
    {
        id: 'contemporary',
        name: 'Contemporary',
        images: [
            { src: '/contemporarydnc/cd1.jpg', alt: 'Contemporary 1' },
            { src: '/contemporarydnc/cd2.jpg', alt: 'Contemporary 2' },
            { src: '/contemporarydnc/cd3.jpg', alt: 'Contemporary 3' },
            { src: '/contemporarydnc/cd4.jpg', alt: 'Contemporary 4' },
            { src: '/contemporarydnc/cd5.jpg', alt: 'Contemporary 5' },
            { src: '/contemporarydnc/cd6.jpg', alt: 'Contemporary 6' },
            { src: '/contemporarydnc/cd7.jpg', alt: 'Contemporary 7' },
            { src: '/contemporarydnc/cd8.jpg', alt: 'Contemporary 8' },
            { src: '/contemporarydnc/cd9.jpg', alt: 'Contemporary 9' },
            { src: '/contemporarydnc/cd10.jpg', alt: 'Contemporary 10' },
        ]
    },
    {
        id: 'patriotic',
        name: 'Patriotic',
        images: [
            { src: '/patrioticdnc/pd1.JPG', alt: 'Patriotic 1' },
            { src: '/patrioticdnc/pd2.JPG', alt: 'Patriotic 2' },
            { src: '/patrioticdnc/pd3.JPG', alt: 'Patriotic 3' },
            { src: '/patrioticdnc/pd4.JPG', alt: 'Patriotic 4' },
            { src: '/patrioticdnc/pd5.JPG', alt: 'Patriotic 5' },
            { src: '/patrioticdnc/pd6.JPG', alt: 'Patriotic 6' },
            { src: '/patrioticdnc/pd7.JPG', alt: 'Patriotic 7' },
            { src: '/patrioticdnc/pd8.JPG', alt: 'Patriotic 8' },
            { src: '/patrioticdnc/pd9.JPG', alt: 'Patriotic 9' },
            { src: '/patrioticdnc/pd10.JPG', alt: 'Patriotic 10' },
            { src: '/patrioticdnc/pd11.JPG', alt: 'Patriotic 11' },
            { src: '/patrioticdnc/pd12.JPG', alt: 'Patriotic 12' },

        ]
    },
    {
        id: 'religious',
        name: 'Religious',
        images: [
            { src: '/religiousdnc/rd1.JPG', alt: 'Religious 1' },
            { src: '/religiousdnc/rd2.JPG', alt: 'Religious 2' },
            { src: '/religiousdnc/rd3.JPG', alt: 'Religious 3' },
            { src: '/religiousdnc/rd4.JPG', alt: 'Religious 4' },
            { src: '/religiousdnc/rd5.JPG', alt: 'Religious 5' },
            { src: '/religiousdnc/rd6.JPG', alt: 'Religious 6' },
            { src: '/religiousdnc/rd7.JPG', alt: 'Religious 7' },
            { src: '/religiousdnc/rd8.JPG', alt: 'Religious 8' },
            { src: '/religiousdnc/rd9.JPG', alt: 'Religious 9' },
            { src: '/religiousdnc/rd10.JPG', alt: 'Religious 10' },
            { src: '/religiousdnc/rd11.JPG', alt: 'Religious 11' },
            { src: '/religiousdnc/rd12.JPG', alt: 'Religious 12' },
            { src: '/religiousdnc/rd13.JPG', alt: 'Religious 13' },
            { src: '/religiousdnc/rd14.JPG', alt: 'Religious 14' },
            { src: '/religiousdnc/rd15.JPG', alt: 'Religious 15' },
            { src: '/religiousdnc/rd16.JPG', alt: 'Religious 16' },
            { src: '/religiousdnc/rd17.JPG', alt: 'Religious 17' },
            { src: '/religiousdnc/rd18.JPG', alt: 'Religious 18' },
            { src: '/religiousdnc/rd19.JPG', alt: 'Religious 19' },
            { src: '/religiousdnc/rd20.JPG', alt: 'Religious 20' },
            { src: '/religiousdnc/rd21.JPG', alt: 'Religious 21' },
            { src: '/religiousdnc/rd22.JPG', alt: 'Religious 22' },
            { src: '/religiousdnc/rd23.JPG', alt: 'Religious 23' },
            { src: '/religiousdnc/rd24.JPG', alt: 'Religious 24' },
            { src: '/religiousdnc/rd25.JPG', alt: 'Religious 25' },
            { src: '/religiousdnc/rd26.JPG', alt: 'Religious 26' },
            { src: '/religiousdnc/rd27.JPG', alt: 'Religious 27' },
            { src: '/religiousdnc/rd28.JPG', alt: 'Religious 28' },
            { src: '/religiousdnc/rd29.JPG', alt: 'Religious 29' },
            { src: '/religiousdnc/rd30.JPG', alt: 'Religious 30' },
            { src: '/religiousdnc/rd31.JPG', alt: 'Religious 31' },
            { src: '/religiousdnc/rd32.JPG', alt: 'Religious 32' },
            { src: '/religiousdnc/rd33.JPG', alt: 'Religious 33' },
            { src: '/religiousdnc/rd34.JPG', alt: 'Religious 34' },
            { src: '/religiousdnc/rd35.JPG', alt: 'Religious 35' },
            { src: '/religiousdnc/rd36.JPG', alt: 'Religious 36' },
            { src: '/religiousdnc/rd37.JPG', alt: 'Religious 37' },
            { src: '/religiousdnc/rd38.JPG', alt: 'Religious 38' },
            { src: '/religiousdnc/rd39.JPG', alt: 'Religious 39' },
            { src: '/religiousdnc/rd40.JPG', alt: 'Religious 40' },
            { src: '/religiousdnc/rd41.JPG', alt: 'Religious 41' },
            { src: '/religiousdnc/rd42.JPG', alt: 'Religious 42' },
            { src: '/religiousdnc/rd43.JPG', alt: 'Religious 43' },
            { src: '/religiousdnc/rd44.JPG', alt: 'Religious 44' },
            { src: '/religiousdnc/rd45.JPG', alt: 'Religious 45' },
            { src: '/religiousdnc/rd46.JPG', alt: 'Religious 46' },
            { src: '/religiousdnc/rd47.JPG', alt: 'Religious 47' },
            { src: '/religiousdnc/rd48.JPG', alt: 'Religious 48' },
            { src: '/religiousdnc/rd49.JPG', alt: 'Religious 49' },
            { src: '/religiousdnc/rd50.JPG', alt: 'Religious 50' },
        ]
    },
    {
        id: 'western',
        name: 'Western',
        images: [
            { src: '/western/wd1.jpg', alt: 'Western 1' },
            { src: '/western/wd2.jpg', alt: 'Western 2' },
            { src: '/western/wd3.jpg', alt: 'Western 3' },
            { src: '/western/wd4.jpg', alt: 'Western 4' },
            { src: '/western/wd5.jpg', alt: 'Western 5' },
            { src: '/western/wd6.jpg', alt: 'Western 6' },
            { src: '/western/wd7.jpg', alt: 'Western 7' },
            { src: '/western/wd8.jpg', alt: 'Western 8' },
            { src: '/western/wd9.jpg', alt: 'Western 9' },
            { src: '/western/wd10.jpg', alt: 'Western 10' },
            { src: '/western/wd11.jpg', alt: 'Western 11' },
            { src: '/western/wd12.jpg', alt: 'Western 12' },
            { src: '/western/wd13.jpg', alt: 'Western 13' },
            { src: '/western/wd14.jpg', alt: 'Western 14' },
            { src: '/western/wd15.jpg', alt: 'Western 15' },
            { src: '/western/wd16.jpg', alt: 'Western 16' },
            { src: '/western/wd17.jpg', alt: 'Western 17' },
            { src: '/western/wd18.jpg', alt: 'Western 18' },
            { src: '/western/wd19.jpg', alt: 'Western 19' },
            { src: '/western/wd20.jpg', alt: 'Western 20' },
            { src: '/western/wd21.jpg', alt: 'Western 21' },
            { src: '/western/wd22.jpg', alt: 'Western 22' },
            { src: '/western/wd23.jpg', alt: 'Western 23' },
            { src: '/western/wd24.jpg', alt: 'Western 24' },
            { src: '/western/wd25.jpg', alt: 'Western 25' },
            { src: '/western/wd26.jpg', alt: 'Western 26' },
            { src: '/western/wd27.jpg', alt: 'Western 27' },
            { src: '/western/wd28.jpg', alt: 'Western 28' },
        ]
    },
]

export default function DanceType() {
    const [activeCategory, setActiveCategory] = useState('bollywood')

    const activeImages = danceCategories.find(cat => cat.id === activeCategory)?.images || []

    return (
        <section className="relative py-16 md:py-24 bg-linear-to-b from-gray-900 via-gray-800 to-gray-900">
            {/* Background Pattern */}
            <div
                className="absolute inset-0 opacity-5 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img/bg/map_bg_2.png')" }}
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                    {/* LEFT SIDEBAR */}
                    <div className="lg:w-64 shrink-0">
                        <h2 className="text-gray-400 text-lg font-semibold mb-6 tracking-wide">
                            Dance Type
                        </h2>
                        <div className="flex flex-row flex-wrap lg:flex-col gap-3">
                            {danceCategories.map((category) => (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveCategory(category.id)}
                                    className={`px-6 py-3 rounded-xl font-medium text-left transition-all duration-300 ${activeCategory === category.id
                                        ? 'bg-linear-to-r from-primary-500 to-primary-600 text-white shadow-lg shadow-primary-500/30 scale-105'
                                        : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700/50'
                                        }`}
                                >
                                    {category.name}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* GALLERY AREA */}
                    <div className="flex-1">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                            {activeImages.map((image, index) => (
                                <div
                                    key={`${activeCategory}-${index}`}
                                    className="group relative aspect-square rounded-xl overflow-hidden bg-gray-800 cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-primary-500/20"
                                    style={{
                                        animationDelay: `${index * 100}ms`,
                                    }}
                                >
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                        sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
                                    />

                                    {/* Hover Overlay */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <p className="text-white text-sm font-medium truncate">
                                                {image.alt}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Corner Accent */}
                                    <div className="absolute top-0 right-0 w-16 h-16 bg-linear-to-bl from-primary-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>
                            ))}
                        </div>

                        {/* Empty State */}
                        {activeImages.length === 0 && (
                            <div className="flex items-center justify-center h-64 bg-gray-800/30 rounded-xl border border-gray-700/50">
                                <p className="text-gray-400">No images available for this category</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}