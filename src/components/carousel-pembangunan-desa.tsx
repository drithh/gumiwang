"use client";

import useEmblaCarousel, {
  EmblaCarouselType,
  EmblaOptionsType,
} from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { GambarProyek, Slide } from "~/types";
import {
  NextButton,
  PrevButton,
} from "./carousel-button-arrow-pembangunan-desa";
import { useCallback, useEffect, useState } from "react";
import { AspectRatio } from "./ui/aspect-ratio";

interface CarouselProps {
  slides: GambarProyek[] | null;
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
    <div className="relative overflow-hidden " ref={emblaRef}>
      <div className="flex h-full">
        {slides?.map((slide) => (
          <div className="relative w-40 flex-[0_0_100%] " key={slide.alt}>
            <AspectRatio ratio={4 / 3}>
              <Image
                src={slide.gambar}
                alt={slide.alt}
                fill
                objectFit="cover"
                priority={true}
              />
            </AspectRatio>
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 z-10 flex h-full w-full items-center justify-between">
        <PrevButton onClick={scrollPrev} disabled={prevBtnDisabled} />
        <NextButton onClick={scrollNext} disabled={nextBtnDisabled} />
      </div>
    </div>
  );
}
