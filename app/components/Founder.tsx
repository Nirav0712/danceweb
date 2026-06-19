import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';

export default function FounderSection() {
    return (
        <section className="bg-[#C9175D] text-white py-16 px-6 relative overflow-hidden h-full">


                <div className="text-center mb-12">
                    <h2 className="text-4xl font-bold">Company</h2>
                    <h3 className="text-3xl font-bold mt-2">Founder / Director</h3>
                </div>

                <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">


                    <div className="text-center">
                        <div className="bg-white rounded-3xl p-4 inline-block shadow-lg">
                            <img
                                src="/006.jpg.jpeg"
                                alt="Tirthraj Trivedi"
                                className="rounded-2xl w-72 h-80 object-cover"
                            />
                        </div>

                        <h3 className="text-2xl font-bold mt-6">Tirthraj Trivedi</h3>
                        <p className="text-sm mt-2">
                            Founder & Director of Dynamice Children Academy
                            International Culture Representative & Performing Arts Mentor
                            World Record Holder | Expert in Dance, Acting, Modeling & Creative Education
                        </p>


                        <div className="flex justify-center gap-4 mt-6 text-xl">
                            {[
                                { icon: <Facebook size={20} />, url: 'https://www.facebook.com/navinvato/videos/-dynamic-children-academy-%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4-%E0%AA%A8%E0%AB%80-%E0%AA%A8%E0%AA%82%E0%AA%AC%E0%AA%B0-1-kids-talent-hub%E0%AA%85%E0%AA%B9%E0%AB%80%E0%AA%82-%E0%AA%AC%E0%AA%BE%E0%AA%B3%E0%AA%95%E0%AB%8B-%E0%AA%AE%E0%AA%BE%E0%AA%A4%E0%AB%8D%E0%AA%B0-activ/4250374635282583/', label: 'Facebook' },
                                { icon: <Instagram size={20} />, url: 'https://www.instagram.com/dynamice_academy/', label: 'Instagram' },
                                { icon: <Twitter size={20} />, url: 'https://share.google/KaHmNCkLPfNC9II9L', label: 'Twitter' },
                                { icon: <Youtube size={20} />, url: 'https://www.youtube.com/@dynamicechildrenacademy617', label: 'YouTube' },
                            ].map((link, idx) => (
                                <a
                                    key={idx}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full hover:scale-110 transition-all duration-300 shadow-sm"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="text-sm leading-relaxed space-y-4">
                        <p>
                            Born and brought up in Himmatnagar, he comes from a humble family background where culture, tradition, and creativity became the foundation of his artistic journey. Inspired by Indian folk music, dance, and cultural values from an early age, he developed a deep passion for performing arts and cultural education.
                        </p>

                        <p>
                           He pursued his education in performing arts with dedication and professional training, shaping his expertise in dance, music, acting, and stage performance. Through years of hard work and creative excellence, he established himself as a mentor, performer, and cultural representative committed to nurturing young talent and promoting Indian culture globally.
                        </p>

                        <p>
                            With a vision to inspire the next generation through creativity and discipline, his academy has become a platform for students to explore dance, acting, modeling, and artistic expression. His team has proudly represented Indian culture at numerous national and international events, earning recognition, awards, and appreciation across the globe.
                        </p>
                    </div>

                </div>
            </section>

    );
}