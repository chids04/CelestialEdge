import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface NFTCardProps {
  imageSrc: string
  title: string
  price: string
  creator: string
  className?: string
}

export function NFTCard({
  imageSrc,
  title,
  price,
  creator,
  className,
}: NFTCardProps) {
  return (
    <Card
      className={cn(
        'group relative w-full max-w-sm overflow-visible border-0 bg-[#141420] backdrop-blur-sm cursor-pointer transition-all duration-500 hover:scale-[1.02] celestial-nft-card',
        className,
      )}
    >
      {/* Dark celestial border */}
      <div className="absolute inset-0 rounded-2xl border border-gray-800/40 group-hover:border-gray-700/60 transition-all duration-500" />

      {/* Subtle inner glow */}
      <div className="absolute inset-[1px] rounded-2xl bg-gradient-to-br from-gray-900/50 via-[#141420] to-gray-900/50 overflow-hidden" />

      {/* Content container */}
      <div className="relative z-10 p-5 overflow-visible">
        {/* Image container */}
        <div className="relative mb-5 overflow-hidden rounded-xl group-hover:shadow-2xl transition-all duration-500 z-10">
          {/* Dark overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />

          <img
            src={imageSrc}
            alt={title}
            className="w-full h-48 sm:h-52 object-cover transition-transform duration-700 group-hover:scale-110 border border-gray-800/30 rounded-xl"
          />

          {/* Subtle celestial overlay */}
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/5 via-transparent to-purple-950/5 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl" />
        </div>

        {/* Content */}
        <CardContent className="p-0 space-y-4">
          {/* Title and Price Row */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-white text-lg font-semibold truncate group-hover:text-gray-100 transition-colors duration-300 flex-1">
              {title}
            </h3>
            <div className="flex flex-col items-end flex-shrink-0">
              <span className="text-xs text-gray-500 font-medium mb-1">
                Price
              </span>
              <span className="text-gray-300 text-sm font-bold bg-gradient-to-r from-gray-300 to-gray-400 bg-clip-text">
                {price}
              </span>
            </div>
          </div>

          {/* Creator */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-gradient-to-r from-gray-600 to-gray-500 opacity-60" />
            <span className="text-gray-500 text-sm hover:text-gray-400 transition-colors duration-200">
              {creator}
            </span>
          </div>
        </CardContent>

        {/* Footer with stats */}
        <CardFooter className="p-0 pt-4">
          <div className="w-full flex items-center justify-between text-xs text-gray-600">
            <div className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-green-500/60"></span>
              <span>Available</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="opacity-60">♥</span>
              <span>{Math.floor(Math.random() * 100) + 50}</span>
            </div>
          </div>
        </CardFooter>
      </div>

      {/* Floating particles effect on hover - minimal for performance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
        <div
          className="absolute top-4 left-4 w-0.5 h-0.5 bg-blue-400/40 rounded-full animate-pulse"
          style={{ animationDelay: '0s' }}
        />
        <div
          className="absolute top-8 right-6 w-0.5 h-0.5 bg-purple-400/30 rounded-full animate-pulse"
          style={{ animationDelay: '1s' }}
        />
        <div
          className="absolute bottom-12 left-8 w-0.5 h-0.5 bg-gray-400/20 rounded-full animate-pulse"
          style={{ animationDelay: '2s' }}
        />
      </div>

      {/* Celestial shadow and glow */}
      <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-gray-900/10 via-gray-800/10 to-gray-900/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-xl -z-10" />

      {/* Enhanced drop shadow for background integration */}
      <style>{`
        .celestial-nft-card {
          box-shadow:
            0 4px 20px rgba(0, 0, 0, 0.4),
            0 8px 40px rgba(0, 0, 0, 0.2),
            inset 0 1px 0 rgba(255, 255, 255, 0.02);
          backdrop-filter: blur(10px);
          transform-origin: center center;
        }

        .celestial-nft-card:hover {
          box-shadow:
            0 8px 30px rgba(0, 0, 0, 0.5),
            0 16px 60px rgba(0, 0, 0, 0.3),
            0 0 40px rgba(59, 130, 246, 0.03),
            inset 0 1px 0 rgba(255, 255, 255, 0.05);
          z-index: 10;
        }

        @media (prefers-reduced-motion: reduce) {
          .celestial-nft-card {
            transition: none;
          }

          .celestial-nft-card * {
            animation: none;
            transition: none;
          }
        }
      `}</style>
    </Card>
  )
}
