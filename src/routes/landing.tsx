import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { Button } from '@/components/ui/button'
import { ScrollingNFTs } from '@/components/landing/scrolling-nfts'
import { CollapsibleFAQ } from '@/components/landing/collapsible-faq'

export const Route = createFileRoute('/landing')({
  component: LandingPage,
  ssr: false,
})

function LandingPage() {
  const navigate = useNavigate()

  const handleJoinUs = () => {
    navigate({ to: '/waitlist' })
  }

  return (
    <div className="min-h-screen text-white bg-[#0a0a0f] relative overflow-hidden">
      {/* Celestial background layers */}
      <div className="absolute inset-0 bg-[url('/backgrounds/dark.png')] bg-cover bg-fixed opacity-20" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d0d14] to-[#0a0a0f]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(120,119,198,0.05),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.02),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(59,130,246,0.03),transparent_70%)]" />

      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30 animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 pt-24 pb-32 xl:pt-28 xl:pb-36">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left space-y-12 animate-fadeInUp">
            <div className="transform hover:scale-105 transition-transform duration-700">
              <img
                src="/landing/superrare.svg"
                className="mx-auto lg:mx-0 max-w-md xl:max-w-lg 2xl:max-w-xl filter brightness-110"
                alt="CelestialEdge Logo"
              />
            </div>

            <div className="space-y-8">
              <h1 className="sparkle-text text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight">
                The Future of NFTs
              </h1>
              <p className="text-lg sm:text-xl xl:text-2xl text-gray-400 max-w-lg xl:max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                Enter the most secure NFT marketplace in the cosmos. No scams,
                verified collections, celestial rewards.
              </p>
            </div>

            <div className="relative inline-block">
              <Button
                className="celestial-button relative overflow-hidden bg-[#1a1a24] hover:bg-[#1e1e2a] text-white text-xl xl:text-2xl px-12 py-4 xl:px-16 xl:py-6 rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl"
                onClick={handleJoinUs}
              >
                <span className="relative z-10">Join the Cosmos</span>
              </Button>
            </div>
          </div>

          {/* Right image */}
          <div className="lg:w-1/2 relative animate-slideInRight">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src="/landing/providers.png"
                alt="NFT Providers"
                className="relative rounded-3xl shadow-2xl w-full transform transition-transform duration-700 hover:scale-105 border border-gray-800/50"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Why Join Early Section */}
      <div className="section-spacing relative z-10 container mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-20 xl:py-24">
        <div className="text-center mb-20 xl:mb-28">
          <h2 className="sparkle-text text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Why Join Early?
          </h2>
        </div>

        {/* Centered paragraph */}
        <div className="text-center mb-12 xl:mb-16 animate-fadeIn">
          <p className="text-lg xl:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            The cosmos of NFTs needs trust and security. We're building the
            safest celestial marketplace with verified collections and
            transparent transactions.
          </p>
        </div>

        {/* Image and features flex container */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24 xl:gap-32">
          <div className="w-full lg:w-1/2 animate-slideInLeft">
            <div className="relative group">
              <div className="absolute -inset-6 bg-gradient-to-r from-indigo-900/20 to-blue-900/20 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-500" />
              <img
                src="/landing/nft.svg"
                alt="NFT Collection"
                className="relative rounded-3xl shadow-2xl w-full transform transition-transform duration-700 hover:scale-105 border border-gray-800/50"
              />
            </div>
          </div>

          <div className="w-full lg:w-1/2 space-y-8 animate-slideInRight">
            <div className="grid gap-6">
              {[
                {
                  icon: '🛡️',
                  title: 'Verified Collections',
                  desc: 'Only authentic cosmic NFTs',
                },
                {
                  icon: '💰',
                  title: 'Lower Fees',
                  desc: 'Stellar lifetime discounts',
                },
                {
                  icon: '🎁',
                  title: 'Exclusive Airdrops',
                  desc: 'Free NFTs from the stars',
                },
                {
                  icon: '⚡',
                  title: 'Early Access',
                  desc: 'First to explore new galaxies',
                },
                {
                  icon: '🗳️',
                  title: 'Governance',
                  desc: 'Shape our cosmic marketplace',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="celestial-card flex items-center space-x-6 p-6 xl:p-8 rounded-2xl bg-[#141420] border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:translate-x-2 shadow-2xl"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-3xl xl:text-4xl filter drop-shadow-lg">
                    {item.icon}
                  </span>
                  <div>
                    <h4 className="font-semibold text-white xl:text-lg mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm xl:text-base text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="pt-4 text-center mt-10">
          <div className="relative inline-block">
            <Button
              className="celestial-button relative overflow-hidden bg-[#1a1a24] hover:bg-[#1e1e2a] text-white text-lg xl:text-xl px-10 py-3 xl:px-12 xl:py-4 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl"
              onClick={handleJoinUs}
            >
              <span className="relative z-10">Get Started Now</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Play and Earn Section */}
      <div className="section-spacing relative z-10 py-20 xl:py-24">
        <div className="container mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16">
          <div className="text-center mb-20 xl:mb-28">
            <h2 className="sparkle-text text-3xl sm:text-4xl xl:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
              Play & Earn Celestial NFTs
            </h2>
            <p className="text-lg xl:text-xl text-gray-300 max-w-3xl xl:max-w-4xl mx-auto leading-relaxed">
              Complete cosmic missions, play stellar games, and invite friends
              to unlock exclusive NFTs from across the galaxy
            </p>
          </div>

          <ScrollingNFTs />
        </div>
      </div>

      {/* Feature Cards Section */}
      <div className="section-spacing relative z-10 container mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-20 xl:py-24">
        <div className="grid md:grid-cols-3 gap-8 xl:gap-12">
          {[
            {
              title: 'Best NFTs',
              icon: '💎',
              description: 'Curated collection of premium cosmic assets',
            },
            {
              title: 'Play & Earn',
              icon: '🎮',
              description: 'Gamified experience with stellar rewards',
            },
            {
              title: 'Refer & Earn',
              icon: '🤝',
              description: 'Earn cosmic rewards for bringing friends',
            },
          ].map((card, index) => (
            <div
              key={index}
              className="celestial-card group relative p-10 xl:p-12 rounded-3xl bg-[#141420] border border-gray-800/50 hover:border-gray-700/50 transition-all duration-500 hover:scale-105 animate-slideInUp cursor-pointer shadow-2xl"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="text-center space-y-6 xl:space-y-8">
                <div className="text-5xl xl:text-6xl mb-6 xl:mb-8 group-hover:animate-bounce filter drop-shadow-2xl">
                  {card.icon}
                </div>
                <h3 className="text-xl xl:text-2xl font-bold text-white mb-4">
                  {card.title}
                </h3>
                <p className="text-base xl:text-lg text-gray-400 leading-relaxed">
                  {card.description}
                </p>
              </div>

              {/* Subtle hover glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-blue-900/10 via-purple-900/10 to-indigo-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="section-spacing relative z-10 container mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-16 xl:py-20 text-center">
        <div className="max-w-4xl xl:max-w-6xl mx-auto space-y-8 xl:space-y-12">
          <h2 className="sparkle-text text-3xl xl:text-4xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Our Celestial Mission
          </h2>
          <p className="text-lg xl:text-xl text-gray-300 leading-relaxed">
            Revolutionizing the NFT cosmos with the safest, most interactive
            marketplace experience in the galaxy
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="section-spacing relative z-10 container mx-auto px-4 sm:px-8 xl:px-12 2xl:px-16 py-20 xl:py-24">
        <div className="text-center mb-20 xl:mb-28">
          <h2 className="sparkle-text text-3xl sm:text-4xl xl:text-5xl font-bold mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>
        <div className="max-w-4xl xl:max-w-6xl mx-auto">
          <CollapsibleFAQ />
        </div>
      </div>

      {/* Enhanced CSS animations and styles */}
      <style>{`
        /* Performance-optimized animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translate3d(30px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translate3d(-30px, 0, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }

        @keyframes twinkle {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }

        @keyframes sparkle {
          0%, 100% {
            text-shadow:
              0 0 5px rgba(255, 255, 255, 0.8),
              0 0 10px rgba(255, 255, 255, 0.4),
              0 0 15px rgba(255, 255, 255, 0.2);
          }
          50% {
            text-shadow:
              0 0 10px rgba(255, 255, 255, 1),
              0 0 20px rgba(255, 255, 255, 0.6),
              0 0 30px rgba(255, 255, 255, 0.4),
              0 0 40px rgba(255, 255, 255, 0.2);
          }
        }

        @keyframes celestialBorder {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        /* Animation classes */
        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out 0.2s both;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out 0.2s both;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out both;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .animate-twinkle {
          animation: twinkle infinite ease-in-out;
        }

        /* Sparkle text effect */
        .sparkle-text {
          animation: sparkle 3s ease-in-out infinite;
          position: relative;
        }

        /* Celestial button with animated border */
        .celestial-button::before {
          content: '';
          position: absolute;
          inset: -2px;
          background: linear-gradient(45deg,
            rgba(59, 130, 246, 0.5),
            rgba(147, 51, 234, 0.5),
            rgba(59, 130, 246, 0.5)
          );
          border-radius: inherit;
          animation: celestialBorder 3s linear infinite;
          z-index: -1;
        }

        .celestial-button::after {
          content: '';
          position: absolute;
          inset: 0;
          background: inherit;
          border-radius: inherit;
          z-index: 1;
        }

        /* Celestial card effects */
        .celestial-card {
          backdrop-filter: blur(10px);
          box-shadow:
            0 8px 32px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .celestial-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.02), transparent 70%);
          border-radius: inherit;
          pointer-events: none;
        }

        /* Consistent spacing */
        .section-spacing + .section-spacing {
          margin-top: 4rem;
        }

        @media (min-width: 1280px) {
          .section-spacing + .section-spacing {
            margin-top: 5rem;
          }
        }

        @media (min-width: 1920px) {
          .section-spacing + .section-spacing {
            margin-top: 6rem;
          }
        }

        /* Responsive optimizations */
        @media (max-width: 768px) {
          .animate-slideInRight,
          .animate-slideInLeft {
            animation: fadeInUp 0.8s ease-out both;
          }

          .sparkle-text {
            animation-duration: 4s;
          }

          .celestial-button::before {
            animation-duration: 4s;
          }
        }

        /* Reduce motion for users who prefer it */
        @media (prefers-reduced-motion: reduce) {
          .animate-fadeInUp,
          .animate-slideInRight,
          .animate-slideInLeft,
          .animate-slideInUp,
          .animate-twinkle,
          .sparkle-text,
          .celestial-button::before {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
