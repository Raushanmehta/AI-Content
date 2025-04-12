"use client";

import React from "react";
import Link from "next/link";
import {
  Twitter,
  Github,
  Linkedin,
  Facebook,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="mt-auto bg-gray-50 w-full">
      <div className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
        <div className="flex flex-col items-center text-center">
          <h4 className="font-bold text-gray-900 text-3xl py-5 ">
            Stay up to date
          </h4>

          <form className="mt-4 w-full max-w-md">
            <div className="flex flex-col sm:flex-row items-center gap-2 bg-white rounded-full p-2 shadow-md">
              <input
                type="email"
                placeholder="Enter your email"
                className="py-2.5 px-4 w-full rounded-lg border-none text-md outline-none"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-5 py-2.5 bg-emerald-400 hover:bg-emerald-600 text-black rounded-full text-sm font-medium transition"
              >
                Subscribe
              </button>
            </div>
            <p className="mt-3 text-sm text-gray-400">
              New UI kits or big discounts. Never spam.
            </p>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">Raushanmehta.in © 2025.</p>

          {/* Social Icons */}
          <div className="flex gap-4">
            <Link
              href="#"
              aria-label="Twitter"
              className="text-gray-400 hover:text-black transition"
            >
              <Twitter size={20} />
            </Link>
            <Link
              href="#"
              aria-label="GitHub"
              className="text-gray-400 hover:text-black transition"
            >
              <Github size={20} />
            </Link>
            <Link
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 hover:text-black transition"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="text-gray-400 hover:text-black transition"
            >
              <Facebook size={20} />
            </Link>
            <Link
              href="#"
              aria-label="Instagram"
              className="text-gray-400 hover:text-black transition"
            >
              <Instagram size={20} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
