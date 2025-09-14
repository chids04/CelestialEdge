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
    navigate({ to: '/signup' })
  }

  return (
    // <div className="min-h-screen text-white bg-[radial-gradient(circle_at_center,_#1A1A1A_0%,_#000000_100%)]">
    <div className="min-h-screen text-white bg-[url('/backgrounds/dark.png')] bg-cover bg-black">
      {/*header*/}
      <div className="container mx-auto p-8 flex flex-col gap-10 md:flex-row md:pt-20 pt-30 items-center">
        <div className="md:w-1/2 flex flex-col text-white text-center md:text-left md:mb-0 md:mr-6">
          <img src="/landing/superrare.svg" />
          <Button
            className="bg-white text-black mt-10  text-2xl p-8 ml-auto mr-auto w-fit "
            onClick={handleJoinUs}
          >
            Join us
          </Button>
        </div>

        {/* right side: Image */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="/landing/providers.png"
            alt="A descriptive alt text for your image"
            className="rounded-lg shadow-2xl w-full h-full"
          />
        </div>
      </div>

      <div className="container mx-auto p-8 flex flex-col h-fit">
        <h1 className="text-8xl text-white lg:text-5xl font-bold mb-4 ">
          Why join early
        </h1>
        <div className="flex flex-col md:flex-row mt-10 gap-10">
          <div className="md:w-1/2">
            <img
              src="/landing/nft.svg"
              alt="A descriptive alt text for your image"
              className="rounded-lg shadow-2xl object-contain"
            />
          </div>
          <div className="md:w-1/2 flex flex-col font-bold text-2xl gap-5 text-white md:text-left mb-8 md:mb-0 md:mr-6">
            <p>
              The NFT space is exciting - but also full of risks: scams, fake
              collections, and rug pulls that harm both creators and collectors.
            </p>
            <p>
              We're here to change that. Our mission is to build a secure,
              scam-free NFT marketplace where every listing is verified and
              every transaction is transparent. By joining early, you'll enjoy:
            </p>

            <ul className="list-disc ml-4">
              <li>Verified Collections - Only authentic NFTs, no scams </li>
              <li>Lower Fees - Lifetime discounts for early adopter</li>
              <li>Exclusive Airdrops - Free NFTs before launch</li>
              <li>Early Access - Be the first to test our features</li>
              <li>Governance Perks - Help shape our marketplace</li>
            </ul>
            <Button
              className="bg-white text-black text-2xl p-8 rounded-lg w-fit"
              onClick={handleJoinUs}
            >
              Join Now
            </Button>
          </div>
        </div>
      </div>

      <h1 className="text-center font-bold text-4xl mt-20">
        Play and Earn Free NFTs
      </h1>

      <ScrollingNFTs />

      <div className="container mx-auto mt-10">
        <h1 className="text-2xl font-bold text-center">
          Turn your time into rewards! Complete missions, play simple games, and
          invite friends to unlock exclusive NFTs before our marketplace launch
        </h1>
      </div>

      <div className="container mx-auto flex flex-col items-center mt-20 md:justify-center md:flex-row gap-4 p-4">
        <div className="flex-1 bg-zinc-500 rounded-lg p-4">
          <h1>Best NFTs</h1>
        </div>
        <div className="flex-1 bg-zinc-500 rounded-lg p-4">
          <h1>Play and Earn</h1>
        </div>
        <div className="flex-1 bg-zinc-500 rounded-lg p-4">
          <p>Refer and Earn</p>
        </div>
      </div>

      <div className="container mx-auto text-center mt-15">
        <h1 className="font-bold text-2xl text-center">Our Mission</h1>
        <p>
          Our mission is to revolutionise the NFTs and blockchain space so that
          people can get the safest, most interactive experience possible
        </p>
      </div>

      <div className="container mx-auto mt-20 text-center">
        <h1 className="text-4xl font-bold mb-10">FAQ</h1>
        <CollapsibleFAQ />
      </div>
    </div>
  )
}
