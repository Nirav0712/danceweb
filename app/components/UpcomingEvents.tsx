// components/UpcomingEvents.js
import { Calendar, Clock, MapPin, Users } from 'lucide-react'

const UpcomingEvents = () => {
    const events = [
        {
            id: 1,
            title: 'Annual Dance Festival',
            date: '15 Dec 2024',
            time: '6:00 PM',
            venue: 'RangSagar Auditorium',
            description: 'Grand showcase featuring all dance forms',
            seats: 120,
            price: 'Free',
            featured: true,
        },
        {
            id: 2,
            title: 'Kathak Workshop',
            date: '22 Dec 2024',
            time: '10:00 AM',
            venue: 'Studio 1',
            description: 'Intensive workshop by Guru Priya Sharma',
            seats: 25,
            price: '₹1,500',
            featured: false,
        },
        {
            id: 3,
            title: 'Bollywood Night',
            date: '30 Dec 2024',
            time: '8:00 PM',
            venue: 'Main Hall',
            description: 'New Year Eve celebration with Bollywood dance',
            seats: 200,
            price: '₹2,000',
            featured: true,
        },
    ]

    return (
        <section className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="text-center mb-12">
                    <h2 className="section-title">
                        Upcoming <span className="text-gradient">Events</span>
                    </h2>
                    <p className="section-subtitle">
                        Join our exciting dance events and workshops
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {events.map((event) => (
                        <div
                            key={event.id}
                            className={`bg-white rounded-2xl shadow-xl overflow-hidden card-hover border ${event.featured ? 'border-primary-500' : 'border-gray-100'
                                }`}
                        >
                            {event.featured && (
                                <div className="absolute top-4 left-4 bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium z-10">
                                    Featured
                                </div>
                            )}
                            <div className="p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center space-x-2 text-primary-600">
                                        <Calendar className="h-5 w-5" />
                                        <span className="font-bold">{event.date}</span>
                                    </div>
                                    <div className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-bold">
                                        {event.price}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3">{event.title}</h3>
                                <p className="text-gray-600 mb-6">{event.description}</p>
                                <div className="space-y-3 mb-6">
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span>{event.time}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <MapPin className="h-4 w-4 mr-2" />
                                        <span>{event.venue}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Users className="h-4 w-4 mr-2" />
                                        <span>{event.seats} seats available</span>
                                    </div>
                                </div>
                                <button className="w-full btn-primary">
                                    Register Now
                                </button>
                            </div>
                        </div>
                    ))}
                </div>

                {/* <div className="text-center mt-12">
                    <button className="btn-secondary px-8">
                        View All Events
                    </button>
                </div> */}
            </div>
        </section>
    )
}

export default UpcomingEvents