// components/Footer.js
import Link from 'next/link'
import Image from "next/image";
import {
    Facebook, Instagram, Youtube, Twitter, Mail, Phone, MapPin,
    Send, ArrowRight, Heart
} from 'lucide-react'

const Footer = () => {
    const quickLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Gallery', path: '/courses' },
        { name: 'National', path: '/instructors' },
        { name: 'International', path: '/gallery' },
        { name: 'Blogs', path: '/events' },
        { name: 'Contact Us', path: '/contact' },
    ]

    const danceForms = [
        'BollyWood',
        'Folk Dance',
        'Contemporary',
        'Patrotic',
        'Religious',
        'Western',
    ]

    const contactInfo = [
        { icon: <MapPin size={18} />, text: 'VAIKUNTH COMPLEX, NR RASPAN ARCADE,NIKOL.' },
        { icon: <MapPin size={18} />, text: '204,CENTRE POINT, INDIA COLONY ROAD, BAPUNAGAR.' },
        { icon: <Phone size={18} />, text: '+91 91738 78750' },
        { icon: <Phone size={18} />, text: '+91 72280 53232' },
        { icon: <Mail size={18} />, text: 'dynamicechildrenacademy@gmail.com' },
    ]

    const socialLinks = [
        { icon: <Facebook size={20} />, url: 'https://www.facebook.com/navinvato/videos/-dynamic-children-academy-%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4-%E0%AA%A8%E0%AB%80-%E0%AA%A8%E0%AA%82%E0%AA%AC%E0%AA%B0-1-kids-talent-hub%E0%AA%85%E0%AA%B9%E0%AB%80%E0%AA%82-%E0%AA%AC%E0%AA%BE%E0%AA%B3%E0%AA%95%E0%AB%8B-%E0%AA%AE%E0%AA%BE%E0%AA%A4%E0%AB%8D%E0%AA%B0-activ/4250374635282583/', label: 'Facebook' },
        { icon: <Instagram size={20} />, url: 'https://www.instagram.com/dynamice_academy/', label: 'Instagram' },
        { icon: <Twitter size={20} />, url: 'https://share.google/KaHmNCkLPfNC9II9L', label: 'Twitter' },
        { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@dynamicechildrenacademy617"', label: 'YouTube' },
    ]

    return (
        <footer className="bg-gray-900 text-white">
            <div className="section-padding">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                        {/* Newsletter */}
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                <div className="h-12 w-12 bg-primary-600 rounded-full flex items-center justify-center">
                                    <Send className="h-6 w-6" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold">Subscribe to Newsletter</h3>
                                    <p className="text-gray-300">Get updates on new courses & events</p>
                                </div>
                            </div>
                            <form className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <input
                                        type="email"
                                        placeholder="Your email address"
                                        className="grow px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500"
                                    />
                                    <button
                                        type="submit"
                                        className="btn-primary flex items-center justify-center gap-2 whitespace-nowrap"
                                    >
                                        Subscribe <ArrowRight size={18} />
                                    </button>
                                </div>
                                <p className="text-sm text-gray-400">
                                    By subscribing, you agree to our Privacy Policy
                                </p>
                            </form>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
                            <div className="space-y-4">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="text-primary-400 mt-1">{item.icon}</div>
                                        <p className="text-gray-300">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                            <div className="flex space-x-4 mt-6">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        className="p-2 bg-gray-800 hover:bg-primary-600 rounded-lg transition duration-300"
                                        aria-label={social.label}
                                    >
                                        {social.icon}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
                        {/* Academy Info */}
                        <div>
                            <div className="flex items-center space-x-3 mb-6">
                                {/* <div className="h-10 w-10 bg-primary-600 rounded-full flex items-center justify-center">
                                    <span className="font-bold">र</span>
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold">RangSagar</h2>
                                    <p className="text-sm text-gray-300">Dance Academy</p>
                                </div> */}
                                <Image
                                    src="/logodance.png"
                                    alt="Danza"
                                    width={120}
                                    height={50}
                                    className="w-[120px] h-auto object-contain"
                                />
                            </div>
                            <p className="text-gray-300 mb-6">
                                Premier dance academy dedicated to excellence in dance education since 2005.
                                We nurture talent and passion through comprehensive training programs.
                            </p>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
                            <ul className="space-y-3">
                                {quickLinks.map((link) => (
                                    <li key={link.name}>
                                        <Link
                                            href={link.path}
                                            className="text-gray-300 hover:text-white transition flex items-center gap-2"
                                        >
                                            <ArrowRight size={14} />
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Dance Forms */}
                        <div>
                            <h3 className="text-lg font-bold mb-6">Dance Forms</h3>
                            <ul className="space-y-3">
                                {danceForms.map((form) => (
                                    <li key={form}>
                                        <a href="#" className="text-gray-300 hover:text-white transition">
                                            {form}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Timings */}
                        <div>
                            <h3 className="text-lg font-bold mb-6">Class Timings</h3>
                            <ul className="space-y-3 text-gray-300">
                                <li className="flex justify-between">
                                    <span>Weekdays</span>
                                    <span>7 AM - 9 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Weekends</span>
                                    <span>8 AM - 8 PM</span>
                                </li>
                                {/* <li className="flex justify-between">
                                    <span>Kids Batch</span>
                                    <span>4 PM - 6 PM</span>
                                </li>
                                <li className="flex justify-between">
                                    <span>Adults Batch</span>
                                    <span>7 PM - 9 PM</span>
                                </li> */}
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-gray-800 pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-gray-400 mb-4 md:mb-0">
                                &copy; {new Date().getFullYear()} Dynamic Dance Academy. All rights reserved.
                            </p>
                            <div className="flex items-center space-x-6">
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    Privacy Policy
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    Terms of Service
                                </a>
                                <a href="#" className="text-gray-400 hover:text-white transition">
                                    Refund Policy
                                </a>
                            </div>
                        </div>
                        <div className="text-center mt-6">
                            <p className="text-gray-500 text-sm flex items-center justify-center gap-1">
                                Made with <Heart size={14} className="text-red-500 fill-current" /> by Dynamics Team
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer