import React from "react";
import { ButtonPrimary } from "./Button";

function Footer() {
  const sitemap = [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Work",
      href: "#work",
    },
    {
      label: "Reviews",
      href: "#reviews",
    },
    {
      label: "Contact me",
      href: "#contact",
    },
  ];

  const socials = [
    {
      label: "GitHub",
      href: "https://www.github.com/hayyantahirr",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/hayyan-tahir-157504321/",
    },
    {
      label: "Twitter X",
      href: "https://x.com/hayyantahirr",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/hayyantahirr",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/share/186jxaJnH8/",
    },
  ];
  return (
    <>
      <footer className="section">
        <div className="container">
          <div className="lg:grid lg:grid-cols-2">
            <div className="mb-10">
              <h2 className="headline-1 mb-3 lg:max-w-[12ch] reveal-up">
                Let&apos;s work together today!
              </h2>
              <div className="mt-10">
                <ButtonPrimary
                  href={"mailto:hayyantahirr@gmail.com"}
                  label="Start project"
                  icon={"chevron_right"}
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4 lg:pl-20">
              <div>
                <p className="mb-2 reveal-up">Sitemap</p>
                <ul>
                  {sitemap.map((item, key) => (
                    <li key={key}>
                      <a
                        href={item.href}
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="mb-2 reveal-up">Socials</p>
                <ul>
                  {socials.map((item, key) => (
                    <li key={key}>
                      <a
                        href={item.href}
                        target="_blank"
                        className="block text-sm text-zinc-400 py-1 transition-colors hover:text-zinc-200 reveal-up"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between pt-10 mb-8">
            <a href="/" className="logo reveal-up">
              <img
                src="/images/ht_white_bold.svg"
                alt="logo"
                width={100}
                height={40}
              />
            </a>
            <p className="text-zinc-500 text-sm reveal-up">
              &copy; {new Date().getFullYear()} <span className="text-zinc-200">hayyantahirr</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
