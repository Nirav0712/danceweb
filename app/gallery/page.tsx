'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { X } from 'lucide-react'

const galleryImages = [
    '/bollywoodnc/bd2.JPG',
    '/bollywoodnc/bd3.JPG',
    '/bollywoodnc/bd4.JPG',
    '/bollywoodnc/bd5.JPG',
    '/bollywoodnc/bd6.JPG',
    '/bollywoodnc/bd7.JPG',
    '/bollywoodnc/bd8.JPG',
    '/bollywoodnc/bd9.JPG',
    '/bollywoodnc/bd10.JPG',
    '/bollywoodnc/bd11.JPG',
    '/bollywoodnc/bd12.JPG',
    '/bollywoodnc/bd13.JPG',
    '/bollywoodnc/bd14.JPG',
    '/bollywoodnc/bd15.JPG',
    '/bollywoodnc/bd16.JPG',
    '/bollywoodnc/bd17.JPG',
    '/bollywoodnc/bd18.JPG',
    '/bollywoodnc/bd19.JPG',
    '/bollywoodnc/bd20.JPG',
    '/bollywoodnc/bd21.JPG',
    '/bollywoodnc/bd22.JPG',
    '/bollywoodnc/bd23.JPG',
    '/bollywoodnc/bd24.JPG',
    '/bollywoodnc/bd25.JPG',
    '/bollywoodnc/bd26.JPG',
    '/bollywoodnc/bd27.JPG',
    '/bollywoodnc/bd28.JPG',
    '/bollywoodnc/bd29.JPG',
    '/bollywoodnc/bd30.JPG',
    '/bollywoodnc/bd31.JPG',
    '/bollywoodnc/bd32.JPG',
    '/bollywoodnc/bd33.JPG',
    '/folkdnc/fd1.JPG',
    '/folkdnc/fd2.JPG',
    '/folkdnc/fd3.JPG',
    '/folkdnc/fd4.JPG',
    '/folkdnc/fd5.JPG',
    '/folkdnc/fd6.JPG',
    '/folkdnc/fd7.JPG',
    '/folkdnc/fd8.JPG',
    '/folkdnc/fd9.JPG',
    '/contemporarydnc/cd1.JPG',
    '/contemporarydnc/cd2.JPG',
    '/contemporarydnc/cd3.JPG',
    '/contemporarydnc/cd4.JPG',
    '/contemporarydnc/cd5.JPG',
    '/contemporarydnc/cd6.JPG',
    '/contemporarydnc/cd7.JPG',
    '/contemporarydnc/cd8.JPG',
    '/contemporarydnc/cd9.JPG',
    '/contemporarydnc/cd10.JPG',
    '/patrioticdnc/pd1.JPG',
    '/patrioticdnc/pd2.JPG',
    '/patrioticdnc/pd3.JPG',
    '/patrioticdnc/pd4.JPG',
    '/patrioticdnc/pd5.JPG',
    '/patrioticdnc/pd6.JPG',
    '/patrioticdnc/pd7.JPG',
    '/patrioticdnc/pd8.JPG',
    '/patrioticdnc/pd9.JPG',
    '/patrioticdnc/pd10.JPG',
    '/patrioticdnc/pd11.JPG',
    '/patrioticdnc/pd12.JPG',
    '/religiousdnc/rd1.JPG',
    '/religiousdnc/rd2.JPG',
    '/religiousdnc/rd3.JPG',
    '/religiousdnc/rd4.JPG',
    '/religiousdnc/rd5.JPG',
    '/religiousdnc/rd6.JPG',
    '/religiousdnc/rd7.JPG',
    '/religiousdnc/rd8.JPG',
    '/religiousdnc/rd9.JPG',
    '/religiousdnc/rd10.JPG',
    '/religiousdnc/rd11.JPG',
    '/religiousdnc/rd12.JPG',
    '/religiousdnc/rd13.JPG',
    '/religiousdnc/rd14.JPG',
    '/religiousdnc/rd15.JPG',
    '/religiousdnc/rd16.JPG',
    '/religiousdnc/rd17.JPG',
    '/religiousdnc/rd18.JPG',
    '/religiousdnc/rd19.JPG',
    '/religiousdnc/rd20.JPG',
    '/religiousdnc/rd21.JPG',
    '/religiousdnc/rd22.JPG',
    '/religiousdnc/rd23.JPG',
    '/religiousdnc/rd24.JPG',
    '/religiousdnc/rd25.JPG',
    '/religiousdnc/rd26.JPG',
    '/religiousdnc/rd27.JPG',
    '/religiousdnc/rd28.JPG',
    '/religiousdnc/rd29.JPG',
    '/religiousdnc/rd30.JPG',
    '/religiousdnc/rd31.JPG',
    '/religiousdnc/rd32.JPG',
    '/religiousdnc/rd33.JPG',
    '/religiousdnc/rd34.JPG',
    '/religiousdnc/rd35.JPG',
    '/religiousdnc/rd36.JPG',
    '/religiousdnc/rd37.JPG',
    '/religiousdnc/rd38.JPG',
    '/religiousdnc/rd39.JPG',
    '/religiousdnc/rd40.JPG',
    '/religiousdnc/rd41.JPG',
    '/religiousdnc/rd42.JPG',
    '/religiousdnc/rd43.JPG',
    '/religiousdnc/rd44.JPG',
    '/religiousdnc/rd45.JPG',
    '/religiousdnc/rd46.JPG',
    '/religiousdnc/rd47.JPG',
    '/religiousdnc/rd48.JPG',
    '/religiousdnc/rd49.JPG',
    '/religiousdnc/rd50.JPG',
    '/western/wd1.JPG',
    '/western/wd2.JPG',
    '/western/wd3.JPG',
    '/western/wd4.JPG',
    '/western/wd5.JPG',
    '/western/wd6.JPG',
    '/western/wd7.JPG',
    '/western/wd8.JPG',
    '/western/wd9.JPG',
    '/western/wd10.JPG',
    '/western/wd11.JPG',
    '/western/wd12.JPG',
    '/western/wd13.JPG',
    '/western/wd14.JPG',
    '/western/wd15.JPG',
    '/western/wd16.JPG',
    '/western/wd17.JPG',
    '/western/wd18.JPG',
    '/western/wd19.JPG',
    '/western/wd20.JPG',
    '/western/wd21.JPG',
    '/western/wd22.JPG',
    '/western/wd23.JPG',
    '/western/wd24.JPG',
    '/western/wd25.JPG',
    '/western/wd26.JPG',
    '/western/wd27.JPG',
    '/western/wd28.JPG',
]

export default function GalleryPage() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null)

    return (
        <main>
            {/* Breadcrumb Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img2/5I7A3922.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Gallery</h1>
                        <nav className="flex justify-center items-center gap-2 text-white/80">
                            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-primary-400">Gallery</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Gallery Grid */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                            Our Moments
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            Photo Gallery
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

            {/* Lightbox Modal */}
            {selectedImage && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
                    onClick={() => setSelectedImage(null)}
                >
                    <button
                        className="absolute top-4 right-4 p-2 text-white hover:text-primary-400 transition-colors"
                        onClick={() => setSelectedImage(null)}
                    >
                        <X className="w-8 h-8" />
                    </button>
                    <div className="relative max-w-5xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
                        <Image
                            src={selectedImage}
                            alt="Gallery preview"
                            width={1200}
                            height={800}
                            className="max-w-full max-h-[90vh] object-contain rounded-lg"
                        />
                    </div>
                </div>
            )}
        </main>
    )
}