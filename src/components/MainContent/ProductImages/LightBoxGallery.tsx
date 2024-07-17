import { useEffect } from 'react'
import IconClose from './IconClose'
import Carousel from './Carousel/Carousel'

function LightBoxGallery({ closeLightBox }: Props) {
  useEffect(() => {
    const divRoot = document.getElementById('root')
    divRoot?.setAttribute('inert', 'true')

    return () => {
      divRoot?.removeAttribute('inert')
    }
  }, [])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-lightbox">
      <div className="flex flex-col">
        <button
          type="button"
          className="self-end fill-alt transition-colors expand-click-sm hover:fill-accent focus-visible:fill-accent focus-visible:outline-none"
          onClick={closeLightBox}
          aria-label="Close Lightbox Gallery"
        >
          <IconClose size="large" />
        </button>
        <Carousel displayContext="lightbox" arrows thumbs />
      </div>
    </div>
  )
}
export default LightBoxGallery

type Props = {
  closeLightBox: () => void
}
