// File: src/app/page.tsx
// Updated with: Telegram section, trade history slider, and "Why OshilaFX" section

'use client'


import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/autoplay'
import { Autoplay } from 'swiper/modules'

export default function HomePage() {
  const sliderImages = Array.from({ length: 14 }, (_, i) => `/profits/sample${i + 1}.jpg`)

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <header className="p-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OshilaFx-Academy</h1>
          <nav className="space-x-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
              <a href="#profits" className="hover:underline">Trade Setups</a>
            <a href="/login" className="bg-white text-black px-4 py-2 rounded-xl">Login</a>
          </nav>
        </div>
      </header>

      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">Trade Smarter. Earn Better.</h2>
        <p className="text-xl text-white/70 mb-10">Join a trusted space where you grow with every trade — reliable signals, clear pricing, and real results.</p>
        <a href="/register" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-lg font-semibold">Get Started</a>
      </section>

      {/* NEW: Telegram Promo Section */}
      <section className="py-20 px-6 bg-blue-950 text-white text-center">
        <h2 className="text-4xl font-bold mb-4">Join Our Free Telegram Channel</h2>
        <p className="text-white/80 mb-6">Get free trading signals and updates daily. Our Telegram community helps you stay ahead with the market.</p>
        <a
          href="https://t.me/oshilafxacademy"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl text-lg font-semibold"
        >
          Join Telegram
        </a>
      </section>

      <section id="features" className="py-20 bg-white text-black">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10 px-6">
          <div className="p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Private Signal Room</h3>
            <p>Only your paid subscribers can access premium trading calls securely.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Telegram Push Updates</h3>
            <p>Instantly deliver accurate and timely alerts to all your clients via Telegram.</p>
          </div>
          <div className="p-6 rounded-xl shadow-lg border border-gray-200">
            <h3 className="text-xl font-bold mb-2">Designed for Traders</h3>
            <p>Built with you in mind — clean layout, fast performance, and intuitive flows for seamless trading support.</p>
          </div>
        </div>
      </section>

      {/* UPDATED: Trade History / Setup Slider */}
      <section id="profits"className="py-20 bg-gray-900 text-white px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Our Trade Setups & Profits</h2>
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={20}
            loop
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            modules={[Autoplay]}
            className="w-full"
          >
            {sliderImages.map((src, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <img
                  src={src}
                  alt={`Sample ${index + 1}`}
                  className="h-56 md:h-64 rounded-xl object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why OshilaFX Section */}
      <section className="py-20 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Why Choose OshilaFx?</h2>
          <ul className="space-y-4 text-left max-w-md mx-auto text-lg">
            <li className="flex items-start">
              <span className="text-green-600 font-bold text-xl mr-2">✓</span>
              Consistent Daily Signals from Market Experts
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold text-xl mr-2">✓</span>
              Transparent Trade History and Updates
            </li>
            <li className="flex items-start">
              <span className="text-green-600 font-bold text-xl mr-2">✓</span>
              Strong Community with Real-Time Support
            </li>
          </ul>
        </div>
      </section> 

      <section id="pricing" className="py-20 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">Choose Your Plan</h2>
          <p className="text-gray-600 mb-12">Flexible pricing for every trader. Upgrade anytime.</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Bronze</h3>
              <p className="my-2 text-lg font-semibold">$15 / 2 Weeks</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>Access to VIP Signal Room</li>
                <li>Telegram Notifications</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">Subscribe</a>
            </div>

            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Silver</h3>
              <p className="my-2 text-lg font-semibold">$30 / 1 Month</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>Everything in Bronze</li>
                <li>Priority Entry Signals</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">Subscribe</a>
            </div>

            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Gold</h3>
              <p className="my-2 text-lg font-semibold">$60 / 2 Months</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>All Silver Features</li>
                <li>Weekly Market Breakdown</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">Subscribe</a>
            </div>

            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Platinum</h3>
              <p className="my-2 text-lg font-semibold">$360 / 1 Year</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>Everything Unlocked</li>
                <li>1-on-1 Strategy Session</li>
                <li>Lifetime Chart Templates</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">Subscribe</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} // END OF PAGE
