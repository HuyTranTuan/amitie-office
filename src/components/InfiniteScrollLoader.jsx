import { useEffect, useRef } from 'react'

export default function InfiniteScrollLoader({
  onLoadMore,
  disabled = false,
  rootMargin = '600px 0px',
}) {
  const ref = useRef(null)

  useEffect(() => {
    if (disabled) return
    if (!ref.current) return

    const el = ref.current
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) onLoadMore?.()
      },
      { root: null, rootMargin },
    )

    io.observe(el)
    return () => io.disconnect()
  }, [disabled, onLoadMore, rootMargin])

  return <div ref={ref} style={{ height: 1 }} />
}

