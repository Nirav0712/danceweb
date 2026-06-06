import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const flags = [
  'ca', 'gb', 'fr', 'es', 'cz',
  'pl', 'ch', 'de', 'tr', 'om',
  'ae', 'cn', 'th', 'my', 'sg'
];

const logos = [
  // '/s1-Photoroom.png',
  // '/s3-Photoroom.png',
  // '/s4-Photoroom.png',
  // '/s5-Photoroom.png',
  // '/s6-Photoroom.png',
  '/s7-Photoroom.png',
];

const Country: React.FC = () => {
  return (
    <div className="w-full font-sans bg-[#f7f7f7] flex flex-col justify-center">
      {/* Top Section - Associations */}
      <div className="relative w-full py-20 md:py-[100px] min-h-[500px] flex flex-col items-center justify-center overflow-hidden">

        {/* World Map Background Image */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: "url('/background.png')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            opacity: 0.4
          }}
        ></div>

        {/* Very Light Overlay */}
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
        ></div>

        <div className="z-10 flex flex-col items-center w-full relative">
          {/* <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-12 sm:mb-16 uppercase tracking-wider font-sans">
            ASSOCIATION
          </h2> */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-2">
              <span className="text-amber-400 text-2xl">✦</span>
              <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900">
                ASSOCIATION
              </h2>
              <span className="text-amber-400 text-2xl">✦</span>
            </div>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-10 max-w-5xl px-4 sm:px-8">
            {logos.map((src, index) => (
              <div
                key={index}
                className="bg-white rounded-[2rem] sm:rounded-[2.5rem] shadow-[0_4px_25px_rgba(0,0,0,0.06)] w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 flex items-center justify-center p-6 border border-gray-50 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={src}
                    alt={`Association ${index + 1}`}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Section - Flags */}
      <div className="w-full bg-[#c9175d] py-16 md:py-20 flex flex-col items-center relative overflow-hidden">
        <h3 className="text-white text-lg sm:text-xl md:text-2xl font-medium mb-12 text-center px-4 z-10 w-full">
          Participated International Festivals in last 12 years All Over world
        </h3>

        <div className="grid grid-cols-5 gap-3 sm:gap-4 md:gap-5 px-4 pb-4 z-10">
          {flags.map((code) => (
            <Link
              href="/journey/international"
              key={code}
              className="relative w-[3.5rem] h-[2.5rem] sm:w-[5rem] sm:h-[3.5rem] md:w-[6.5rem] md:h-[4.5rem] shadow-[0_4px_10px_rgba(0,0,0,0.2)] rounded-sm overflow-hidden border-[1.5px] border-white/90 group"
            >
              <Image
                src={`https://flagcdn.com/w160/${code}.png`}
                alt={`${code} flag`}
                fill
                className="object-cover"
                unoptimized
              />
              {/* Glossy Effect Overlay (Optional, matches 3d feel of mockup flags) */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/5 to-transparent opacity-60 pointer-events-none group-hover:opacity-30 transition-opacity"></div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Country;