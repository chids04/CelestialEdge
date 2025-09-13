import { useState } from 'react'
import { ChevronsDown } from 'lucide-react'

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'

export function CollapsibleFAQ() {
  const [isOpen1, setIsOpen1] = useState(false)
  const [isOpen2, setIsOpen2] = useState(false)

  return (
    <div className=" mx-auto space-y-2 p-4 text-white">
      <Collapsible
        open={isOpen1}
        onOpenChange={setIsOpen1}
        className="space-y-2 p-4 rounded-lg border bg-zinc-700/25  bg-opacity-50 backdrop-filter backdrop-blur-lg"
      >
        <CollapsibleTrigger asChild>
          <div className="flex flex-row justify-center relative cursor-pointer">
            <h4 className="text-lg font-semibold">1. What is this platform?</h4>
            <ChevronsDown
              className={`h-6 w-6 transition-transform duration-300 absolute right-0 ${
                isOpen1 ? 'rotate-180' : ''
              }`}
            />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="text-gray-300 pl-4">
            This platform is an innovative marketplace for digital assets,
            allowing creators to mint and sell their unique non-fungible tokens
            (NFTs).
          </div>
        </CollapsibleContent>
      </Collapsible>
      <Collapsible
        open={isOpen2}
        onOpenChange={setIsOpen2}
        className="space-y-2 p-4 rounded-lg border  bg-zinc-700/25 bg-opacity-50 backdrop-filter backdrop-blur-lg"
      >
        <CollapsibleTrigger asChild>
          <div className="flex flex-row justify-center relative cursor-pointer">
            <h4 className="text-lg font-semibold ">
              2. How are we different from other NFT platforms?
            </h4>
            <ChevronsDown
              className={`h-6 w-6 transition-transform duration-300 absolute right-0 ${
                isOpen2 ? 'rotate-180' : ''
              }`}
            />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="text-gray-300 pl-4">
            Unlike other platforms, we focus on a curated selection of artists
            and offer lower transaction fees, a robust community, and enhanced
            security features.
          </div>
        </CollapsibleContent>
      </Collapsible>
    </div>
  )
}
