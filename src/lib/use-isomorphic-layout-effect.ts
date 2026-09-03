import * as React from "react"

/**
 * A drop-in replacement for `useLayoutEffect` that uses `useEffect` when running
 * on the server (SSR) to avoid React warnings.
 */
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect