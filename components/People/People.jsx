import Image from "next/image"

export default function People() {
    return (
      <div className="flex w-full justify-between gap-[4px] sm:gap-[10px] md:gap-[20px] items-center">
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
