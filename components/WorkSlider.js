import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import { BsArrowRight } from "react-icons/bs";

const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Promptopia",
          path: "./promptopia-img.png",
          githubUrl: "https://github.com/BERUASHVILIG/Promptopia-Project",
          liveUrl: "https://promptopia-project-omega.vercel.app/",
        },
        {
          title: "Ecommerce",
          path: "./flair-img.png",
          githubUrl: "https://github.com/BERUASHVILIG/Next.js-eCommerce",
          liveUrl: "https://next-js-e-commerce-ezq1.vercel.app/",
        },
        {
          title: "Book-Store",
          path: "./bookStore-img.png",
          githubUrl: "https://github.com/BERUASHVILIG/Book-App-Redux",
          liveUrl: "https://book-app-redux-ejhhc6x7i-beruashvilig.vercel.app/",
        },
        {
          title: "IMDB",
          path: "./imdb-react.png",
          githubUrl: "https://github.com/BERUASHVILIG/imdb-react",
          liveUrl: "https://imdb-react-tan.vercel.app/",
        },
      ],
    },
    {
      images: [
        {
          title: "AI-Summarizer",
          path: "./summarize-img.png",
          githubUrl: "https://github.com/BERUASHVILIG/AI-Summarizer",
          liveUrl: "https://ai-summarizer-lovat-eight.vercel.app/",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="h-[280px] sm:h-[480px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <div
                    key={index}
                    className="relative rounded-lg overflow-hidden flex items-center justify-center group"
                  >
                    <div className="flex items-center justify-center relative overflow-hidden group">
                      <img src={image.path} width={500} height={300} alt="" />
                      <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>
                      <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <a
                            href={image.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="delay-100"
                          >
                            LIVE
                          </a>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Project
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                        <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                          <a
                            href={image.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Github
                          </a>
                          <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                            Link
                          </div>
                          <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200">
                            <BsArrowRight />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
