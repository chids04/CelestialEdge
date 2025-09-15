import { useState } from 'react'
import {
  ChevronDown,
  Shield,
  Coins,
  Users,
  Zap,
  Gift,
  HelpCircle,
} from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

interface FAQItem {
  id: string
  question: string
  answer: string
  icon: React.ReactNode
  gradient: string
}

const faqData: FAQItem[] = [
  {
    id: 'platform',
    question: 'What makes CelestialEdge different?',
    answer:
      'CelestialEdge is a next-generation NFT marketplace focused on security and authenticity. We verify every collection, eliminate scams, and provide a seamless trading experience with lower fees and exclusive rewards for our community.',
    icon: <Shield className="w-5 h-5" />,
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'security',
    question: 'How do you prevent scams and fake NFTs?',
    answer:
      'We implement a comprehensive verification system that includes artist identity verification, collection authenticity checks, and smart contract auditing. Every NFT on our platform goes through rigorous validation before listing.',
    icon: <Shield className="w-5 h-5" />,
    gradient: 'from-green-500 to-emerald-500',
  },
  {
    id: 'fees',
    question: 'What are your marketplace fees?',
    answer:
      'Early adopters enjoy significantly reduced fees - just 1.5% compared to industry standard 2.5%. Plus, our loyalty program rewards active users with fee discounts and exclusive perks.',
    icon: <Coins className="w-5 h-5" />,
    gradient: 'from-yellow-500 to-orange-500',
  },
  {
    id: 'earning',
    question: 'How can I earn NFTs before launch?',
    answer:
      'Join our Play & Earn program! Complete daily missions, participate in community events, refer friends, and engage with our platform to unlock exclusive NFT airdrops and early access rewards.',
    icon: <Gift className="w-5 h-5" />,
    gradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'community',
    question: 'What benefits do early users get?',
    answer:
      'Early users receive lifetime fee discounts, exclusive NFT airdrops, governance tokens, priority access to new features, and the ability to shape our marketplace development through community voting.',
    icon: <Users className="w-5 h-5" />,
    gradient: 'from-indigo-500 to-purple-500',
  },
  {
    id: 'technology',
    question: 'Which blockchains do you support?',
    answer:
      'We support multiple blockchains including Ethereum, Polygon, and Solana, with plans to expand to more networks. Our cross-chain compatibility ensures you can trade NFTs from various ecosystems seamlessly.',
    icon: <Zap className="w-5 h-5" />,
    gradient: 'from-teal-500 to-blue-500',
  },
]

export function CollapsibleFAQ() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (id: string) => {
    setOpenItems((prev) => {
      const newSet = new Set(prev)
      if (newSet.has(id)) {
        newSet.delete(id)
      } else {
        newSet.add(id)
      }
      return newSet
    })
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6 p-4">
      {faqData.map((item, index) => {
        const isOpen = openItems.has(item.id)

        return (
          <Collapsible
            key={item.id}
            open={isOpen}
            onOpenChange={() => toggleItem(item.id)}
            className="group"
          >
            <div
              className={`celestial-faq-card relative overflow-hidden rounded-2xl bg-[#141420] backdrop-blur-sm border border-gray-800/40 hover:border-gray-700/60 transition-all duration-500 animate-slideInUp`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Subtle celestial border gradient */}
              <div
                className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
              />

              <CollapsibleTrigger asChild>
                <div className="relative z-10 flex items-center justify-between p-6 cursor-pointer group-hover:bg-gray-900/20 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    {/* Animated icon */}
                    <div
                      className={`flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-r ${item.gradient} text-white shadow-xl group-hover:scale-110 transition-transform duration-300 opacity-80 group-hover:opacity-100`}
                    >
                      {item.icon}
                    </div>

                    <h3 className="text-lg font-semibold text-white group-hover:text-gray-100 transition-all duration-300">
                      {item.question}
                    </h3>
                  </div>

                  {/* Animated chevron */}
                  <ChevronDown
                    className={`w-6 h-6 text-gray-500 group-hover:text-gray-300 transition-all duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </div>
              </CollapsibleTrigger>

              <CollapsibleContent className="relative z-10">
                <div className="px-6 pb-6 pt-0">
                  <div className="ml-14 text-gray-400 leading-relaxed">
                    {item.answer}
                  </div>
                </div>
              </CollapsibleContent>

              {/* Celestial shadow effect */}
              <div
                className={`absolute -inset-2 rounded-2xl bg-gradient-to-r ${item.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 blur-xl -z-10`}
              />
            </div>
          </Collapsible>
        )
      })}

      {/* Additional help section */}
      <div className="text-center pt-12 animate-fadeIn">
        <div className="celestial-help-card inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#141420] backdrop-blur-sm border border-gray-800/40">
          <HelpCircle className="w-5 h-5 text-gray-400" />
          <span className="text-gray-400">
            Have more questions?
            <a
              href="mailto:support@celestialedge.com"
              className="ml-1 text-gray-300 hover:text-white transition-colors duration-200 underline decoration-dotted"
            >
              Contact our support team
            </a>
          </span>
        </div>
      </div>

      {/* Enhanced celestial styles */}
      <style>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-slideInUp {
          animation: slideInUp 0.6s ease-out both;
          will-change: transform, opacity;
          backface-visibility: hidden;
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out 1s both;
        }

        .celestial-faq-card {
          box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.4),
            0 8px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        .celestial-faq-card:hover {
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.5),
            0 16px 60px rgba(0, 0, 0, 0.3),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
        }

        .celestial-help-card {
          box-shadow:
            0 4px 15px rgba(0, 0, 0, 0.3),
            0 8px 30px rgba(0, 0, 0, 0.15),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-slideInUp,
          .animate-fadeIn {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}
