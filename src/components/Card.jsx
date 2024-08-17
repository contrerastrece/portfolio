import { TbBrandGithub } from "react-icons/tb";
import project from "../img/project-1.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";

export const Card = ({ data }) => {
  const images = data.image;

  return (
    <div className="card bg-base-100 image-full md:w-96 shadow-md border-red-600">
      <figure className="">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          modules={[Autoplay]}
          slidesPerView={1}
          // loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
        >
          {images.map((image, i) => (
            <SwiperSlide key={i}>
              <img
                src={image || project}
                alt={data.title}
                className="aspect-video rounded-md"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>
      <div className="card-body rounded-md">
        <h2 className="card-title">{data.title}</h2>
        <p className="text-sm">{data.description}</p>
        <div className="card-actions justify-end">
          <a
            href={data.linkGitHub}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm rounded-md btn-outline text-sky-400 text-xs font-normal"
          >
            <TbBrandGithub size={15} />
            Github
          </a>
        </div>
      </div>
    </div>
  );
};
