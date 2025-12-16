import { SetStateAction, useCallback, useEffect, useState } from 'react'
import { EmblaCarouselType } from "embla-carousel"

// Define la interfaz de props del hook
type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

export const useDotButton = (
  emblaApi: EmblaCarouselType | undefined
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    // Esta función llama a setState (setScrollSnaps)
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    // Esta función llama a setState (setSelectedIndex)
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    // ANTES: onInit(emblaApi) y onSelect(emblaApi) se llamaban aquí, causando el warning.
    
    // SOLUCIÓN: Eliminamos las llamadas síncronas. Confiamos en que Embla disparará 
    // los eventos 'select' y 'reInit' de forma asíncrona al inicializarse.

    emblaApi.on('reInit', onInit)
    emblaApi.on('reInit', onSelect)
    emblaApi.on('select', onSelect)

    // CLAVE: Añadimos la función de limpieza (Cleanup) para remover los listeners 
    // cuando el componente se desmonte o emblaApi cambie, evitando fugas de memoria.
    return () => {
      emblaApi.off('reInit', onInit)
      emblaApi.off('reInit', onSelect)
      emblaApi.off('select', onSelect)
    }

  }, [emblaApi, onInit, onSelect]) 

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick
  }
}