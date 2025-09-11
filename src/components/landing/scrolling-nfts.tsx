import { NFTCard } from './nft-card'

const featuredNFTs = [
  {
    imageSrc: '/nfts/1.png',
    title: 'Metamorph',
    price: '1.0 ETH',
    creator: '@johndoe',
  },
  {
    imageSrc: '/nfts/2.png',
    title: 'Moonshine',
    price: '0.5 ETH',
    creator: '@rere2880',
  },
  {
    imageSrc: '/nfts/3.png',
    title: 'Inception',
    price: '0.8 ETH',
    creator: '@loremisal',
  },
  {
    imageSrc: '/nfts/4.png',
    title: 'Petition',
    price: '1.3 ETH',
    creator: '@downhill',
  },

  {
    imageSrc: '/nfts/2.png',
    title: 'Moonshine',
    price: '0.5 ETH',
    creator: '@rere2880',
  },

  {
    imageSrc: '/nfts/3.png',
    title: 'Inception',
    price: '0.8 ETH',
    creator: '@loremisal',
  },

  {
    imageSrc: '/nfts/1.png',
    title: 'Metamorph',
    price: '1.0 ETH',
    creator: '@johndoe',
  },
]

export function ScrollingNFTs() {
  const cardWidth = 350 // width of NFTCard (w-[350px])
  const marginX = 16 // Total margin from mx-2 (8px + 8px)
  const totalCardWidth = cardWidth + marginX // 366px per card
  const totalWidth = featuredNFTs.length * totalCardWidth // Width of all cards

  // Calculate how much we can scroll (total width minus viewport width)
  const maxScroll = Math.max(0, totalWidth - window?.innerWidth + 64) // 64px for padding

  return (
    <div className="p-4 sm:p-8">
      {/* container with hidden overflow */}
      <div className="overflow-hidden relative">
        {/* scrolling wrapper */}
        <div
          className="flex animate-scroll-bidirectional"
          style={{ width: `${totalWidth}px` }}
        >
          {/* NFTs */}
          {featuredNFTs.map((nft, index) => (
            <div
              key={index}
              className="flex-shrink-0 mx-2"
              style={{ width: `${cardWidth}px` }}
            >
              <NFTCard {...nft} />
            </div>
          ))}
        </div>
      </div>
      {/* Add the CSS animation styles */}
      <style>{`
        @keyframes scroll-bidirectional {
          0% {
            transform: translateX(0);
          }
          45% {
            transform: translateX(calc(-${totalWidth}px + 100vw - 4rem));
          }
          50% {
            transform: translateX(calc(-${totalWidth}px + 100vw - 4rem));
          }
          95% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-bidirectional {
          animation: scroll-bidirectional 20s ease-in-out infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .animate-scroll-bidirectional {
            animation-duration: 15s;
          }
        }
      `}</style>
    </div>
  )
}
