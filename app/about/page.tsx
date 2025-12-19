'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Facebook, Instagram, Youtube, CheckCircle } from 'lucide-react'
import Team from '../components/Team'

interface TabContent {
    id: string
    title: string
    description: string
}

const danceTabs: TabContent[] = [
    {
        id: 'step1',
        title: 'Dance Step 01',
        description: 'Dramatically initiate our mission in 2002 with minimal initial investment, rapidly expanding operational capacity to over 6,000 students trained. Systematically scale our educational footprint over 23 years of sustained deployment, ensuring continuous market leadership in artistic and cultural development. Compellingly leverage the visionary expertise of Founder Tirthraj Trivedi to anchor value-driven educational portals.'
    },
    {
        id: 'step2',
        title: 'Dance Step 02',
        description: 'We launched our mission in 2002 with minimal initial investment, swiftly expanding our operational capacity to exceed 6,000 trained students. We have systematically enlarged our educational footprint over 23 years of continuous deployment, guaranteeing sustained market dominance in artistic and cultural development. We compellingly harness the visionary acumen of Founder Tirthraj Trivedi to secure value-driven educational gateways.'
    },
    {
        id: 'step3',
        title: 'Dance Step 03',
        description: 'Our endeavor began dramatically in 2002 with a paltry initial investment, rapidly increasing our operational capacity to over 6,000 students educated. We have methodically expanded our educational presence across 23 years of uninterrupted deployment, maintaining perpetual market preeminence in artistic and cultural development. We powerfully utilize the visionary expertise of Founder Tirthraj Trivedi to anchor value-driven educational platforms.'
    }
]

const features = [
    'Dance Practice',
    'Dance Growth',
    'Dance Training',
    'Dance Improvement'
]

export default function AboutPage() {
    const [activeTab, setActiveTab] = useState('step1')

    const currentTab = danceTabs.find(tab => tab.id === activeTab) || danceTabs[0]

    return (
        <main>
            {/* Breadcrumb Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/eventimg/international/19-3.JPG')" }}
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">About Us</h1>
                        <nav className="flex justify-center items-center gap-2 text-white/80">
                            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                            <span>/</span>
                            <span className="text-primary-400">About Us</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/aboutimg1.png"
                                    alt="About RangSagar"
                                    width={600}
                                    height={500}
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                            {/* Decorative Element */}
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-primary-500 rounded-2xl -z-10" />
                        </div>

                        {/* Content */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                                About The Dance School
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                                We provide service since 2002
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Dramatically morph reliable, certified artistic experiences without complex, strategic methodologies. Quickly create frictionless artistic theme areas, completely maximizing confidence, flexibility, and self-expression after simple, engaging deliverables.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                Compellingly expedite end-to-end genre sources (Bollywood, Hip-Hop, Folk, Classical) without compromising foundational discipline. Compellingly exploit maintainable skill development across all age groups within a safe, friendly environment.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dance Technique Section */}
            <section
                className="py-20 bg-gray-50"
                style={{ backgroundImage: "url('/assets/img/bg/dance_bg_1.png')" }}
            >
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12 items-start">
                        {/* Left Content */}
                        <div>
                            <span className="inline-block px-4 py-2 bg-primary-100 text-primary-600 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                                Our Dance Technique
                            </span>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                                We&apos;re some simple steps for teaching dance
                            </h2>

                            {/* Tabs */}
                            <div className="flex flex-wrap gap-3 mb-8">
                                {danceTabs.map((tab) => (
                                    <button
                                        key={tab.id}
                                        onClick={() => setActiveTab(tab.id)}
                                        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === tab.id
                                            ? 'bg-primary-500 text-white shadow-lg shadow-primary-500/30'
                                            : 'bg-white text-gray-700 border border-gray-200 hover:border-primary-300'
                                            }`}
                                    >
                                        {tab.title}
                                    </button>
                                ))}
                            </div>

                            {/* Tab Content */}
                            <div className="bg-white rounded-2xl p-6 shadow-lg">
                                <p className="text-gray-600 leading-relaxed mb-6">
                                    {currentTab.description}
                                </p>
                                <div className="grid grid-cols-2 gap-4">
                                    {features.map((feature, index) => (
                                        <div key={index} className="flex items-center gap-2 text-gray-700">
                                            <CheckCircle className="w-5 h-5 text-primary-500" />
                                            <span>{feature}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="/aboutimg2.png"
                                alt="Dance Technique"
                                width={600}
                                height={500}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Awards Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Vision */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Proactively enlighten young minds with India&apos;s timeless culture and spiritual essence, compellingly aspiring to build a generation of global ambassadors. We nurture children into confident and culturally grounded individuals after providing world-class training and international-stage opportunities.
                            </p>
                        </div>

                        {/* Awards */}
                        <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Awards</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Compellingly leverage the London Book of World Records recognition and Government Registered status, establishing a trusted benchmark for artistic training. Proactively champion UNESCO-affiliated programs (CIOFF/IOV) whereas amplifying influence through 200+ global media features.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <Team />

            {/* CTA Section */}
            <section className="py-20 bg-linear-to-r from-primary-600 to-primary-800">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Get Your Free Registration
                    </h2>
                    <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                        Start your dance journey with us today. Register for a free trial class and experience the magic of dance!
                    </p>
                    <Link
                        href="/contact"
                        className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-xl hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl"
                    >
                        Contact Us
                    </Link>
                </div>
            </section>
        </main>
    )
}