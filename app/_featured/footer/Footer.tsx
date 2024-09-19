"use client";
import Image from "next/image";
import React, { ReactNode } from "react";
import {
  FaFacebookF,
  FaHeadset,
  FaInstagram,
  FaLock,
  FaSyncAlt,
  FaTiktok,
  FaTruck,
  FaYoutube,
} from "react-icons/fa";
import { FaHeadphones } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
type Feature = {
  icon: ReactNode;
  title: string;
  description: string;
};

interface SocialLink {
  name: string;
  url: string;
  icon: JSX.Element;
}

const features: Feature[] = [
  {
    icon: <FaTruck size={40} />,
    title: "Free Shipping",
    description: "For all Orders Over $100",
  },
  {
    icon: <FaSyncAlt size={40} />,
    title: "30 Days Returns",
    description: "For an Exchange Product",
  },
  {
    icon: <FaLock size={40} />,
    title: "Secured Payment",
    description: "Payment Cards Accepted",
  },
  {
    icon: <FaHeadset size={40} />,
    title: "Support 24/7",
    description: "Contact Us Anytime",
  },
];

interface LinkItem {
  name: string;
  url: string;
}

interface Section {
  title: string;
  links: LinkItem[];
}

const socialLinks: SocialLink[] = [
  {
    name: "Instagram",
    url: "https://www.instagram.com",
    icon: <FaInstagram size={20} />,
  },
  {
    name: "TikTok",
    url: "https://www.tiktok.com",
    icon: <FaTiktok size={20} />,
  },
  {
    name: "YouTube",
    url: "https://www.youtube.com",
    icon: <FaYoutube size={20} />,
  },
  {
    name: "X",
    url: "https://www.twitter.com",
    icon: <FaXTwitter size={20} />,
  },
  {
    name: "Facebook",
    url: "https://www.facebook.com",
    icon: <FaFacebookF size={20} />,
  },
];

const aboutAlukas: Section = {
  title: "About Alukas",
  links: [
    { name: "About Us", url: "#" },
    { name: "Core Values", url: "#" },
    { name: "Careers", url: "#" },
    { name: "Press Releases", url: "#" },
    { name: "Blog", url: "#" },
    { name: "Sitemap", url: "#" },
  ],
};

const ourCompany: Section = {
  title: "Our Company",
  links: [
    { name: "Shopping App", url: "#" },
    { name: "Be An Affiliate", url: "#" },
    { name: "Advertise Your Product", url: "#" },
    { name: "Media Enquires", url: "#" },
    { name: "Other Services", url: "#" },
  ],
};

const Footer = () => {
  return (
    <div className="mt-10">
      <div className="bg-[#F5F5F5] py-20">
        <div className="max-w-screen-xl  mx-auto">
          <div className="flex flex-col gap-5 items-center justify-center">
            <div className="flex flex-col items-center">
              <h2 className="text-[26px] font-semibold ">
                Subscribe Newsletter
              </h2>
              <p className="text-gray-600">
                Sign up to our Newsletter and get the discount code.
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              <input
                className="border-[2px] border-black outline-none py-2 px-2 w-[30rem]"
                type="text"
                placeholder="Your email address.."
              />
              <button className="bg-black text-white py-2 px-5">
                SUBSCRIBE
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex justify-around flex-wrap gap-2  items-center py-10 bg-white">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center flex  justify-center flex-col items-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="font-semibold text-lg">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-[14px] border-t-2 border-b-2 py-10">
        <div className="max-w-screen-xl  mx-auto flex flex-wrap justify-between space-y-8 md:space-y-0">
          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h2 className="text-lg font-bold">ALUKAS & CO</h2>
            <p className="text-gray-600">Gold & Diamonds</p>
          </div>

          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="font-semibold mb-4">{aboutAlukas.title}</h3>
            <ul className="space-y-2">
              {aboutAlukas.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-600 hover:text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="font-semibold mb-4">{ourCompany.title}</h3>
            <ul className="space-y-2">
              {" "}
              {ourCompany.links.map((link, index) => (
                <li key={index}>
                  <a href={link.url} className="text-gray-600 hover:text-black">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full flex flex-col gap-2 md:w-auto mb-6 md:mb-0">
            <div className="flex gap-2 items-center">
              <FaHeadphones size={40} />
              <div>
                <h3 className="font-semibold">Store Details</h3>
                <p className="text-gray-600">Need Any Help?</p>
                <p className="text-gray-600">(+800) 1234 56</p>
              </div>
            </div>
            <p className="text-gray-600">
              Address: 502 New Design Str, Melbourne, Australia
            </p>
            <p className="text-gray-600">Email: alukas@domain.com</p>
          </div>

          <div className="w-full md:w-auto mb-6 md:mb-0">
            <h3 className="font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="text-gray-600 hover:text-black"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="py-10">
        <div className="flex flex-col justify-center items-center">
          <Image
            alt=""
            height={100}
            width={100}
            src="https://demo-alukas.myshopify.com/cdn/shop/files/alk_payment.png?v=1711955031"
          />
          <p className="text-gray-600 text-[14px]">
            Copyright © Alukas all rights reserved. Powered by Bersky.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
