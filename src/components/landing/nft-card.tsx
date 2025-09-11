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
        'w-[350px] overflow-hidden border-none p-0 bg-zinc-700',
        className,
      )}
    >
      <div className="m-2">
        <img
          src={imageSrc}
          alt={title}
          className="object-cover rounded-lg w-full h-full"
        />
      </div>
      <CardContent className="flex items-center justify-between p-3">
        <h3 className=" text-white text-xl font-semibold">{title}</h3>
        <p className="text-sm font-bold text-yellow-500">{price}</p>
      </CardContent>
      <CardFooter className="p-3 pt-0 pb-2">
        <p className="text-xs text-gray-500">{creator}</p>
      </CardFooter>
    </Card>
  )
}
