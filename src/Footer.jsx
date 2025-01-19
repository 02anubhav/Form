import React from "react";

const Footer = () => {

  return (
    <footer className="w-full bg-black text-zinc-50">
      <div className="max-w-screen-xl mx-auto py-10 px-6 lg:px-8 flex flex-col lg:flex-row gap-12 lg:gap-32 ">
        <div className="lg:basis-1/2">
          <h1 className="text-4xl md:text-6xl lg:text-[8rem] text-[#ab20fd] font-semibold leading-none tracking-tight">
            TradyLytics
          </h1>
        </div>

        {/* Links and Contact Section */}
        <div className="lg:basis-1/2 flex flex-col sm:flex-row gap-8">
          {/* Social Links */}
          <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-500 text-sm md:text-base">Socials</h4>
            {[
              {
                name: "Instagram",
                url: "https://www.instagram.com/tradylytics/?igsh=YW13OW5ibXE4Nm1l",
              },
              {
                name: "Twitter",
                url: "https://x.com/tradylytics?t=R8XIh48q3r-stSYc3uoRSA&s=09",
              },
              {
                name: "LinkedIn",
                url: "https://www.linkedin.com/company/tradylytics",
              },
            ].map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-zinc-600 text-sm md:text-base hover:text-[#ab20fd]"
              >
                {social.name}
              </a>
            ))}
          </div>

          {/* Contact Information */}
          <div className="basis-1/3">
            <h4 className="mb-6 text-zinc-500 text-sm md:text-base">
              Contact Us
            </h4>
            <a
              href="mailto:info@tradylytics.in"
              className="block mt-2 text-zinc-600 text-sm md:text-base hover:text-[#ab20fd]"
            >
              info@tradylytics.in
            </a>
            <a
              href="tel:+919166452134"
              className="block mt-2 text-zinc-600 text-sm md:text-base hover:text-[#ab20fd]"
            >
              +91 9166452134
            </a>
          </div>

          {/* Address Section */}
          <div className="basis-1/2 flex flex-col items-start lg:items-end">
            <h4 className="mb-4 text-[#ab20fd] text-lg font-semibold">
              TradyLytics
            </h4>
            <p className="text-left lg:text-right text-sm md:text-base">
              318 Sector 5 Avas Vikas Colony, Sikandra, Agra,
              <br /> Uttar Pradesh, 282007
              <br />
              India
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
