"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/cn"

export interface ParallaxScroll2Props extends React.HTMLAttributes<HTMLDivElement> {
  images: string[]
  /**
   * How far the side columns travel in pixels on the Y axis.
   * @default 200
   */
  translateY?: number
  /**
   * How far the side columns travel in pixels on the X axis.
   * @default 200
   */
  translateX?: number
  /**
   * Rotation applied to the side columns (degrees).
   * @default 20
   */
  rotate?: number
  /**
   * Container height class.
   * @default "h-[40rem]"
   */
  containerClassName?: string
}

export function ParallaxScroll2({
  images,
  translateY = 200,
  translateX = 200,
  rotate = 20,
  containerClassName,
  className,
}: ParallaxScroll2Props) {
  const gridRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    container: gridRef,
    offset: ["start start", "end start"],
  })

  const translateYFirst = useTransform(scrollYProgress, [0, 1], [0, -translateY])
  const translateXFirst = useTransform(scrollYProgress, [0, 1], [0, -translateX])
  const rotateXFirst = useTransform(scrollYProgress, [0, 1], [0, -rotate])

  const translateYThird = useTransform(scrollYProgress, [0, 1], [0, -translateY])
  const translateXThird = useTransform(scrollYProgress, [0, 1], [0, translateX])
  const rotateXThird = useTransform(scrollYProgress, [0, 1], [0, rotate])

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <div
      className={cn(
        "h-[40rem] items-start overflow-y-auto w-full",
        containerClassName
      )}
      ref={gridRef}
    >
      <div
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10",
          className
        )}
      >
        <div className="grid gap-10">
          {firstPart.map((el, idx) => (
            <motion.div
              style={{ y: translateYFirst, x: translateXFirst, rotateZ: rotateXFirst }}
              key={"grid-1" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {secondPart.map((el, idx) => (
            <motion.div key={"grid-2" + idx}>
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
        <div className="grid gap-10">
          {thirdPart.map((el, idx) => (
            <motion.div
              style={{ y: translateYThird, x: translateXThird, rotateZ: rotateXThird }}
              key={"grid-3" + idx}
            >
              <img
                src={el}
                className="h-80 w-full object-cover object-left-top rounded-lg gap-10 !m-0 !p-0"
                height="400"
                width="400"
                alt="thumbnail"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ParallaxScroll2
