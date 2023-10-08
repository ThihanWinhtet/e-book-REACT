import { Button, Carousel } from "antd";
import { DownloadOutlined, DingdingOutlined } from "@ant-design/icons";
import mobile from "../assets/images/Payment Information-bro.svg";
import { useRef } from "react";

const WelcomePage = () => {
  const carouselRef = useRef<any>(null);

  const nextSlide = () => {
    carouselRef.current.next();
  };

  const prevSlide = () => {
    carouselRef.current.prev();
  };

  return (
    <>
      <div className="welcome">
        <Carousel ref={carouselRef} autoplay={true}>
          <div className="croItem">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <img src={mobile} alt="" />
          </div>
          <div className="croItem">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <img src={mobile} alt="" />
          </div>
          <div className="croItem">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <img src={mobile} alt="" />
          </div>
          <div className="croItem">
            <h2>Lorem ipsum dolor sit amet consectetur.</h2>
            <img src={mobile} alt="" />
          </div>
        </Carousel>
        <div className="welcomeBTN">
          <Button
            onClick={prevSlide}
            size="large"
            type="primary"
            icon={<DownloadOutlined />}
          >
            Download
          </Button>

          <Button
            onClick={nextSlide}
            size="large"
            type="primary"
            icon={<DingdingOutlined />}
          >
            Start Without App
          </Button>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
