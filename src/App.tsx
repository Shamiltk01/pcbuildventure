import React from 'react';
import {
  Cpu,
  Monitor,
  Wrench,
  ChevronRight,
  Instagram,
  Twitter,
  Twitch,
} from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="bg-black py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold flex items-center neon-text">
            <Cpu className="mr-2" /> Rigzilla
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#services"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-cyan-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 gradient-bg">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-6xl font-bold mb-4 neon-text">
            Level Up Your Setup
          </h2>
          <p className="text-2xl mb-8">
            Custom PC Builds for the Next-Gen Gamer
          </p>
          <a
            href="#contact"
            className="bg-black text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-gray-900 transition duration-300 inline-block transform hover:scale-105"
          >
            Get Your Epic Rig
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center neon-text">
            Our Builds
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <Monitor className="w-16 h-16 mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-2">Gaming Beasts</h3>
              <p>
                Crush your competition with our high-FPS, low-latency gaming
                rigs.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <Cpu className="w-16 h-16 mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-2">Creator Stations</h3>
              <p>
                Edit, render, and stream like a pro with our powerhouse builds.
              </p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg transform hover:scale-105 transition duration-300">
              <Wrench className="w-16 h-16 mb-4 text-cyan-400" />
              <h3 className="text-2xl font-semibold mb-2">Custom Mods</h3>
              <p>
                Stand out with unique case mods and RGB setups that scream YOU.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center neon-text">
            Build Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <img
              src="https://images.unsplash.com/photo-1587202372634-32705e3bf49c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Custom PC Build 1"
              className="rounded-lg shadow-lg hover:opacity-75 transition duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1587202372775-e229f172b9d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="Custom PC Build 2"
              className="rounded-lg shadow-lg hover:opacity-75 transition duration-300"
            />
            <img
              src="https://images.unsplash.com/photo-1624705002806-5d72df19c3ad?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="Custom PC Build 3"
              className="rounded-lg shadow-lg hover:opacity-75 transition duration-300"
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center neon-text">
            The Rigzilla Story
          </h2>
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <img
                src="https://images.unsplash.com/photo-1612837017391-4b6b7b0b0b0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt="Rigzilla Team"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2 md:pl-8">
              <p className="text-xl mb-4">
                Born from a passion for gaming and tech, Rigzilla is on a
                mission to build the most epic PCs for Gen Z gamers and
                creators.
              </p>
              <p className="text-xl mb-4">
                We're not just PC builders – we're fellow gamers, streamers, and
                tech enthusiasts who understand what you need to stay ahead in
                the digital world.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 text-lg"
              >
                Join the Rigzilla community <ChevronRight className="ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 gradient-bg">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center neon-text">
            Get Your Dream Rig
          </h2>
          <form className="max-w-lg mx-auto bg-black p-8 rounded-lg">
            <div className="mb-4">
              <label htmlFor="name" className="block mb-2 text-lg">
                Your Gamer Tag
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 bg-gray-800 rounded text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-2 text-lg">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 bg-gray-800 rounded text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block mb-2 text-lg">
                Tell Us About Your Dream Build
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 bg-gray-800 rounded text-white"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-cyan-500 text-black py-3 px-8 rounded-full text-lg font-semibold hover:bg-cyan-400 transition duration-300 w-full"
            >
              Send It!
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <Instagram />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitter />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <Twitch />
            </a>
          </div>
          <p className="text-gray-400">
            &copy; 2023 Rigzilla. All rights reserved. Stay epic!
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
