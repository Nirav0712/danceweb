'use client'

import Image from 'next/image'
import Link from 'next/link'

interface GalleryImage {
    src: string
    alt: string
    caption?: string
}

const nationalImages: GalleryImage[] = [
    { src: '/nationalimg/year1.jpg', alt: 'National Event 2003', caption: 'National Event 2003' },
    { src: '/nationalimg/year2.jpg', alt: 'National Event 2004', caption: 'National Event 2004' },
    { src: '/nationalimg/year3.jpg', alt: 'National Event 2005', caption: 'National Event 2005' },
    { src: '/nationalimg/year4.jpg', alt: 'National Event 2006', caption: 'National Event 2006' },
    { src: '/nationalimg/year5.jpg', alt: 'National Event 2007', caption: 'National Event 2007' },
    { src: '/nationalimg/year6.jpg', alt: 'National Event 2008', caption: 'National Event 2008' },
    { src: '/nationalimg/year7.jpg', alt: 'National Event 2009', caption: 'National Event 2009' },
    { src: '/nationalimg/year8.jpg', alt: 'National Event 2010', caption: 'National Event 2010' },
    { src: '/nationalimg/year9.jpg', alt: 'National Event 2011', caption: 'National Event 2011' },
    { src: '/nationalimg/year10.jpg', alt: 'National Event 2012', caption: 'National Event 2012' },
    { src: '/nationalimg/year11.jpg', alt: 'National Event 2013', caption: 'National Event 2013' },
    { src: '/nationalimg/year12.jpg', alt: 'National Event 2014', caption: 'National Event 2014' },
    { src: '/nationalimg/year13.jpg', alt: 'National Event 2015', caption: 'National Event 2015' },
    { src: '/nationalimg/year14.jpg', alt: 'National Event 2016', caption: 'National Event 2016' },
    { src: '/nationalimg/year15.jpg', alt: 'National Event 2017', caption: 'National Event 2017' },
    { src: '/nationalimg/year16.jpg', alt: 'National Event 2018', caption: 'National Event 2018' },
    { src: '/nationalimg/year17.jpg', alt: 'National Event 2019', caption: 'National Event 2019' },
    { src: '/nationalimg/year18.jpg', alt: 'National Event 2020', caption: 'National Event 2020' },
    { src: '/nationalimg/year19.jpg', alt: 'National Event 2021', caption: 'National Event 2021' },
    { src: '/nationalimg/year20.jpg', alt: 'National Event 2022', caption: 'National Event 2022' },
    { src: '/nationalimg/year21.jpg', alt: 'National Event 2023', caption: 'National Event 2023' },
    { src: '/nationalimg/year22.jpg', alt: 'National Event 2024', caption: 'National Event 2024' },
    { src: '/nationalimg/year23.jpg', alt: 'National Event 2025', caption: 'National Event 2025' },
    { src: '/nationalimg/year24.jpg', alt: 'National Event 2026', caption: 'National Event 2026' },
    { src: '/nationalimg/year25.jpg', alt: 'National Event 2027', caption: 'National Event 2027' },
    { src: '/nationalimg/year26.jpg', alt: 'National Event 2028', caption: 'National Event 2028' },
    { src: '/nationalimg/year27.jpg', alt: 'National Event 2029', caption: 'National Event 2029' },
    { src: '/nationalimg/year28.jpg', alt: 'National Event 2030', caption: 'National Event 2030' },

]


export default function NationalJourneyPage() {
    return (
        <main>
            {/* Breadcrumb Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/eventimg/4H7A4028.JPG')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">National</h1>
                        <nav className="flex justify-center items-center gap-2 text-white/80">
                            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/journey" className="hover:text-primary-400 transition-colors">Journey</Link>
                            <span>/</span>
                            <span className="text-primary-400">National</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Section Header */}
                    <div className="text-center mb-12">
                        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                            Our Journey
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            National Events & Performances
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Explore our journey through various national events, competitions, and cultural celebrations across India.
                        </p>
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nationalImages.map((image, index) => (
                            <figure
                                key={index}
                                className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                <div className="aspect-4/3 relative overflow-hidden">
                                    <Image
                                        src={image.src}
                                        alt={image.alt}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* View icon on hover */}
                                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                {image.caption && (
                                    <figcaption className="p-4">
                                        <p className="text-gray-700 text-sm">{image.caption}</p>
                                    </figcaption>
                                )}
                            </figure>
                        ))}
                    </div>

                    {/* Load More Button */}
                    {/* <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25">
                            View More Photos
                        </button>
                    </div> */}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-linear-to-r from-gray-900 to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Want to be part of our journey?
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Join RangSagar and participate in national events and competitions.
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