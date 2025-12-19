'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, User, ArrowRight, Search } from 'lucide-react'

interface BlogPost {
    id: number
    title: string
    excerpt: string
    image: string
    author: string
    date: string
    category: string
    slug: string
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'The Vibrancy of Folk Dance: Celebrating Tradition',
        excerpt: 'Explore the colorful world of Indian folk dances, where every step tells a story of heritage and community spirit.',
        image: '/folkdnc/fd1.JPG',
        author: 'Rangsagar Team',
        date: 'December 10, 2024',
        category: 'Folk Dance',
        slug: 'vibrancy-of-folk-dance'
    },
    {
        id: 2,
        title: 'Bollywood Dance: The Rhythm of India',
        excerpt: 'Experience the energy and expression of Bollywood dance, a fusion of styles that captures the heart of Indian cinema.',
        image: '/bollywoodnc/bd1.JPG',
        author: 'Rangsagar Team',
        date: 'December 8, 2024',
        category: 'Bollywood',
        slug: 'bollywood-dance-rhythm'
    },
    {
        id: 3,
        title: 'Contemporary Dance: fluidity in Motion',
        excerpt: 'Discover the freedom of movement in contemporary dance, blending techniques to create unique emotional expressions.',
        image: '/contemporarydnc/cd1.JPG',
        author: 'Rangsagar Team',
        date: 'December 5, 2024',
        category: 'Contemporary',
        slug: 'contemporary-dance-fluidity'
    },
    {
        id: 4,
        title: 'Unity in Diversity: Folk Dances Across Regions',
        excerpt: 'From Garba to Bhangra, witness how folk dances unite diverse cultures through shared rhythms and joy.',
        image: '/folkdnc/fd2.JPG',
        author: 'Rangsagar Team',
        date: 'December 2, 2024',
        category: 'Folk Dance',
        slug: 'unity-in-diversity-folk'
    },
    {
        id: 5,
        title: 'Expressions in Bollywood: More Than Just Steps',
        excerpt: 'Learn how facial expressions and body language play a crucial role in bringing Bollywood dance performances to life.',
        image: '/bollywoodnc/bd2.JPG',
        author: 'Rangsagar Team',
        date: 'November 28, 2024',
        category: 'Bollywood',
        slug: 'expressions-in-bollywood'
    },
    {
        id: 6,
        title: 'The Innovation of Modern Dance',
        excerpt: 'How modern contemporary styles are pushing the boundaries of traditional dance forms.',
        image: '/contemporarydnc/cd2.JPG',
        author: 'Rangsagar Team',
        date: 'November 25, 2024',
        category: 'Contemporary',
        slug: 'innovation-modern-dance'
    }
]

const categories = ['All', 'Classical Dance', 'Folk Dance', 'Contemporary', 'Bollywood', 'Education', 'Competition']

export default function BlogPage() {
    const [selectedCategory, setSelectedCategory] = useState('All')
    const [searchQuery, setSearchQuery] = useState('')

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
        return matchesCategory && matchesSearch
    })

    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/folkdnc/fd3.JPG')" }}
            >
                <div className="absolute inset-0 bg-linear-to-r from-gray-900/90 to-gray-900/70" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                            Our Blog
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Dance Stories & Insights
                        </h1>
                        <p className="text-xl text-gray-300">
                            Explore articles about dance techniques, cultural heritage, and inspiring stories from our community.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Content */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    {/* Search and Filter */}
                    <div className="flex flex-col md:flex-row gap-6 mb-12">
                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-md">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex flex-wrap gap-2">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${selectedCategory === category
                                        ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                        : 'bg-white text-gray-600 border border-gray-200 hover:border-primary-300 hover:text-primary-600'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Blog Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <article
                                key={post.id}
                                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                {/* Image */}
                                <div className="relative h-56 overflow-hidden">
                                    <Image
                                        src={post.image}
                                        alt={post.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                                    <span className="absolute bottom-4 left-4 px-3 py-1 bg-primary-500 text-white text-xs font-semibold rounded-full">
                                        {post.category}
                                    </span>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Meta */}
                                    {/* <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                        <span className="flex items-center gap-1">
                                            <User className="w-4 h-4" />
                                            {post.author}
                                        </span>
                                        <span className="flex items-center gap-1">
                                            <Calendar className="w-4 h-4" />
                                            {post.date}
                                        </span>
                                    </div> */}

                                    {/* Title */}
                                    <h2 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                                        {post.title}
                                    </h2>

                                    {/* Excerpt */}
                                    <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                                        {post.excerpt}
                                    </p>

                                    {/* Read More */}
                                    <Link
                                        href={`/blog/${post.slug}`}
                                        className="inline-flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all"
                                    >
                                        Read More
                                        <ArrowRight className="w-4 h-4" />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Empty State */}
                    {filteredPosts.length === 0 && (
                        <div className="text-center py-16">
                            <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                            <button
                                onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
                                className="mt-4 text-primary-600 font-semibold hover:underline"
                            >
                                Clear filters
                            </button>
                        </div>
                    )}

                    {/* Load More */}
                    {filteredPosts.length > 0 && (
                        <div className="text-center mt-12">
                            <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25">
                                Load More Articles
                            </button>
                        </div>
                    )}
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h3 className="text-3xl font-bold text-white mb-4">
                            Subscribe to Our Newsletter
                        </h3>
                        <p className="text-gray-400 mb-8">
                            Get the latest dance tips, event updates, and inspiring stories delivered to your inbox.
                        </p>
                        <form className="flex flex-col sm:flex-row gap-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="flex-1 px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                            />
                            <button
                                type="submit"
                                className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}
