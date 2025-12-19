import Image from "next/image";

const Contact = () => {
  return (
    <section id="contact-sec" className="bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

          {/* Left Image */}
          <div>
            <Image
              src="/assets/img/0011.jpg"
              width={600}
              height={700}
              alt="Contact Image"
              className="rounded-xl shadow-lg object-cover w-full"
            />
          </div>

          {/* Right Form Section */}
          <div>
            {/* Title */}
            <div className="mb-8">
              <span className="text-pink-500 text-sm uppercase tracking-wide">
                Get In Touch
              </span>
              <h2 className="text-3xl font-bold text-white mt-2">
                Let’s Talk to an Expert
              </h2>
              <p className="text-gray-300 mt-3">
                Efficiently integrate 23 years of certified expertise and global
                affiliation while tailoring an optimal, value-driven curriculum.
              </p>
            </div>

            {/* Contact Form */}
            <form
              action="/api/contact"
              method="POST"
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full bg-white/10 text-white p-3 rounded-lg outline-none border border-white/20 focus:border-pink-500"
                  />
                  <i className="fal fa-user absolute right-3 top-3 text-gray-400"></i>
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full bg-white/10 text-white p-3 rounded-lg outline-none border border-white/20 focus:border-pink-500"
                  />
                  <i className="fal fa-envelope absolute right-3 top-3 text-gray-400"></i>
                </div>

                {/* Phone */}
                <div className="relative">
                  <input
                    type="tel"
                    name="number"
                    placeholder="Phone Number"
                    className="w-full bg-white/10 text-white p-3 rounded-lg outline-none border border-white/20 focus:border-pink-500"
                  />
                  <i className="fa-regular fa-phone-flip absolute right-3 top-3 text-gray-400"></i>
                </div>

                {/* Subject */}
                <div>
                  <select defaultValue=""
                    name="subject"
                    className="w-full bg-white/10 text-white p-3 rounded-lg outline-none border border-white/20 focus:border-pink-500"
                  >
                    <option value="" disabled hidden>
                      Select Subject
                    </option>
                    <option value="Contemporary">Contemporary</option>
                    <option value="Ballet">Ballet</option>
                    <option value="Hip-hop">Hip-hop</option>
                    <option value="Classic">Classic</option>
                    <option value="Modern">Modern</option>
                    <option value="Kids">Kid’s</option>
                    <option value="Pole Dance">Pole Dance</option>
                    <option value="Tango">Tango</option>
                    <option value="Bachata">Bachata</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="relative">
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Your Message"
                  className="w-full bg-white/10 text-white p-3 rounded-lg outline-none border border-white/20 focus:border-pink-500"
                ></textarea>
                <i className="fal fa-comment absolute right-3 top-3 text-gray-400"></i>
              </div>

              {/* Button */}
              <button
                type="submit"
                className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-8 rounded-lg w-full md:w-auto transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Shape Image (Optional) */}
      <div className="hidden xl:block absolute top-[29%] left-[6%] opacity-80">
        <Image
          src="/assets/img/shape/shape_8.png"
          width={150}
          height={150}
          alt="Shape"
          className="animate-pulse"
        />
      </div>
    </section>
  );
};

export default Contact;
