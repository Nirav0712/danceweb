'use client'

import Image from 'next/image'
import Link from 'next/link'

interface NewsImage {
    src: string
    alt: string
    caption?: string
}

const nationalNewsImages: NewsImage[] = [
    { src: '/nationews/news1.tif', alt: 'National Events Coverage 2007', caption: 'RangSagar featured in national media coverage' },
    { src: '/nationews/news2.jpg', alt: 'National Events Coverage 2011', caption: 'Dance academy receives recognition for excellence' },
    { src: '/nationews/news3.tif', alt: 'National Events Coverage', caption: 'Award ceremony coverage and highlights' },
    { src: '/nationews/news4.tif', alt: 'National Events Coverage', caption: 'Cultural event performance showcase' },
    { src: '/nationews/news5.jpg', alt: 'National Events Coverage', caption: 'Performance review in leading daily' },
    { src: '/nationews/news6.jpg', alt: 'National Events Coverage', caption: 'Special media feature story' },
    { src: '/nationews/news7.jpg', alt: 'National Events Coverage', caption: 'Outstanding performance recognition' },
    { src: '/nationews/news8.jpg', alt: 'National Events Coverage', caption: 'Regional dance competition results' },
    { src: '/nationews/news9.jpg', alt: 'National Events Coverage', caption: 'Festival celebration coverage' },
    { src: '/nationews/news10.jpg', alt: 'National Events Coverage', caption: 'Student achievements in national level' },
    { src: '/nationews/news11.jpg', alt: 'National Events Coverage', caption: 'Annual function press release' },
    { src: '/nationews/news12.jpg', alt: 'National Events Coverage', caption: 'Cultural heritage promotion event' },
    { src: '/nationews/news13.jpg', alt: 'National Events Coverage', caption: 'Exclusive interview with choreographers' },
    { src: '/nationews/news14.jpg', alt: 'National Events Coverage', caption: 'Workshop and seminar highlights' },
    { src: '/nationews/news15.jpg', alt: 'National Events Coverage', caption: 'Community outreach program' },
    { src: '/nationews/news16.jpg', alt: 'National Events Coverage', caption: 'Youth festival participation' },
    { src: '/nationews/news17.jpg', alt: 'National Events Coverage', caption: 'Collaborative performance news' },
    { src: '/nationews/news18.jpg', alt: 'National Events Coverage', caption: 'Art and culture exhibition' },
    { src: '/nationews/news19.tif', alt: 'National Events Coverage', caption: 'National tour commencement' },
    { src: '/nationews/news20.jpeg', alt: 'National Events Coverage', caption: 'Grand finale coverage' },
]

export default function NationalNewsPage() {
    return (
        <main>
            {/* Breadcrumb Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/nationews/news2.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">National News</h1>
                        <nav className="flex justify-center items-center gap-2 text-white/80">
                            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/news" className="hover:text-primary-400 transition-colors">News</Link>
                            <span>/</span>
                            <span className="text-primary-400">National</span>
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
                            Media Coverage
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            National News & Media
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            RangSagar Dance Academy featured in newspapers, magazines, and media across India.
                        </p>
                    </div>

                    {/* News Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {nationalNewsImages.map((news, index) => (
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

                    {/* Stats */}
                    <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="text-3xl font-bold text-primary-500 mb-1">200+</div>
                            <p className="text-gray-600 text-sm">Print Media Articles</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="text-3xl font-bold text-primary-500 mb-1">60+</div>
                            <p className="text-gray-600 text-sm">TV Features</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="text-3xl font-bold text-primary-500 mb-1">100+</div>
                            <p className="text-gray-600 text-sm">Online Features</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-md">
                            <div className="text-3xl font-bold text-primary-500 mb-1">15+</div>
                            <p className="text-gray-600 text-sm">Awards Coverage</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Stay Updated with Our News
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Follow us on social media for the latest updates and media coverage.
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