import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!show) return null

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className="fixed bottom-6 right-6 z-40 inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500 hover:bg-teal-400 text-white shadow-lg transition-colors"
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  )
}