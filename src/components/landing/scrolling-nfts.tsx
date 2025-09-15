'use client'

import React, { useCallback, useEffect } from 'react'
import { EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'

import AutoScroll from 'embla-carousel-auto-scroll'
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
]

export function ScrollingNFTs() {
  // Carousel options
  const options: EmblaOptionsType = {
    align: 'start',
    loop: true,
    skipSnaps: false,
    dragFree: true,
  }

  // Initialize Embla with AutoScroll plugin
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({
      playOnInit: true,
      stopOnInteraction: false,
      stopOnMouseEnter: false,
      speed: 1,
    }),
  ])

  // Handle mouse enter - stop auto scroll
  const handleMouseEnter = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return
    autoScroll.stop()
  }, [emblaApi])

  // Handle mouse leave - start auto scroll
  const handleMouseLeave = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return
    autoScroll.play()
  }, [emblaApi])

  // Initialize auto scroll when API is ready
  useEffect(() => {
    if (!emblaApi) return

    const autoScroll = emblaApi.plugins()?.autoScroll
    if (!autoScroll) return

    // Start auto scroll
    autoScroll.play()
  }, [emblaApi])

  // Duplicate the NFTs array multiple times for smooth infinite scrolling
  const extendedNFTs = [
    ...featuredNFTs,
    ...featuredNFTs,
    ...featuredNFTs,
    ...featuredNFTs,
  ]

  return (
    <div className="relative w-full py-12">
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0a0a0f] via-[#0a0a0f]/80 to-transparent z-10 pointer-events-none" />

      {/* Embla Carousel */}
      <div
        className="embla overflow-hidden w-full"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container flex -ml-4 md:-ml-6">
            {extendedNFTs.map((nft, index) => (
              <div
                key={`nft-${index}`}
                className="embla__slide flex-[0_0_280px] sm:flex-[0_0_320px] md:flex-[0_0_340px] lg:flex-[0_0_360px] min-w-0 pl-4 md:pl-6"
              >
                <div className="celestial-nft-item group relative h-full">
                  {/* Subtle glow effect on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-blue-900/0 via-purple-900/0 to-indigo-900/0 rounded-3xl opacity-0 group-hover:opacity-20 group-hover:from-blue-900/20 group-hover:via-purple-900/20 group-hover:to-indigo-900/20 transition-all duration-500 blur-xl" />

                  <div className="transform transition-all duration-300 group-hover:scale-105 relative z-10">
                    <NFTCard {...nft} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .celestial-nft-item {
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* Embla carousel base styles */
        .embla {
          overflow: hidden;
        }

        .embla__viewport {
          overflow: hidden;
        }

        .embla__container {
          backface-visibility: hidden;
          display: flex;
          touch-action: pan-y;
        }

        .embla__slide {
          transform: translate3d(0, 0, 0);
        }

        /* Performance optimizations */
        @media (prefers-reduced-motion: reduce) {
          .celestial-nft-item {
            transform: none;
            transition: none;
          }
        }

        /* Responsive adjustments for better spacing and sizing */
        @media (max-width: 640px) {
          .embla__slide {
            flex: 0 0 280px;
          }
          .embla__container {
            margin-left: -1rem;
          }
          .embla__slide {
            padding-left: 1rem;
          }
        }

        @media (min-width: 641px) and (max-width: 768px) {
          .embla__slide {
            flex: 0 0 320px;
          }
          .embla__container {
            margin-left: -1.5rem;
          }
          .embla__slide {
            padding-left: 1.5rem;
          }
        }

        @media (min-width: 769px) {
          .embla__slide {
            flex: 0 0 360px;
          }
          .embla__container {
            margin-left: -2rem;
          }
          .embla__slide {
            padding-left: 2rem;
          }
        }

        /* Smooth hardware acceleration */
        .embla__container,
        .embla__slide,
        .celestial-nft-item {
          -webkit-transform: translateZ(0);
          -moz-transform: translateZ(0);
          -ms-transform: translateZ(0);
          transform: translateZ(0);
        }
      `}</style>
    </div>
  )
}
