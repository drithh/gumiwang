'use client';

import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import { Slide } from '~/types';
import { NextButton, PrevButton } from './carousel-button-arrow';
import { useCallback, useEffect, useState } from 'react';

interface CarouselProps {
  slides: Slide[];
}

function Carousel({ slides }: CarouselProps) {
  const options = { loop: true } as EmblaOptionsType;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  );

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList());
  }, []);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onInit(emblaApi);
    onSelect(emblaApi);
    emblaApi.on('reInit', onInit);
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex h-screen">
        {slides.map((slide) => (
          <div
            className="min-w-0 flex-[0_0_100%] w-screen relative "
            key={slide._id}
          >
            <div className="absolute inset-0 bg-black bg-opacity-50 z-10">
              <div className="absolute inset-0 flex flex-col justify-center items-center">
                <h1 className="text-4xl text-white font-bold">{slide.judul}</h1>
                <p className="text-white">{slide.deskripsi}</p>
              </div>
            </div>

            <Image src={slide.gambar} alt={slide.alt} fill />
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full flex justify-between items-center h-full">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}

export default Carousel;
