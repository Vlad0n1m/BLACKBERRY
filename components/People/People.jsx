import Image from "next/image";
import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import Marquee from "react-double-marquee";
export default function People() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const people1 = ["/images/people1.webp", "/images/people2.webp"];

  return (
    <div
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateY(100px)",
        transition: "all 0.3s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
        
      }}
      className="flex w-full justify-between gap-[4px] sm:gap-[10px] md:gap-[20px] items-center"
    >

        <Image
          src="/images/people1.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square"
        />
        <Image
          src="/images/people2.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square"
        />
        <Image
          src="/images/people3.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square"
        />
        <Image
          src="/images/people4.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square"
        />
        <Image
          src="/images/people5.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square"
        />
        <Image
          src="/images/people6.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square hidden md:block"
        />
        <Image
          src="/images/people7.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square hidden md:block"
        />
        <Image
          src="/images/people8.webp"
          width="150"
          height="150"
          className="object-cover rounded-lg max-w-[60px] sm:max-w-[150px] w-full aspect-square hidden md:block"
        />
    </div>
  );
}
