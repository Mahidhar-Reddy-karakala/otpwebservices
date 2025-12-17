
import {} from 'lucide-react'

export const Home=()=>{
    return (
        <section id="Home" className='min-h-screen flex items-center justify-center px-4 py-30 bg-black border-t border-gray-800'>
        <div className="relative max-w-5xl mx-auto text-center z-10">
        <div className="inline-block mb-6 px-4 py-2 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10 smooth-transition">
          <span className="text-xs md:text-sm text-white/80">✨ The next-gen authentication platform</span>
        </div>

        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight tracking-tight">
          <span className="text-white">Secure</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">Authentication</span>
          <br />
          <span className="text-white/60">Made Simple</span>
        </h1>

        <p className="text-lg md:text-xl text-white/60 mb-12 max-w-3xl mx-auto leading-relaxed">
          EasyAuth is a modern authentication platform that helps developers integrate secure login systems in minutes.
          Focus on building great products while we handle security.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <button className="px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-white/90 smooth-transition text-base shadow-lg hover:shadow-xl">
            Get Started Free
          </button>
          <button className="px-8 py-4 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 smooth-transition text-base">
            View Documentation
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8 pt-12 border-t border-white/10">
          {[
            { label: "99.99%", value: "Uptime" },
            { label: "0ms", value: "Latency" },
            { label: "10k+", value: "Developers" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-2xl md:text-4xl font-bold text-white">{stat.label}</div>
              <div className="text-sm md:text-base text-white/60 mt-1">{stat.value}</div>
            </div>
          ))}
        </div>
      </div>
        </section>
    )
}