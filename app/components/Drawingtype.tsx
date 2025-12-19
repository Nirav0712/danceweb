'use client'

import { useState } from 'react'
import Image from 'next/image'

const galleryImages = [
    '/bollywoodnc/bd2.JPG',
    '/bollywoodnc/bd3.JPG',
    '/bollywoodnc/bd4.JPG',
]

export default function Drawingtype() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Section Header */}
                <div className="text-center mb-12">
                    {/* <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                        Our Moments
                    </span> */}
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Drawing Gallery
                    </h2>
                    <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                        Explore beautiful moments captured during our performances, events, and celebrations.
                    </p>
                </div>

                {/* Masonry Grid */}
                <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                    {galleryImages.map((image, index) => (
                        <div
                            key={index}
                            className="break-inside-avoid group cursor-pointer"
                            onClick={() => setSelectedImage(image)}
                        >
                            <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                                <Image
                                    src={image}
                                    alt={`Gallery image ${index + 1}`}
                                    width={400}
                                    height={300}
                                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    )
}