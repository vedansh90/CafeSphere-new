import { Instagram, Facebook, Utensils } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#6F4D36] text-white py-16 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-12">
        {/* Left Section */}
        <div className="flex-1 text-center md:text-left">
          <h2 className="text-2xl font-bold flex justify-center md:justify-start items-center gap-2">
            <span>☕</span> CafeSphere
          </h2>
          <p className="text-sm italic mt-4 text-[#E2DAB2] leading-relaxed">
            Find and book the perfect café for your <br className="hidden sm:block" />
            celebrations, birthdays, anniversaries, and special occasions.
          </p>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-start items-center gap-5 mt-6">
            <Instagram className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110 hover:text-[#D4AE36]" />
            <Facebook className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110 hover:text-[#D4AE36]" />
            <Utensils className="w-6 h-6 cursor-pointer transition-transform transform hover:scale-110 hover:text-[#D4AE36]" />
          </div>
        </div>

        {/* Links Sections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 text-center md:text-left w-full md:w-auto">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-[#D4AE36] text-lg relative pb-2 border-b-2 border-[#D4AE36] w-max mx-auto md:mx-0">
              Quick links
            </h3>
            <ul className="text-sm mt-4 space-y-3 text-[#E2DAB2]">
              <li className="hover:text-white transition duration-300 cursor-pointer">Home</li>
              <li className="hover:text-white transition duration-300 cursor-pointer">Find Café’s</li>
              <li className="hover:text-white transition duration-300 cursor-pointer">About us</li>
            </ul>
          </div>

          {/* For Users */}
          <div>
            <h3 className="font-bold text-[#D4AE36] text-lg relative pb-2 border-b-2 border-[#D4AE36] w-max mx-auto md:mx-0">
              For Users
            </h3>
            <ul className="text-sm mt-4 space-y-3 text-[#E2DAB2]">
              <li className="hover:text-white transition duration-300 cursor-pointer">Sign in</li>
              <li className="hover:text-white transition duration-300 cursor-pointer">Register</li>
              <li className="hover:text-white transition duration-300 cursor-pointer">My bookings</li>
              <li className="hover:text-white transition duration-300 cursor-pointer">My profile</li>
            </ul>
          </div>

          {/* For Cafe Owners */}
          <div>
            <h3 className="font-bold text-[#D4AE36] text-lg relative pb-2 border-b-2 border-[#D4AE36] w-max mx-auto md:mx-0">
              For Cafe Owners
            </h3>
            <ul className="text-sm mt-4 space-y-3 text-[#E2DAB2]">
              <li className="hover:text-white transition duration-300 cursor-pointer">Owner login</li>
              <li className="hover:text-white transition duration-300 cursor-pointer">List your cafe</li>
              <li className="hover:text-white transition duration-300 cursor-pointer">Owner dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/30 mt-12 pt-6 text-center text-sm text-[#E2DAB2]">
        © 2025 CaféCelebrate. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
