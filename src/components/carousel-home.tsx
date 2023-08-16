"use client";

import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Slide } from "~/types";
import { NextButton, PrevButton } from "./carousel-button-arrow-home";
import { useCallback, useEffect, useState } from "react";

interface CarouselProps {
  slides: Slide[];
}

export default function Carousel({ slides }: CarouselProps) {
  const options = { loop: true } as EmblaOptionsType;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );
  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi],
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
    emblaApi.on("reInit", onInit);
    emblaApi.on("reInit", onSelect);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onInit, onSelect]);
  return (
    <div className="relative overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {slides.map((slide) => (
          <div
            className="relative w-screen min-w-0 flex-[0_0_100%]"
            key={slide._id}
          >
            <div className="absolute inset-0 z-10 bg-black bg-opacity-50">
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h1 className="font-bold text-slate-100 md:text-4xl lg:text-5xl">
                  {slide.judul}
                </h1>
                <p className="w-4/5 text-center text-xs text-slate-100 md:w-full md:text-base lg:text-xl">
                  {slide.deskripsi}
                </p>
              </div>
            </div>
            <div className="relative h-[56vw] max-h-screen w-screen">
              <Image
                src={slide.gambar}
                alt={slide.alt}
                fill
                priority={true}
                sizes="100%"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 flex h-full w-full items-center justify-between">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}
