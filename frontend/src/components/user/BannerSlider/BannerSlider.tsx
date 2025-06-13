import EventServices from "@src/services/api-events";
import { useEffect, useState } from "react";
import Slider from "react-slick";
const [bannerImages,setBannerImages] = useState<string[]>([]);
useEffect(()=>{
    const fetchFeatureImages = async ()=>{
        try{
            const res = EventServices.getEvents();
            setBannerImages([...bannerImages,res?.data,])
        }catch(error){

        }
    }
    fetchFeatureImages();
},[]);

const BannerSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false
  };

  return (
    <div style={{ width: "100%", maxHeight: "500px", overflow: "hidden" }}>
      <Slider {...settings}>
        {bannerImages.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Slide ${index + 1}`}
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default BannerSlider;