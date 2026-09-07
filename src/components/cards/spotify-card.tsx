import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

export interface SpotifyTrack {
  title: string;
  artist: string;
  image: string;
  link: string;
  audio?: string;
}

export interface SpotifyCardProps {
  track: SpotifyTrack;
  className?: string;
}

function SpotifyIcon({ size = 18, className }: { size?: number; className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

export const SpotifyCard = ({ track, className }: SpotifyCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const handlePlayPause = () => {
    if (!track.audio) return;

    if (!audioRef.current) {
      audioRef.current = new Audio(track.audio);
      audioRef.current.volume = 0.3;
      audioRef.current.addEventListener("ended", () => setIsPlaying(false));
    }

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div
      className={cn(
        "relative flex max-h-[100px] h-full w-full items-stretch justify-center overflow-hidden rounded-2xl border border-border p-3",
        className
      )}
    >
      <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 block aspect-square w-[120%] -translate-x-1/2 -translate-y-1/2">
        <div className="pointer-events-none flex h-full select-none opacity-100">
          <img
            src={track.image}
            alt=""
            className="absolute brightness-150 left-0 top-0 block h-full w-full blur-[50px]"
          />
          <div className="absolute left-0 top-0 h-full w-full bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_0,_rgba(0,_0,_0,_.8))]" />
        </div>
      </div>
      <button
        onClick={track.audio ? handlePlayPause : undefined}
        className={cn(
          "group relative z-[1] w-full max-w-[75px] self-center",
          track.audio && "cursor-pointer"
        )}
      >
        <img
          src={track.image}
          alt={track.title}
          className={cn(
            "pointer-events-none relative z-[1] min-h-[75px] min-w-[75px] w-full select-none rounded-lg object-cover shadow-md transition-transform duration-300 ease-out",
            track.audio && "group-hover:-translate-x-0.5",
            isPlaying && "-translate-x-0.5"
          )}
        />
        {track.audio && (
          <div
            className={cn(
              "absolute left-1/2 top-1/2 -z-[1] size-[80%] -translate-y-1/2 transition-all duration-300",
              isPlaying ? "translate-x-[-10%]" : "translate-x-[-50%] group-hover:translate-x-[-10%]"
            )}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 110 110"
              className="size-full animate-spin"
              style={{
                animationDuration: "3s",
                animationPlayState: isPlaying ? "running" : "paused",
              }}
            >
              <circle cx="55" cy="55" r="55" fill="#000" />
              <mask id="spotify-vinyl-mask" width="110" height="110" x="0" y="0" maskUnits="userSpaceOnUse" style={{ maskType: "alpha" }}>
                <circle cx="55" cy="55" r="55" fill="#000" />
              </mask>
              <g mask="url(#spotify-vinyl-mask)">
                <g filter="url(#spotify-vinyl-f0)">
                  <circle cx="55" cy="55" r="51.5" stroke="#fff" strokeOpacity="0.21" />
                </g>
                <g filter="url(#spotify-vinyl-f1)">
                  <circle cx="55" cy="55" r="47.5" stroke="#fff" strokeOpacity="0.21" />
                </g>
                <g filter="url(#spotify-vinyl-f2)">
                  <circle cx="55" cy="55" r="45.5" stroke="#fff" strokeOpacity="0.21" />
                </g>
                <g filter="url(#spotify-vinyl-f3)">
                  <circle cx="55" cy="55" r="43.5" stroke="#fff" strokeOpacity="0.21" />
                </g>
                <g filter="url(#spotify-vinyl-f4)">
                  <circle cx="55" cy="55" r="37.5" stroke="#fff" strokeOpacity="0.21" />
                </g>
                <g filter="url(#spotify-vinyl-f5)">
                  <circle cx="55" cy="55" r="34.5" stroke="#fff" strokeOpacity="0.21" />
                </g>
                <g filter="url(#spotify-vinyl-f6)" opacity="0.4">
                  <path fill="#fff" d="M-14 38l68 19.579L-14 74V38z" />
                </g>
                <g filter="url(#spotify-vinyl-f7)" opacity="0.4">
                  <path fill="#fff" d="M123 38L55 57.579 123 74V38z" />
                </g>
                <g filter="url(#spotify-vinyl-f8)" opacity="0.4">
                  <path fill="#fff" d="M36.5 124.5l19.579-68 16.421 68h-36z" />
                </g>
                <g filter="url(#spotify-vinyl-f9)" opacity="0.4">
                  <path fill="#fff" d="M36.5-12.5l19.579 68 16.421-68h-36z" />
                </g>
              </g>
              <defs>
                <filter id="spotify-vinyl-f0" width="108" height="108" x="1" y="1" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur0" stdDeviation="1" />
                </filter>
                <filter id="spotify-vinyl-f1" width="100" height="100" x="5" y="5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur1" stdDeviation="1" />
                </filter>
                <filter id="spotify-vinyl-f2" width="96" height="96" x="7" y="7" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur2" stdDeviation="1" />
                </filter>
                <filter id="spotify-vinyl-f3" width="92" height="92" x="9" y="9" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur3" stdDeviation="1" />
                </filter>
                <filter id="spotify-vinyl-f4" width="80" height="80" x="15" y="15" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur4" stdDeviation="1" />
                </filter>
                <filter id="spotify-vinyl-f5" width="74" height="74" x="18" y="18" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur5" stdDeviation="1" />
                </filter>
                <filter id="spotify-vinyl-f6" width="100" height="68" x="-30" y="22" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur6" stdDeviation="8" />
                </filter>
                <filter id="spotify-vinyl-f7" width="100" height="68" x="39" y="22" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur7" stdDeviation="8" />
                </filter>
                <filter id="spotify-vinyl-f8" width="68" height="100" x="20.5" y="40.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur8" stdDeviation="8" />
                </filter>
                <filter id="spotify-vinyl-f9" width="68" height="100" x="20.5" y="-28.5" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur result="spotify-effect-blur9" stdDeviation="8" />
                </filter>
              </defs>
            </svg>
          </div>
        )}
      </button>
      <div className="z-10 flex w-full flex-col justify-between">
        <div className="flex self-end">
          <a
            href={track.link}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer text-muted-foreground hover:text-foreground transition-colors"
          >
            <SpotifyIcon size={18} />
          </a>
        </div>
        <div className="pl-6 text-end">
          <h2 className="whitespace-nowrap text-sm font-semibold tracking-[-.006em] text-foreground">
            {track.title}
          </h2>
          <h2 className="whitespace-nowrap text-sm font-medium tracking-[-.006em] text-muted-foreground">
            {track.artist}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default SpotifyCard;