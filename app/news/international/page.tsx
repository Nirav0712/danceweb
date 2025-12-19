'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Globe, Award, Newspaper } from 'lucide-react'

interface NewsImage {
    src: string
    alt: string
    caption?: string
}

const internationalNewsImages: NewsImage[] = [
    { src: '/internews/news1.jpg', alt: 'International Feature', caption: 'Featured in international dance magazine' },
    { src: '/internews/news2.jpg', alt: 'Global Press Coverage', caption: 'Coverage of European tour' },
    { src: '/internews/news3.jpg', alt: 'International Exhibition', caption: 'Poland dance festival exhibition' },
    // { src: '/internews/news4.jpg', alt: 'International Recognition', caption: 'Recognition by Polish cultural department' },
    { src: '/internews/news5.bmp', alt: 'Award Ceremony', caption: 'Award ceremony at international festival' },
    { src: '/internews/news6.jpg', alt: 'Cultural Exchange', caption: 'Cultural exchange program highlights' },
    { src: '/internews/news7.tif', alt: 'Media Interview', caption: 'Interview with international media' },
    { src: '/internews/news8.tif', alt: 'London Records', caption: 'London Book of World Records feature' },
    { src: '/internews/news9.jpeg', alt: 'Newspaper Feature', caption: 'Full page coverage in London newspaper' },
]

export default function InternationalNewsPage() {
    return (
        <main>
            {/* Breadcrumb Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/internews/news3.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">International News</h1>
                        <nav className="flex justify-center items-center gap-2 text-white/80">
                            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/news" className="hover:text-primary-400 transition-colors">News</Link>
                            <span>/</span>
                            <span className="text-primary-400">International</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* News Gallery Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                            Global Recognition
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            International News & Media
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            RangSagar Dance Academy featured in international publications and media around the world.
                        </p>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {internationalNewsImages.map((news, index) => (
                            <figure
                                key={index}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-[4/3] relative overflow-hidden">
                                    <Image
                                        src={news.src}
                                        alt={news.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {news.caption && (
                                    <figcaption className="p-4 border-t border-gray-100">
                                        <p className="text-gray-700 text-sm font-medium">{news.caption}</p>
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>

                    {/* Achievements */}
                    <div className="mt-16 grid md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <Globe className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">50+ Countries</h3>
                            <p className="text-gray-600">International media features across 50+ countries worldwide</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <Award className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">London Records</h3>
                            <p className="text-gray-600">Featured in London Book of World Records</p>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                            <div className="w-16 h-16 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <Newspaper className="w-8 h-8 text-primary-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">UNESCO Affiliated</h3>
                            <p className="text-gray-600">Coverage in UNESCO-affiliated publications</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Join Our Global Community
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Be part of an internationally recognized dance academy.
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    )
}