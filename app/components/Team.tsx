'use client'

import Image from 'next/image'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

interface TeamMember {
  name: string
  role: string
  image: string
  facebook?: string
  twitter?: string
  instagram?: string
  linkedin?: string
}

const teamData: TeamMember[] = [
  {
    name: "Avinash Sir",
    role: "Founder & Lead Instructor",
    image: "/teacher1.png",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  },
  {
    name: "Reetu Mam",
    role: "Classical Dance Expert",
    image: "/teacher2.png",
    facebook: "https://facebook.com/",
    twitter: "https://twitter.com/",
    instagram: "https://instagram.com/",
    linkedin: "https://linkedin.com/",
  }
]

export default function Team() {
  return (
    <section className="relative py-20 bg-linear-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--tw-gradient-stops))] from-primary-500 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-500/20 text-primary-400 rounded-full text-sm font-semibold tracking-wide uppercase mb-4">
            Dance Teachers
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Professional Instructors
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Learn from the best in the industry with years of experience and passion for dance
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {teamData.map((member, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700/50 hover:border-primary-500/50 transition-all duration-500 hover:transform hover:scale-[1.02]"
            >
              {/* Image Container */}
              <div className="relative h-115 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/20 to-transparent" />

                {/* Social Links - Appear on hover */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {member.facebook && (
                    <a
                      href={member.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {member.twitter && (
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                  {member.instagram && (
                    <a
                      href={member.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {member.linkedin && (
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-primary-500 hover:scale-110 transition-all duration-300"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors duration-300">
                  {member.name}
                </h3>
                <p className="text-gray-400 text-sm">
                  {member.role}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-primary-500/20 blur-xl group-hover:bg-primary-500/40 transition-all duration-500" />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/25 hover:transform hover:-translate-y-1">
            Meet All Instructors
          </button>
        </div>
      </div>
    </section>
  )
}
