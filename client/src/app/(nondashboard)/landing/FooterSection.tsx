import Link from 'next/link'
import React from 'react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import{
    faFacebook,
    faInstagram,
    faTwitter,
    faLinkedin,
    faYoutube
} from "@fortawesome/free-brands-svg-icons"

const FooterSection = () => {
  return (
    <footer className="border-t border-gray-200 py-20">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col justify-center items-center space-y-6">
          <div>
            <Link href="/" className="text-xl font-bold" scroll={false}>
              RENTIFY
            </Link>
          </div>
          <nav>
            <ul className="flex flex-wrap justify-center gap-6">
              <li>
                <Link href="/about" className="hover:text-gray-600">About Us</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-gray-600">Contact Us</Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-gray-600">FAQ</Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-gray-600">Terms</Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-gray-600">Privacy</Link>
              </li>
            </ul>
          </nav>
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              aria-label="Facebook"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FontAwesomeIcon icon={faFacebook} className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FontAwesomeIcon icon={faInstagram} className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FontAwesomeIcon icon={faTwitter} className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="Linkedin"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5 text-white" />
            </a>
            <a
              href="#"
              aria-label="Youtube"
              className="w-10 h-10 rounded-full bg-black flex items-center justify-center hover:bg-gray-800 transition-colors">
              <FontAwesomeIcon icon={faYoutube} className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
        <div className = "mt-8 text-center text-sm text-gray-500 flex justify-center space-x-4">
            <span>© RENTIFY. ALL Rights reserved.</span>
            <Link href="/privacy">Privacy Policy</Link>
            <Link href="/tos">Terms of Service</Link>
            <Link href="/cookie">Cookie Policy</Link>
        </div>
      </div>
    </footer>
  )
}

export default FooterSection