// components/Header.js
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, Phone, Instagram, Facebook, Youtube, ChevronDown } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    // mobile submenu state: store name -> boolean
    const [mobileOpen, setMobileOpen] = useState<Record<string, boolean>>({});

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        {
            name: "Journey",
            path: "#",
            children: [
                { name: "National", path: "/journey/national" },
                { name: "International", path: "/journey/international" },
            ],
        },
        { name: "Gallery", path: "/gallery" },
        { name: "Blog", path: "/blog" },
        {
            name: "News",
            path: "#",
            children: [
                { name: "National", path: "/news/national" },
                { name: "International", path: "/news/international" },
            ],
        },
        { name: "Contact", path: "/contact" },
    ];

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // toggle mobile submenu for a given item name
    const toggleMobileSubmenu = (name: string) =>
        setMobileOpen((prev) => ({ ...prev, [name]: !prev[name] }));

    return (
        <>

            {/* Main Header */}
            <header
                className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-xl" : "bg-white"
                    }`}
            >
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo */}
                        <Link href="/" className="flex items-center space-x-3 group">
                            {/* <div className="h-12 w-12 bg-linear-to-br from-pink-500 to-yellow-400 rounded-full flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-300">
                                <span className="text-white font-bold text-2xl">रंग</span>
                            </div> */}
                            <div>
                                {/* <h1 className="text-3xl font-bold text-gray-900 font-serif">RangSagar</h1> */}
                                {/* <p className="text-sm text-gray-600">Dance Academy</p> */}
                                <Image
                                    src="/logodance.png"
                                    alt="Danza"
                                    width={120}
                                    height={50}
                                    className="w-[120px] h-auto object-contain"
                                />
                            </div>
                        </Link>

                        {/* Desktop Navigation */}
                        <nav className="hidden lg:flex items-center space-x-8">
                            {navLinks.map((link) =>
                                link.children ? (
                                    // dropdown parent
                                    <div key={link.name} className="relative group">
                                        <Link
                                            href={link.path}
                                            className="inline-flex items-center gap-2 text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown size={16} className="transform group-hover:-rotate-180 transition-transform" />
                                        </Link>

                                        {/* dropdown panel */}
                                        <div className="absolute left-0 w-44 bg-white text-gray-800 rounded shadow-lg opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity">
                                            {link.children.map((child) => (
                                                <Link
                                                    key={child.path}
                                                    href={child.path}
                                                    className="block px-4 py-2 hover:bg-gray-50"
                                                >
                                                    {child.name}
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                ) : (
                                    <Link
                                        key={link.name}
                                        href={link.path}
                                        className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300 relative group"
                                    >
                                        {link.name}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
                                    </Link>
                                )
                            )}
                        </nav>

                        {/* CTA Buttons */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Link href="/contact" className="inline-block bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition">
                                Free Trial
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
                            onClick={() => setIsMenuOpen((s) => !s)}
                            aria-expanded={isMenuOpen}
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>

                    {/* Mobile Navigation */}
                    <div className={`lg:hidden ${isMenuOpen ? "block" : "hidden"} mt-4 pb-4 animate-slide-up`}>
                        <nav className="flex flex-col divide-y">
                            <div className="px-2 py-3">
                                {navLinks.map((link) =>
                                    link.children ? (
                                        <div key={link.name} className="py-2">
                                            <button
                                                onClick={() => toggleMobileSubmenu(link.name)}
                                                className="w-full flex items-center justify-between px-4 py-2 text-left text-gray-700 hover:bg-gray-50 rounded-md"
                                                aria-expanded={!!mobileOpen[link.name]}
                                            >
                                                <span className="font-medium">{link.name}</span>
                                                <ChevronDown size={16} className={`transition-transform ${mobileOpen[link.name] ? "rotate-180" : ""}`} />
                                            </button>

                                            {/* mobile submenu */}
                                            <div className={`${mobileOpen[link.name] ? "block" : "hidden"} mt-2 pl-6`}>
                                                {link.children.map((child) => (
                                                    <Link
                                                        key={child.path}
                                                        href={child.path}
                                                        className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                                                        onClick={() => {
                                                            setIsMenuOpen(false);
                                                            setMobileOpen({});
                                                        }}
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <div key={link.name} className="py-2">
                                            <Link
                                                href={link.path}
                                                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-md"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {link.name}
                                            </Link>
                                        </div>
                                    )
                                )}
                            </div>

                            <div className="pt-4 border-t px-4">
                                <Link
                                    href="/contact"
                                    className="block text-center bg-primary-600 text-white px-4 py-2 rounded-md font-medium hover:bg-primary-700 transition"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    Free Trial Class
                                </Link>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
