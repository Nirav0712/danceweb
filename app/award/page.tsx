'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Trophy, Medal, Star, Award as AwardIcon, X } from 'lucide-react'

interface Award {
    id: string
    title: string
    category: string
    year: string
    description: string
    image: string
}

const awardData = [
    {
        id: '1',
        title: 'Excellence in Classical Dance',
        category: 'State Level',
        year: '2023',
        image: '/awardimg/01.jpg',
        description: 'Awarded for outstanding contribution to promoting classical dance forms.'
    },
    {
        id: '2',
        title: 'Best Choreography Award',
        category: 'National Dance Fest',
        year: '2022',
        image: '/awardimg/02.jpg',
        description: 'Recognized for innovative and creative choreography in contemporary dance.'
    },
    {
        id: '3',
        title: 'Outstanding Performance in Folk',
        category: 'Cultural Heritage Award',
        year: '2023',
        image: '/awardimg/03.jpg',
        description: 'Celebrated for the best folk dance performance of the year.'
    },
    {
        id: '4',
        title: 'Global Arts Ambassador',
        category: 'International Recognition',
        year: '2021',
        image: '/awardimg/04.jpg',
        description: 'Honored for representing Indian culture on a global platform.'
    },
    {
        id: '5',
        title: 'Dance Academy of the Year',
        category: 'Education Excellence',
        year: '2023',
        image: '/awardimg/05.jpg',
        description: 'Recognized as the top dance academy for student development and success.'
    },
    {
        id: '6',
        title: 'Youth Talent Discovery',
        category: 'Emerging Artists',
        year: '2022',
        image: '/awardimg/06.jpg',
        description: 'Awarded for nurturing young talent and excellence in training.'
    },
    {
        id: '7',
        title: 'Artistic Achievement Medal',
        category: 'National Arts Council',
        year: '2023',
        image: '/awardimg/07.jpg',
        description: 'A medal of honor for life-long dedication to the field of dance.'
    },
    {
        id: '8',
        title: 'Best Ensemble Performance',
        category: 'Regional Competition',
        year: '2023',
        image: '/awardimg/08.jpg',
        description: 'Recognizing the perfect sync and coordination of our dance troupe.'
    },
    {
        id: '9',
        title: 'Creative Innovation Prize',
        category: 'Modern Dance Summit',
        year: '2022',
        image: '/awardimg/09.jpg',
        description: 'Awarded for pushing the boundaries of traditional dance styles.'
    },
    {
        id: '10',
        title: 'Cultural Excellence Shield',
        category: 'State Government Award',
        year: '2023',
        image: '/awardimg/10.jpg',
        description: 'Presented by the state for preserving and promoting cultural heritage.'
    },
    {
        id: '11',
        title: 'Top Professional Academy',
        category: 'Professional Arts League',
        year: '2022',
        image: '/awardimg/11.jpg',
        description: 'Acknowledged for maintaining the highest standards in professional training.'
    },
    {
        id: '12',
        title: 'Audience Choice Award',
        category: 'Annual Dance Showcase',
        year: '2023',
        image: '/awardimg/12.jpg',
        description: 'Voted as the most popular performance by the general public.'
    },
    {
        id: '13',
        title: 'Legacy of Excellence',
        category: 'Founders Recognition',
        year: '2021',
        image: '/awardimg/13.jpg',
        description: 'Celebrating a decade of consistent excellence in the arts.'
    },
    {
        id: '14',
        title: 'Performance of the Year',
        category: 'National Gala',
        year: '2023',
        image: '/awardimg/14.jpg',
        description: 'Selected as the most impactful performance of the national gala.'
    },
    {
        id: '15',
        title: 'Rising Star Recognition',
        category: 'Youth Awards',
        year: '2022',
        image: '/awardimg/15.jpg',
        description: 'Honoring the academy\'s rising stars in the competitive dance scene.'
    },
    {
        id: '16',
        title: 'International Guest Performer',
        category: 'World Dance Expo',
        year: '2023',
        image: '/awardimg/16.jpg',
        description: 'Recognized for a stellar guest performance at the World Dance Expo.'
    },
    {
        id: '17',
        title: 'Creative Visionary Award',
        category: 'Directorial Excellence',
        year: '2022',
        image: '/awardimg/17.jpg',
        description: 'Awarded for the artistic vision and leadership of the academy.'
    },
    {
        id: '18',
        title: 'Community Impact Award',
        category: 'Social Arts Initiative',
        year: '2023',
        image: '/awardimg/18.jpg',
        description: 'Recognizing dance as a tool for social change and community building.'
    },
    {
        id: '19',
        title: 'Technical Perfection Trophy',
        category: 'Elite Dance League',
        year: '2021',
        image: '/awardimg/19.jpg',
        description: 'Awarded for flawless technical execution in ballroom and latin styles.'
    },
    {
        id: '21',
        title: 'Artistic Excellence Certficate',
        category: 'Academic Honors',
        year: '2023',
        image: '/awardimg/21.jpg',
        description: 'A certificate of merit for academic and artistic achievement.'
    },
    {
        id: '22',
        title: 'Best Solo Performer',
        category: 'Young Artists Fest',
        year: '2022',
        image: '/awardimg/22.jpg',
        description: 'Awarded to the academy\'s top soloists for their individual mastery.'
    },
    {
        id: '23',
        title: 'Choreographic Excellence',
        category: 'State Arts Board',
        year: '2023',
        image: '/awardimg/23.jpg',
        description: 'Recognized for creating unique choreographies for cultural events.'
    },
    {
        id: '24',
        title: 'Gold Medal for Tradition',
        category: 'Heritage Dance Council',
        year: '2022',
        image: '/awardimg/24.jpg',
        description: 'Awarded for preserving the purity of traditional dance forms.'
    },
    {
        id: '25',
        title: 'Innovation in Motion',
        category: 'Modern Dance Awards',
        year: '2023',
        image: '/awardimg/25.jpg',
        description: 'Awarded for creative use of space and movement in choreography.'
    },
    // {
    //     id: '26',
    //     title: 'Grand Prix Winner',
    //     category: 'National Championship',
    //     year: '2023',
    //     image: '/awardimg/26.jpg',
    //     description: 'The highest honor bestowed at the National Dance Championship.'
    // },
    {
        id: '27',
        title: 'International Cultural Exchange Program',
        category: 'National Championship',
        year: '2023',
        image: '/awardimg/27.jpg',
        description: 'Our talented team proudly secured the prestigious Grand Prix Winner title at the National Dance Championship 2023. This remarkable achievement reflects their dedication, discipline, and outstanding performance on a national stage. Competing against top talented participants from across the country, our students showcased exceptional coordination, creativity, and confidence, earning the highest honor in the competition.'
    },
    {
        id: '28',
        title: 'International Cultural Exchange Program',
        category: 'National Championship',
        year: '2023',
        image: '/awardimg/_HRV6068.JPG.jpeg',
        description: 'Our talented team proudly secured the prestigious Grand Prix Winner title at the National Dance Championship 2023. This remarkable achievement reflects their dedication, discipline, and outstanding performance on a national stage. Competing against top talented participants from across the country, our students showcased exceptional coordination, creativity, and confidence, earning the highest honor in the competition.'
    },
    // {
    //     id: '29',
    //     title: 'International Cultural Exchange Program',
    //     category: 'National Championship',
    //     year: '2023',
    //     image: '/awardimg/indian 011.jpg.jpeg',
    //     description: 'Our talented team proudly secured the prestigious Grand Prix Winner title at the National Dance Championship 2023. This remarkable achievement reflects their dedication, discipline, and outstanding performance on a national stage. Competing against top talented participants from across the country, our students showcased exceptional coordination, creativity, and confidence, earning the highest honor in the competition.'
    // },
    {
        id: '30',
        title: 'International Cultural Exchange Program',
        category: 'National Championship',
        year: '2023',
        image: '/awardimg/img005.jpg.jpeg',
        description: 'Our talented team proudly secured the prestigious Grand Prix Winner title at the National Dance Championship 2023. This remarkable achievement reflects their dedication, discipline, and outstanding performance on a national stage. Competing against top talented participants from across the country, our students showcased exceptional coordination, creativity, and confidence, earning the highest honor in the competition.'
    },
    {
        id: '31',
        title: 'International Cultural Exchange Program',
        category: 'National Championship',
        year: '2023',
        image: '/awardimg/DSC_1094.JPG.jpeg',
        description: 'Our talented team proudly secured the prestigious Grand Prix Winner title at the National Dance Championship 2023. This remarkable achievement reflects their dedication, discipline, and outstanding performance on a national stage. Competing against top talented participants from across the country, our students showcased exceptional coordination, creativity, and confidence, earning the highest honor in the competition.'
    },
]

export default function AwardPage() {
    const [selectedAward, setSelectedAward] = useState<Award | null>(null)

    return (
        <main className="min-h-screen bg-white text-gray-900">
            {/* Hero Section */}
            <section className="relative py-32 overflow-hidden bg-gray-50 border-b border-gray-200">
                <div className="absolute inset-0 opacity-10">
                    <Image
                        src="/awardimg/13.jpg"
                        alt="Awards Background"
                        fill
                        className="object-cover"
                    />
                </div>
                <div className="absolute inset-0 bg-white/80" />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <span className="inline-block px-4 py-1.5 bg-primary-100 border border-primary-200 rounded-full text-primary-600 text-sm font-semibold mb-6 tracking-widest uppercase">
                            Awards & Recognition
                        </span>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight text-gray-900">
                            Our <span className="text-primary-600">Achievements</span>
                        </h1>
                        <p className="text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl">
                            A showcase of our hard-earned recognitions, celebrating years of artistic excellence and dedication to the craft of dance.
                        </p>
                        <nav className="flex items-center gap-3 text-sm font-medium">
                            <Link href="/" className="text-gray-500 hover:text-primary-600 transition-colors">Home</Link>
                            <span className="text-gray-300">/</span>
                            <span className="text-primary-600">Awards</span>
                        </nav>
                    </div>
                </div>
            </section>

            {/* Awards Grid */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                        {awardData.map((award) => (
                            <div
                                key={award.id}
                                className="group relative bg-white border border-gray-100 rounded-3xl overflow-hidden hover:border-primary-200 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer"
                                onClick={() => setSelectedAward(award)}
                            >
                                {/* card image */}
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={award.image}
                                        alt={award.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent opacity-40" />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full border border-gray-200 shadow-sm">
                                        <span className="text-primary-600 text-xs font-bold">{award.year}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Trophy className="w-4 h-4 text-primary-500" />
                                        <span className="text-[10px] font-bold text-primary-500 tracking-wider uppercase">
                                            {award.category}
                                        </span>
                                    </div>
                                    <h3 className="text-lg font-bold mb-2 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                                        {award.title}
                                    </h3>
                                    <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">
                                        {award.description}
                                    </p>

                                    <div className="mt-6 flex items-center gap-2 text-primary-600 font-bold text-[10px] tracking-widest group/btn">
                                        VIEW DETAILS
                                        <div className="w-4 h-px bg-primary-600 group-hover/btn:w-8 transition-all duration-300" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Lightbox / Modal */}
            {selectedAward && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/95 backdrop-blur-md transition-all duration-500"
                    onClick={() => setSelectedAward(null)}
                >
                    <button
                        className="absolute top-8 right-8 p-3 bg-gray-100 hover:bg-gray-200 rounded-full text-gray-900 transition-all duration-300 shadow-sm"
                        onClick={() => setSelectedAward(null)}
                    >
                        <X className="w-6 h-6" />
                    </button>

                    <div
                        className="bg-white border border-gray-200 rounded-4xl max-w-5xl w-full max-h-[90vh] overflow-hidden flex flex-col md:flex-row shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="md:w-1/2 relative min-h-[300px] md:min-h-full">
                            <Image
                                src={selectedAward.image}
                                alt={selectedAward.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-6 text-primary-600">
                                <Trophy className="w-6 h-6" />
                                <span className="font-bold tracking-widest uppercase text-sm">{selectedAward.category}</span>
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight text-gray-900">
                                {selectedAward.title}
                            </h2>
                            <div className="inline-block px-4 py-2 bg-gray-50 rounded-xl mb-8 border border-gray-100">
                                <span className="text-gray-500 font-medium">Year Awarded: </span>
                                <span className="text-gray-900 font-bold ml-1">{selectedAward.year}</span>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed mb-10">
                                {selectedAward.description}
                            </p>
                            <div className="grid grid-cols-3 gap-4">
                                <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                                    <Medal className="w-6 h-6 text-primary-500 mb-2" />
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center">Excellence</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                                    <Star className="w-6 h-6 text-primary-500 mb-2" />
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center">Elite Rank</span>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-2xl flex flex-col items-center justify-center border border-gray-100">
                                    <AwardIcon className="w-6 h-6 text-primary-500 mb-2" />
                                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest text-center">Certified</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
