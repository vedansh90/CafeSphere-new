import React from "react";

const About = () => {
  const defaultImage = "https://via.placeholder.com/800x600?text=Default+Image"; // Fallback image URL

  return (
    <div className="bg-[#fffaf5] text-gray-800 font-[Inter]">
      {/* Hero Section */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <img
          src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1050&q=80"
          alt="Cafe interior"
          className="absolute w-full h-full object-cover"
          onError={(e) => e.target.src = defaultImage} // Use default image on error
        />
        <div className="absolute bg-black bg-opacity-50 w-full h-full" />
        <h1 className="relative text-4xl sm:text-5xl font-bold text-white text-center z-10">
          Welcome to CaféSphere
        </h1>
      </div>

      {/* Intro Section */}
      <section className="px-6 sm:px-16 py-12 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Who We Are</h2>
        <p className="text-center text-gray-600 text-lg max-w-3xl mx-auto">
          CaféSphere isn’t just a café – it's a community space to connect, create memories, and celebrate moments.
          From surprise parties to romantic dinners, we make every occasion special.
        </p>
      </section>

      {/* Mission / Vision / Story */}
      <section className="grid md:grid-cols-3 gap-10 px-6 sm:px-16 py-10 max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1505624600088-54e59c4a0849?auto=format&fit=crop&w=800&q=80"
            alt="Mission"
            className="w-20 h-20 mx-auto mb-4 object-cover rounded-full"
            onError={(e) => e.target.src = defaultImage}
          />
          <h3 className="text-xl font-semibold mb-2">🌱 Our Mission</h3>
          <p className="text-gray-600">To bring people together over a warm cup and create unforgettable experiences in every sip.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1512912481459-694b2ca5de47?auto=format&fit=crop&w=800&q=80"
            alt="Values"
            className="w-20 h-20 mx-auto mb-4 object-cover rounded-full"
            onError={(e) => e.target.src = defaultImage}
          />
          <h3 className="text-xl font-semibold mb-2">💛 Our Values</h3>
          <p className="text-gray-600">Community, comfort, and creativity. We serve kindness alongside your cappuccino.</p>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6 text-center">
          <img
            src="https://images.unsplash.com/photo-1505612211436-5630bb8cd219?auto=format&fit=crop&w=800&q=80"
            alt="Story"
            className="w-20 h-20 mx-auto mb-4 object-cover rounded-full"
            onError={(e) => e.target.src = defaultImage}
          />
          <h3 className="text-xl font-semibold mb-2">📖 Our Story</h3>
          <p className="text-gray-600">Started with a passion for great coffee and deep conversations, CaféSphere has grown into a gathering hub for dreamers and doers.</p>
        </div>
      </section>
    </div>
  );
};

export default About;
