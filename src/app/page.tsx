// Project: TradingPlatform
// Framework: Next.js 14 (App Router)
// Styling: Tailwind CSS
// Backend: Firebase + Telegram Push

// File: src/app/page.tsx (Landing Page)

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white">
      <header className="p-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">OshilaFx-Academy</h1>
          <nav className="space-x-4">
            <a href="#features" className="hover:underline">Features</a>
            <a href="#pricing" className="hover:underline">Pricing</a>
            <a href="/login" className="bg-white text-black px-4 py-2 rounded-xl">Login</a>
          </nav>
        </div>
      </header>

      <section className="py-24 px-6 text-center max-w-4xl mx-auto">
        <h2 className="text-5xl font-extrabold mb-6">Trade Smarter. Earn Better.</h2>
        <p className="text-xl text-white/70 mb-10">Join a trusted space where you grow with every trade — reliable signals, clear pricing, and real results.</p>
        <a href="/register" className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl text-lg font-semibold">Get Started</a>
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

      <section id="pricing" className="py-20 px-6 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-blue-800">Choose Your Plan</h2>
          <p className="text-gray-600 mb-12">Flexible pricing for every trader. Upgrade anytime.</p>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Bronze</h3>
              <p className="my-2 text-lg font-semibold">$25 / 2 Weeks</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>Access to VIP Signal Room</li>
                <li>Telegram Notifications</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">Subscribe</a>
            </div>

            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Silver</h3>
              <p className="my-2 text-lg font-semibold">$50 / 1 Month</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>Everything in Bronze</li>
                <li>Priority Entry Signals</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">Subscribe</a>
            </div>

            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Gold</h3>
              <p className="my-2 text-lg font-semibold">$100 / 2 Months</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>All Silver Features</li>
                <li>Weekly Market Breakdown</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition">Subscribe</a>
            </div>

            <div className="p-6 rounded-xl shadow-lg border border-blue-200 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-blue-700">Platinum</h3>
              <p className="my-2 text-lg font-semibold">$600 / 1 Year</p>
              <ul className="text-sm text-gray-700 mb-4 space-y-1">
                <li>Everything Unlocked</li>
                <li>1-on-1 Strategy Session</li>
                <li>Lifetime Chart Templates</li>
              </ul>
              <a href="/login" className="bg-blue-600 text-white w-full py-2 rounded-xl hover:bg-blue-700 transition" >Subscribe</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} // END OF PAGE
