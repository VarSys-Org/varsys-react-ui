const probe = typeof document !== "undefined" ? document.createElement("canvas") : null

function hexToRgba(hex: string, alpha: number): string {
  let h = hex.replace("#", "")
  if (h.length === 3) {
    h = h
      .split("")
      .map(c => c + c)
      .join("")
  }
  const int = parseInt(h.slice(0, 6), 16)
  const r = (int >> 16) & 255
  const g = (int >> 8) & 255
  const b = int & 255
  return `rgba(${r}, ${g}, ${b}, ${alpha})`
}

export function resolveColor(color: string, el?: HTMLElement | null): string {
  const match = /^var\(\s*(--[^,\s)]+)/.exec(color)
  if (match) {
    const resolved = el ? getComputedStyle(el).getPropertyValue(match[1]).trim() : ""
    if (resolved) return resolved
  }
  return color
}

export function colorToRgba(color: string, alpha: number): string {
  const resolved = color.trim()
  if (resolved.startsWith("#")) return hexToRgba(resolved, alpha)
  if (!probe) return `rgba(128, 128, 128, ${alpha})`
  const ctx = probe.getContext("2d")
  if (!ctx) return `rgba(128, 128, 128, ${alpha})`
  ctx.clearRect(0, 0, 1, 1)
  ctx.fillStyle = resolved
  ctx.fillRect(0, 0, 1, 1)
  const data = ctx.getImageData(0, 0, 1, 1).data
  return `rgba(${data[0]}, ${data[1]}, ${data[2]}, ${alpha})`
}