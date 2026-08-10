"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import {
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";


interface Hero {
  _id: string;

  tagline: string;

  title: string;

  highlightText: string;

  lastTitle: string;

  buttonText: string;

  buttonLink: string;

  backgroundImage: string;

  rightTitle: string;

  courseOneTitle: string;

  courseOneDescription: string;

  courseTwoTitle: string;

  courseTwoDescription: string;
}


interface HeroSliderProps {
  heroes: Hero[];
}


export default function HeroSlider({
  heroes,
}: HeroSliderProps) {


  const [current, setCurrent] = useState(0);


  useEffect(() => {

    if (heroes.length <= 1) return;


    const timer = setInterval(() => {

      setCurrent((prev) =>
        prev === heroes.length - 1
          ? 0
          : prev + 1
      );


    }, 5000);



    return () => clearInterval(timer);


  }, [heroes]);



  const nextSlide = () => {

    setCurrent((prev) =>
      prev === heroes.length - 1
        ? 0
        : prev + 1
    );

  };



  const prevSlide = () => {

    setCurrent((prev) =>
      prev === 0
        ? heroes.length - 1
        : prev - 1
    );

  };



  const hero = heroes[current];


  if (!hero) return null;
  return (
  <section
    className="
      relative
      h-[720px]
      w-full
      overflow-hidden
    "
  >

    {/* ================= Background Image ================= */}

    <Image
      src={hero.backgroundImage}
      alt={hero.title}
      fill
      priority
      className="
        object-cover
        object-center
      "
    />


    {/* Dark Overlay */}

    <div
      className="
        absolute
        inset-0
        bg-black/35
      "
    />


    {/* Green Bottom Gradient */}

    <div
      className="
        absolute
        bottom-0
        left-0
        right-0
        h-72
        bg-gradient-to-t
        from-emerald-700/70
        via-emerald-600/20
        to-transparent
      "
    />


    {/* Grid Overlay */}

    <div
      className="
        absolute
        inset-0
        opacity-20
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:100px_100px]
      "
    />


    {/* ================= Main Wrapper ================= */}

    <div
      className="
        relative
        z-10
        mx-auto
        flex
        h-full
       max-w-[1320px]
        flex-col
        px-5
        sm:px-8
        lg:px-10
      "
    >


      {/* ================= Slider Header ================= */}

      <div
        className="
          flex
          h-24
          items-center
          justify-between
        "
      >


        {/* Previous */}

        <button
          onClick={prevSlide}
          className="
            hidden
            items-center
            gap-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.5em]
            text-white
            lg:flex
          "
        >
          <ChevronLeft size={16}/>
          PREV
        </button>



        {/* Numbers */}

        <div
          className="
            flex
            items-center
            gap-8
          "
        >

          {heroes.map((_, index)=>(
            <button
              key={index}
              onClick={()=>setCurrent(index)}
              className={`
                text-sm
                font-semibold
                tracking-widest

                ${
                  current === index
                  ? "text-yellow-400"
                  : "text-white/60"
                }
              `}
            >
              {String(index+1).padStart(2,"0")}
            </button>
          ))}

        </div>



        {/* Next */}

        <button
          onClick={nextSlide}
          className="
            hidden
            items-center
            gap-3
            text-xs
            font-semibold
            uppercase
            tracking-[0.5em]
            text-white
            lg:flex
          "
        >
          NEXT
          <ChevronRight size={16}/>
        </button>


      </div>



      {/* ================= Glass Container ================= */}

     <div
  className="
    flex
    flex-1
    items-end

    pb-14

    lg:pb-20
  "
>

        <div
  className="
    grid
    w-full

    min-h-[430px]

    items-center

    gap-16

    rounded-[14px]

    border
    border-white/10

    bg-white/[0.05]

    backdrop-blur-xl

    shadow-[0_10px_40px_rgba(0,0,0,0.18)]

    px-12
    py-10

    lg:px-16
    lg:py-12

    xl:grid-cols-[1fr_320px]
  "
>
                  {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              flex
              flex-col
              justify-center
            "
          >

            {/* Tagline */}

            <div
              className="
                inline-flex
                w-fit
                rounded-full
                border
                border-white/20
                bg-white/10
                px-5
                py-2

                backdrop-blur-md

                text-xs
                font-medium
                text-white

                tracking-wide
              "
            >
              {hero.tagline}
            </div>



            {/* Heading */}

            <h1
              className="
                mt-8

                max-w-[720px]

                font-serif

                text-5xl

                font-semibold

                leading-[1.05]

                text-white


                sm:text-6xl


                xl:text-[68px]
              "
            >

              {hero.title}

              {" "}

              <span
                className="
                  text-[#F4C542]
                "
              >
                {hero.highlightText}
              </span>


              {" "}

              {hero.lastTitle}

            </h1>



            {/* Button */}

            <div
              className="
                mt-10
              "
            >

              <Link
                href={hero.buttonLink}
                className="
                  inline-flex

                  items-center

                  gap-3

                  bg-white

                  px-8

                  py-4

                  text-sm

                  font-semibold

                  text-slate-900


                  transition-all

                  duration-300


                  hover:bg-[#F4C542]
                "
              >

                {hero.buttonText}


                <ArrowUpRight
                  size={18}
                />

              </Link>

            </div>


          </div>  
          
                  {/* ================= RIGHT CARD ================= */}

          <div
            className="
              relative
              self-end
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                -inset-6

                rounded-[35px]

                bg-emerald-400/5

                bluxl
              "
            />


            {/* Card */}

            <div
              className="
                relative

                rounded-[18px]

                border

                border-white/10


                bg-white/[0.5]


                p-6


                backdrop-blur-lg


                shadow-[0_10px_35px_rgba(0,0,0,0.15)]


                lg:p-8
              "
            >


              {/* Small Title */}

              <p
                className="
                  text-xs

                  font-semibold

                  uppercase

                  tracking-[0.35em]

                  text-white/70
                "
              >
                Academic Program
              </p>



              {/* Main Title */}

              <h2
                className="
                  mt-4

                  text-3xl

                  font-bold

                  text-white
                "
              >
                {hero.rightTitle}
              </h2>




              {/* Course One */}

              <div
                className="
                  mt-8

                  rounded-[14px]

                  border

                  border-white/10


                  bg-white/[0.03]


                  p-5
                "
              >

                <h3
                  className="
                    text-lg

                    font-semibold

                    text-white
                  "
                >
                  {hero.courseOneTitle}
                </h3>


                <p
                  className="
                    mt-3

                    text-sm

                    leading-6

                    text-white/70
                  "
                >
                  {hero.courseOneDescription}
                </p>


              </div>



              {/* Divider */}

              <div
                className="
                  my-6

                  h-px

                  bg-white/20
                "
              />




              {/* Course Two */}

              <div
                className="
                  rounded-[14px]

                  border

                  border-white/10


                  bg-white/[0.03]


                  p-5
                "
              >

                <h3
                  className="
                    text-lg

                    font-semibold

                    text-white
                  "
                >
                  {hero.courseTwoTitle}
                </h3>


                <p
                  className="
                    mt-3

                    text-sm

                    leading-6

                    text-white/70
                  "
                >
                  {hero.courseTwoDescription}
                </p>


              </div>




              {/* Bottom Explore */}

              <div
                className="
                  mt-8

                  flex

                  items-center

                  justify-between
                "
              >

                <span
                  className="
                    text-xs

                    uppercase

                    tracking-[0.35em]

                    text-white/60
                  "
                >
                  Explore
                </span>



                <button
                  onClick={nextSlide}
                  className="
                    flex

                    h-12

                    w-12

                    items-center

                    justify-center


                    rounded-full


                    bg-emerald-600


                    text-white


                    transition


                    hover:scale-110
                  "
                >

                  <ArrowUpRight
                    size={20}
                  />

                </button>


              </div>


            </div>

          </div>
                    </div>
          {/* End Right Card */}


        </div>
        {/* End Grid */}


      </div>
      {/* End Flex Wrapper */}



      {/* ================= Mobile Controls ================= */}

      <div
        className="
          mt-8
          flex
          justify-center
          gap-4
          pb-6

          lg:hidden
        "
      >

        <button
          onClick={prevSlide}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            border
            border-white/30

            bg-white/10

            text-white

            backdrop-blur-md
          "
        >
          <ChevronLeft size={18}/>
        </button>



        <button
          onClick={nextSlide}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center

            rounded-full

            border
            border-white/30

            bg-white/10

            text-white

            backdrop-blur-md
          "
        >
          <ChevronRight size={18}/>
        </button>


      </div>
   


  </section>

);
}