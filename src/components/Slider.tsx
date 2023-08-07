'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { Slides } from '~/types';

interface SliderProps {
  slides: Slides[];
}

function Slider({ slides }: SliderProps) {
  const [emblaRef] = useEmblaCarousel();

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

            <Image src={slide.gambar} alt={slide.judul} fill />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Slider;
