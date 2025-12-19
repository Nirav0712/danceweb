'use client'

import { useState } from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, Send, Facebook, Instagram, Youtube, Twitter } from 'lucide-react'

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsSubmitting(true)
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500))
        setIsSubmitting(false)
        setSubmitted(true)
        setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    }

    return (
        <main>
            {/* Hero Section */}
            <section
                className="relative py-32 bg-cover bg-center"
                style={{ backgroundImage: "url('/assets/img2/5I7A3922.jpg')" }}
            >
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-gray-900/70" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center">
                        <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
                            Get In Touch
                        </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                            Contact Us
                        </h1>
                        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                            Have questions about our dance programs? We&apos;d love to hear from you!
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Info Cards */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 -mt-24 relative z-20">
                        {/* Address */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <MapPin className="w-7 h-7 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Our Location</h3>
                            <p className="text-gray-600 text-sm">
                                RangSagar Dance Academy<br />
                                Main Street, City Center<br />
                                Gujarat, India
                            </p>
                        </div>

                        {/* Phone */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <Phone className="w-7 h-7 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Phone Number</h3>
                            <p className="text-gray-600 text-sm">
                                +91 98765 43210<br />
                                +91 98765 43211
                            </p>
                        </div>

                        {/* Email */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <Mail className="w-7 h-7 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Email Address</h3>
                            <p className="text-gray-600 text-sm">
                                info@rangsagar.com<br />
                                admissions@rangsagar.com
                            </p>
                        </div>

                        {/* Hours */}
                        <div className="bg-white rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-shadow duration-300 text-center">
                            <div className="w-14 h-14 mx-auto mb-4 bg-primary-100 rounded-full flex items-center justify-center">
                                <Clock className="w-7 h-7 text-primary-600" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">Working Hours</h3>
                            <p className="text-gray-600 text-sm">
                                Mon - Sat: 8:00 AM - 8:00 PM<br />
                                Sunday: 9:00 AM - 1:00 PM
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Map Section */}
            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl p-8 md:p-10 shadow-xl">
                            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                                Send Us a Message
                            </h2>
                            <p className="text-gray-600 mb-8">
                                Fill out the form below and we&apos;ll get back to you as soon as possible.
                            </p>

                            {submitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 mx-auto mb-6 bg-green-100 rounded-full flex items-center justify-center">
                                        <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                    <p className="text-gray-600 mb-6">Your message has been sent successfully. We&apos;ll contact you soon.</p>
                                    <button
                                        onClick={() => setSubmitted(false)}
                                        className="text-primary-600 font-semibold hover:underline"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                                                Subject *
                                            </label>
                                            <select
                                                id="subject"
                                                name="subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all bg-white"
                                            >
                                                <option value="">Select a subject</option>
                                                <option value="admission">Admission Inquiry</option>
                                                <option value="trial">Free Trial Class</option>
                                                <option value="courses">Course Information</option>
                                                <option value="events">Events & Performances</option>
                                                <option value="other">Other</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                            rows={5}
                                            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all resize-none"
                                            placeholder="Write your message here..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-400 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                                                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                                                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                                </svg>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="w-5 h-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Map & Social */}
                        <div className="space-y-8">
                            {/* Map */}
                            <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-80">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.8498847808347!2d72.5713518!3d22.9946296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDU5JzQwLjciTiA3MsKwMzQnMTYuOSJF!5e0!3m2!1sen!2sin!4v1234567890"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="RangSagar Location"
                                />
                            </div>

                            {/* Social Media */}
                            <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl p-8">
                                <h3 className="text-xl font-bold text-white mb-4">Follow Us</h3>
                                <p className="text-gray-400 mb-6">
                                    Stay connected with us on social media for updates, events, and dance inspiration.
                                </p>
                                <div className="flex gap-4">
                                    <a
                                        href="https://facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                                    >
                                        <Facebook className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                                    >
                                        <Instagram className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://youtube.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                                    >
                                        <Youtube className="w-5 h-5" />
                                    </a>
                                    <a
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-primary-500 transition-colors"
                                    >
                                        <Twitter className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Quick Links */}
                            <div className="bg-white rounded-2xl p-8 shadow-xl">
                                <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <Link href="/about" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        → About Us
                                    </Link>
                                    <Link href="/gallery" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        → Gallery
                                    </Link>
                                    <Link href="/blog" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        → Blog
                                    </Link>
                                    <Link href="/journey/national" className="text-gray-600 hover:text-primary-600 transition-colors">
                                        → Our Journey
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}
