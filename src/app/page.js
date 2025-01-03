"use client";
import "./Home.css";
import Button from "./components/Button";
import logo from "./images/logo.png";
import devdogswelcome from "./images/devdogswelcome.png";
import mockup from "./images/mockup.png";
import Image from "next/image";
import Link from "next/link";
import RolesHome from "./components/RolesHome";
import Home1 from "./images/Home1.jpg";
import EmblaCarousel from "./components/EmblaCarousel";

const Home = () => {
  const OPTIONS = { loop: true };
  const imagesForCarousel = [
    {
      image: "/Events5.jpg",
    },
    {
      image: "/Events1.jpg",
    },
    {
      image: "/GroupPhoto5.jpg",
    },
    {
      image: "/GroupPhoto5.jpg",
    },
    {
      image: "/GroupPhoto5.jpg",
    },
  ];
  return (
    <section>
      <div className="">
        <div className="">
          <div className="md:flex sm:block justify-around sm:text-left ">
            <div className="my-2 md:my-auto mx-6 md:mx-2 md:ml-6 2xl:mx-auto leading-tight">
            <h1 className="block text-[2rem] font-semibold text-[#FFF7F9] md:text-[2.2rem] xl:text-[3.8rem] 2xl:text-[4.5rem] 3xl:text-[5rem]">
              Design software with
            </h1>

            <h1 className="inline text-[2rem] font-bold text-white sm:text-[2rem] md:text-[2.2rem] xl:text-[3.8rem] 2xl:text-[4.5rem] 3xl:text-[5rem]">
              an <span className="text-[#FF4583]">Impact</span>
            </h1>
            <div className="hidden md:block lg:text-2xl">
              <p className="text-[#FFF7F9] flex lg:text-2xl">
                We are a team of &nbsp;<RolesHome />
              </p>
              
              <p className="text-[#FFF7F9] block lg:text-2xl">
                at UGA developing some awesome software to better our community.
              </p>
              <Link
                target="_blank"
                href="https://github.com/DevDogs-UGA/Optimal-Schedule-Builder"
                className="mt-2 md:mt-4 xl:mt-6 mr-[15rem] rounded-full font-semibold text-center block p-2 bg-[#FF4583] text-[#FFF7F9] hover:bg-white hover:text-[#331B33] transition delay-75 ease-in-out"
              >
                Current Project
              </Link>
            </div>
            </div>
            <Image className="md:rounded-tl-[10rem] lg:rounded-tl-[15rem] 2xl:rounded-tl-[20rem]  md:block md:size-1/2" src={Home1} alt="ACM OSP Bus App Mockup" width=""/>
            <div className="mt-4 mx-6 md:hidden">
              <p className="text-[#FFF7F9] flex">
                We are a team of &nbsp;<RolesHome />
              </p>
              
              <p className="text-[#FFF7F9] block">
                at UGA developing some awesome software to better our community.
              </p>

              <Link
                target="_blank"
                href="https://github.com/DevDogs-UGA/Optimal-Schedule-Builder"
                className="mt-2 mr-[15rem] rounded-full font-semibold text-center block p-2 bg-[#FF4583] text-[#FFF7F9] hover:bg-white hover:text-[#331B33] transition delay-75 ease-in-out"
              >
                Current Project
              </Link>

            </div>
          </div>
          
          <div className="xl:mx-48">
          <EmblaCarousel
            slides={imagesForCarousel}
            banner={false}
            options={OPTIONS}
          />
          </div>
        </div>

        <div className="my-[2rem] flex flex-wrap items-center justify-center sm:flex-row-reverse">
          <div className="mb-10 text-center leading-[3.75rem] sm:my-0 sm:flex-1 sm:text-right sm:leading-[4rem] md:leading-[5rem]">
            <p className="text-[2rem] font-semibold leading-3 text-DevDogBlue md:text-[2.5rem] lg:text-[3rem]">
              a team of
            </p>
            <p className="text-[2rem] font-semibold text-DevDogBlue md:text-[2.5rem] lg:text-[3rem]">
              passionate
            </p>
            <h1 className="text-[3rem] font-semibold text-MidnightBlue md:text-[4rem] lg:text-[5rem]">
              Student
            </h1>
            <RolesHome />
            <p className="text-[1.5rem] font-semibold text-DevDogBlue lg:text-[2rem]">
              at UGA.
            </p>
          </div>

          <div className="sm:flex-1">
            <Image
              src={devdogswelcome}
              alt="DevDogs Welcome"
              width="600"
              height="300"
            />
          </div>
        </div>

        <div className="my=[2rem] my-[50px] flex flex-wrap items-center justify-center text-center sm:text-left">
          <div className="leading-[2.5rem] sm:leading-[3rem] md:flex-1 md:leading-[3.5rem]">
            <h2 className="inline text-[2.5rem] font-semibold text-BulldogRed md:text-[3.5rem] lg:text-[4rem]">
              We <> </>
            </h2>

            <h2 className="inline text-[2.5rem] font-semibold text-MidnightBlue md:text-[3.5rem] lg:text-[4rem]">
              develop some <br />
              awesome <br />
              software
            </h2>
            <p className="inline text-[2.5rem] font-semibold md:text-[3.5rem] lg:text-[4rem]">
              ...
            </p>
            <p className="mb-2 py-2 text-xl font-semibold text-DevDogBlue md:text-2xl">
              And we strive to better our community through code.
            </p>
            <p className="text-lg text-DevDogBlue md:text-xl">
              Each year, we work hard to identify needs in Athens and solve them
              by taking solutions from concept to completion.
            </p>
          </div>
          <div className="md:flex-1">
            <Image src={mockup} alt="ACM OSP Bus App Mockup" />
          </div>
        </div>

        <div className="py-[2rem]">
          <h1 className="text-center text-[3rem] font-bold text-MidnightBlue">
            Sound Interesting?
          </h1>
          <div className="button-grid">
            <Link
              href="/about"
              className="bg-[#33334d] m-4 rounded-full p-2 text-lg font-medium text-black transition delay-150 ease-in-out hover:bg-white hover:text-black md:text-xl"
            >
              <Button>Learn More</Button>
            </Link>
            <Link
              target="_blank"
              href="https://discord.com/invite/MuyJ4f5xKE"
              className="red m-4 rounded-full p-2 text-lg font-medium text-white transition delay-150 ease-in-out md:text-xl"
            >
              <Button>Join Us!</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
