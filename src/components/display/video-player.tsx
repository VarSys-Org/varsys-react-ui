"use client"

import * as React from "react"
import {
  Gauge,
  Maximize,
  Minimize,
  Pause,
  Play,
  RotateCcw,
  Volume2,
  VolumeX,
} from "lucide-react"
import { cn } from "@/lib/cn"

export interface VideoPlayerProps
  extends React.HTMLAttributes<HTMLDivElement> {
  src: string
  poster?: string
  autoPlay?: boolean
  loop?: boolean
  muted?: boolean
  controls?: boolean
  showTime?: boolean
  showVolume?: boolean
  showSpeed?: boolean
  showFullscreen?: boolean
  onPlay?: () => void
  onPause?: () => void
  onEnded?: () => void
  className?: string
  videoClassName?: string
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds) || seconds < 0) return "0:00"
  const m = Math.floor(seconds / 60)
  const s = Math.floor(seconds % 60)
  return `${m}:${s.toString().padStart(2, "0")}`
}

export function VideoPlayer({
  src,
  poster,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  showTime = true,
  showVolume = true,
  showSpeed = true,
  showFullscreen = true,
  onPlay,
  onPause,
  onEnded,
  className,
  videoClassName,
  ...props
}: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)

  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [duration, setDuration] = React.useState(0)
  const [volume, setVolume] = React.useState(muted ? 0 : 1)
  const [isMuted, setIsMuted] = React.useState(muted)
  const [isFullscreen, setIsFullscreen] = React.useState(false)
  const [playbackRate, setPlaybackRate] = React.useState(1)

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) {
      void video.play()
    } else {
      video.pause()
    }
  }

  const handleSeek = (value: number) => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = value
    setCurrentTime(value)
  }

  const handleVolume = (value: number) => {
    const video = videoRef.current
    if (!video) return
    video.volume = value
    video.muted = value === 0
    setVolume(value)
    setIsMuted(value === 0)
  }

  const toggleMute = () => {
    const video = videoRef.current
    if (!video) return
    const next = !video.muted
    video.muted = next
    setIsMuted(next)
    if (next) setVolume(0)
  }

  const toggleFullscreen = () => {
    const el = containerRef.current
    if (!el) return
    if (document.fullscreenElement) {
      void document.exitFullscreen()
    } else {
      void el.requestFullscreen()
    }
  }

  const cycleSpeed = () => {
    const video = videoRef.current
    if (!video) return
    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2]
    const next = speeds[(speeds.indexOf(playbackRate) + 1) % speeds.length]
    video.playbackRate = next
    setPlaybackRate(next)
  }

  const restart = () => {
    const video = videoRef.current
    if (!video) return
    video.currentTime = 0
    void video.play()
  }

  React.useEffect(() => {
    const onFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement))
    document.addEventListener("fullscreenchange", onFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", onFullscreenChange)
  }, [])

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0

  return (
    <div
      ref={containerRef}
      className={cn(
        "group relative overflow-hidden rounded-lg bg-black ring-1 ring-border",
        className,
      )}
      {...props}
    >
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload="metadata"
        playsInline
        onClick={togglePlay}
        onPlay={() => {
          setIsPlaying(true)
          onPlay?.()
        }}
        onPause={() => {
          setIsPlaying(false)
          onPause?.()
        }}
        onEnded={() => {
          setIsPlaying(false)
          onEnded?.()
        }}
        onTimeUpdate={(event) => setCurrentTime(event.currentTarget.currentTime)}
        onLoadedMetadata={(event) => setDuration(event.currentTarget.duration)}
        onVolumeChange={(event) => {
          setVolume(event.currentTarget.volume)
          setIsMuted(event.currentTarget.muted)
        }}
        className={cn("aspect-video w-full object-contain", videoClassName)}
      />

      {!isPlaying && (
        <button
          type="button"
          onClick={togglePlay}
          aria-label="Play video"
          className="absolute inset-0 z-10 flex items-center justify-center bg-black/40 transition-opacity hover:bg-black/30 focus-visible:outline-none"
        >
          <span className="flex size-16 items-center justify-center rounded-full bg-white/90 text-black shadow-lg transition-transform group-hover:scale-105">
            <Play className="ml-1 size-7 fill-current" />
          </span>
        </button>
      )}

      {controls ? (
        <div className="absolute inset-x-0 bottom-0 z-20 flex flex-col gap-1 bg-gradient-to-t from-black/90 to-transparent px-3 pt-8 pb-2 opacity-0 transition-opacity group-hover:opacity-100 focus-within:opacity-100">
          <input
            type="range"
            aria-label="Seek"
            min={0}
            max={duration || 0}
            step={0.1}
            value={currentTime}
            onChange={(event) => handleSeek(Number(event.target.value))}
            className="h-1 w-full cursor-pointer appearance-none rounded-full bg-white/30 accent-white"
          />
          <div className="flex items-center gap-2 text-white">
            <button
              type="button"
              onClick={togglePlay}
              aria-label={isPlaying ? "Pause" : "Play"}
              className="rounded p-1 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              {isPlaying ? <Pause className="size-5 fill-current" /> : <Play className="size-5 fill-current" />}
            </button>
            <button
              type="button"
              onClick={restart}
              aria-label="Restart video"
              className="rounded p-1 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
            >
              <RotateCcw className="size-4" />
            </button>

            {showVolume ? (
              <div className="group/vol flex items-center gap-1">
                <button
                  type="button"
                  onClick={toggleMute}
                  aria-label={isMuted ? "Unmute" : "Mute"}
                  className="rounded p-1 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  {isMuted || volume === 0 ? (
                    <VolumeX className="size-5" />
                  ) : (
                    <Volume2 className="size-5" />
                  )}
                </button>
                <input
                  type="range"
                  aria-label="Volume"
                  min={0}
                  max={1}
                  step={0.05}
                  value={volume}
                  onChange={(event) => handleVolume(Number(event.target.value))}
                  className="h-1 w-0 cursor-pointer appearance-none rounded-full bg-white/30 accent-white transition-all group-hover/vol:w-16"
                />
              </div>
            ) : null}

            {showTime ? (
              <span className="ml-auto text-xs font-medium tabular-nums">
                {formatTime(currentTime)} / {formatTime(duration)}
              </span>
            ) : null}

            {showSpeed ? (
              <button
                type="button"
                onClick={cycleSpeed}
                aria-label={`Playback speed ${playbackRate}x`}
                title={`Speed: ${playbackRate}x`}
                className="inline-flex items-center gap-1 rounded px-1.5 py-0.5 text-xs font-medium transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                <Gauge className="size-4" />
                {playbackRate}x
              </button>
            ) : null}

            {showFullscreen ? (
              <button
                type="button"
                onClick={toggleFullscreen}
                aria-label={isFullscreen ? "Exit fullscreen" : "Enter fullscreen"}
                className="rounded p-1 transition-colors hover:bg-white/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
              >
                {isFullscreen ? <Minimize className="size-5" /> : <Maximize className="size-5" />}
              </button>
            ) : null}
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default VideoPlayer