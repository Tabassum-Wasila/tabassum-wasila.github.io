import { useEffect } from 'react'

export default function ImageModal({ src, alt, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <button 
        className="absolute top-4 right-4 text-white/80 hover:text-white text-4xl font-light transition-colors z-10"
        onClick={onClose}
        aria-label="Close modal"
      >
        ×
      </button>
      <img 
        src={src} 
        alt={alt} 
        className="max-w-[95vw] max-h-[95vh] object-contain rounded-lg shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      />
    </div>
  )
}
