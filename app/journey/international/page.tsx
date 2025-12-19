
import fs from 'fs'
import path from 'path'
import Link from 'next/link'
import InternationalGallery from './InternationalGallery'

// Helper to get all events/years from the internatimg folder
function getInternationalEvents() {
    const imagesDirectory = path.join(process.cwd(), 'public/internatimg')

    // Check if directory exists
    if (!fs.existsSync(imagesDirectory)) return []

    const items = fs.readdirSync(imagesDirectory)

    // Filter for directories (years/events) and also include individual files in a "General" category if needed
    // For now based on requirements, we look for folders
    const events = items.filter(item => {
        const fullPath = path.join(imagesDirectory, item)
        return fs.statSync(fullPath).isDirectory()
    }).map(dirName => {
        const dirPath = path.join(imagesDirectory, dirName)
        const files = fs.readdirSync(dirPath)

        // Filter for image files
        const images = files
            .filter(file => /\.(jpg|jpeg|png|webp|JPG|JPEG|PNG)$/.test(file))
            .map(file => `/internatimg/${dirName}/${file}`)

        return {
            name: dirName,
            images,
            // Try to extract a year for sorting, default to 0 if not found
            year: parseInt(dirName.match(/\d{4}/)?.[0] || '0')
        }
    })

    // Sort by year descending (newest first), then by name
    return events.sort((a, b) => {
        if (b.year !== a.year) return b.year - a.year
        return b.name.localeCompare(a.name)
    })
}

export default function InternationalJourneyPage() {
    const events = getInternationalEvents()

    return (
        <main>
            {/* Breadcrumb Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/internatimg/intimg1.jpg')" }} // Updated to a valid image
            >
                <div className="absolute inset-0 bg-black/60" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">International</h1>
                        <nav className="flex justify-center items-center gap-2 text-white/80">
                            <Link href="/" className="hover:text-primary-400 transition-colors">Home</Link>
                            <span>/</span>
                            <Link href="/journey" className="hover:text-primary-400 transition-colors">Journey</Link>
                            <span>/</span>
                            <span className="text-primary-400">International</span>
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
                            Global Presence
                        </span>
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                            International Events & Performances
                        </h2>
                        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
                            Explore our international journey through world dance festivals, cultural exchange programs, and global performances.
                        </p>
                    </div>

                    {/* Dynamic Gallery */}
                    <InternationalGallery events={events} />

                    {/* Load More Button (Optional/Placeholder - heavily depends on if pagination is desired later) */}
                    {/* <div className="text-center mt-12">
                        <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25">
                            View More Photos
                        </button>
                    </div> */}
                </div>
            </section>

            {/* Achievements Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 text-center">
                        <div className="p-6">
                            <div className="text-4xl font-bold text-primary-500 mb-2">15+</div>
                            <p className="text-gray-600">Countries Visited</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-primary-500 mb-2">50+</div>
                            <p className="text-gray-600">International Events</p>
                        </div>
                        <div className="p-6">
                            <div className="text-4xl font-bold text-primary-500 mb-2">100+</div>
                            <p className="text-gray-600">Global Performances</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-linear-to-r from-gray-900 to-gray-800">
                <div className="container mx-auto px-4 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                        Be Part of Our Global Journey
                    </h3>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto">
                        Join RangSagar and get opportunities to perform on international stages.
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