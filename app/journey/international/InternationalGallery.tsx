'use client'

import { useState } from 'react'
import Image from 'next/image'
import { X } from 'lucide-react'

interface EventData {
    name: string
    images: string[]
}

interface InternationalGalleryProps {
    events: EventData[]
}

export default function InternationalGallery({ events }: InternationalGalleryProps) {
    // Default to the first event (most recent)
    const [activeTab, setActiveTab] = useState(events[0]?.name || '')
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    const activeEvent = events.find(e => e.name === activeTab) || events[0]

    return (
        <div className="space-y-8">
            {/* Scrollable Tabs */}
            <div className="flex overflow-x-auto pb-4 gap-4 no-scrollbar">
                {events.map((event) => (
                    <button
                        key={event.name}
                        onClick={() => setActiveTab(event.name)}
                        className={`px-6 py-3 rounded-full whitespace-nowrap transition-all duration-300 font-semibold ${activeTab === event.name
                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/25'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                            }`}
                    >
                        {event.name}
                    </button>
                ))}
            </div>

            {/* Image Grid */}
            {activeEvent && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fadeIn">
                    {activeEvent.images.map((imgSrc, index) => (
                        <figure
                            key={`${activeEvent.name}-${index}`}
                            className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
                            onClick={() => setSelectedImage(imgSrc)}
                        >
                            <div className="aspect-4/3 relative overflow-hidden">
                                <Image
                                    src={imgSrc}
                                    alt={`${activeEvent.name} - Image ${index + 1}`}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                                {/* Overlay */}
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </figure>
                    ))}
                </div>
            )}

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-6 right-6 p-2 text-white/70 hover:text-white transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-10 h-10" />
                    </button>
                    <div
                        className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Image
                            src={selectedImage}
                            alt="Gallery preview"
                            width={1600}
                            height={1200}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                            quality={90}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}
