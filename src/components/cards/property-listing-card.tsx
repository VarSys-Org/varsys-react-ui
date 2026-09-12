"use client"

import * as React from "react"
import { BedDouble, Building2, Car } from "lucide-react"
import { cn } from "@/lib/cn"

export interface PropertyAmenity {
  label: string
  value: string
}

export interface PropertyListingCardProps extends React.HTMLAttributes<HTMLAnchorElement> {
  image?: string
  alt?: string
  price?: string
  address?: string
  amenities?: PropertyAmenity[]
  href?: string
}

const DEFAULT_AMENITIES: PropertyAmenity[] = [
  { label: "Parking", value: "2 spaces" },
  { label: "Bathroom", value: "2 rooms" },
  { label: "Bedroom", value: "4 rooms" },
]

export function PropertyListingCard({
  image = "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80&w=1160",
  alt = "",
  price = "$240,000",
  address = "123 Wallaby Avenue, Park Road",
  amenities = DEFAULT_AMENITIES,
  href = "#",
  className,
}: PropertyListingCardProps) {
  return (
    <a href={href} className={cn("block rounded-lg p-4 shadow-xs shadow-primary/20", className)}>
      <img
        alt={alt}
        src={image}
        className="h-56 w-full rounded-md object-cover"
      />

      <div className="mt-2">
        <dl>
          <div>
            <dt className="sr-only">Price</dt>
            <dd className="text-sm text-muted-foreground">{price}</dd>
          </div>

          <div>
            <dt className="sr-only">Address</dt>
            <dd className="flex items-center gap-1.5 font-medium text-foreground">
              <Building2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
              {address}
            </dd>
          </div>
        </dl>

        <div className="mt-6 flex items-center gap-8 text-xs">
          {amenities.map((amenity) => (
            <div
              key={amenity.label}
              className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2"
            >
              <AmenityIcon label={amenity.label} />
              <div className="mt-1.5 sm:mt-0">
                <p className="text-muted-foreground">{amenity.label}</p>
                <p className="font-medium text-foreground">{amenity.value}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </a>
  )
}

function AmenityIcon({ label }: { label: string }) {
  const lower = label.toLowerCase()
  if (lower.includes("bed") || lower.includes("room")) {
    return <BedDouble aria-hidden="true" className="size-4 shrink-0 text-primary" />
  }
  if (lower.includes("car") || lower.includes("park")) {
    return <Car aria-hidden="true" className="size-4 shrink-0 text-primary" />
  }
  return <Building2 aria-hidden="true" className="size-4 shrink-0 text-primary" />
}

PropertyListingCard.displayName = "PropertyListingCard"

export default PropertyListingCard