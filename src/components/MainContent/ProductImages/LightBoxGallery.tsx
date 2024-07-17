import { useEffect } from 'react'
import { motion, useReducedMotion } from 'framer-motion'
import IconClose from './IconClose'
import Carousel from './Carousel/Carousel'

function LightBoxGallery({ closeLightBox }: Props) {
  const shouldReduceMotion = useReducedMotion()

  const variants = {
    hidden: shouldReduceMotion ? {} : { scale: 0.25 },
    visible: shouldReduceMotion ? {} : { scale: 1 },
  }

  useEffect(() => {
    const divRoot = document.getElementById('root')
    divRoot?.setAttribute('inert', 'true')

    return () => {
      divRoot?.removeAttribute('inert')
    }
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.15 }}
      className="bg-overlay fixed inset-0 z-50 flex items-center justify-center"
    >
      <motion.div
        variants={variants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        className="flex flex-col"
      >
        <button
          type="button"
          className="self-end fill-alt transition-colors expand-click-sm hover:fill-accent focus-visible:fill-accent focus-visible:outline-none"
          onClick={closeLightBox}
          aria-label="Close Lightbox Gallery"
        >
          <IconClose size="large" />
        </button>
        <Carousel displayContext="lightbox" arrows thumbs />
      </motion.div>
    </motion.div>
  )
}
export default LightBoxGallery

type Props = {
  closeLightBox: () => void
}
