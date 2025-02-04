import { useEffect, useState } from "react";
import "./style/App.css";
import Slider from "./Slider";
import Footer from "./Footer";

function App() {
  const images = [
    "photo1",
    "photo2",
    "photo3",
    "photo4",
    "photo5",
    "photo6",
    "photo7",
    "photo8",
    "photo9",
    "photo10",
    "photo11",
    "photo12",
  ]; //my photos - need to move it to server**
  const [isSliderOpen, setIsSliderOpen] = useState(false); //checking if slider is open
  const [currentImage, setCurrentImage] = useState(); // checking the current image name
  const [currentIndex, setCurrentIndex] = useState(); //checking the current image index

  const openSlider = (image, index) => {
    //open slider and updating the image name and index
    setIsSliderOpen(true);
    setCurrentImage(image);
    setCurrentIndex(index + 1);
  };

  const closeSlider = () => {
    //close slider
    setIsSliderOpen(false);
  };

  return (
    <div
      className="warpper"
      style={{
        backgroundColor: isSliderOpen ? "rgba(0, 0, 0, 0.5)" : "#ffb97c",
      }}
    >
      <h1 className="title">Photo Gallery</h1>
      <ul className="items-container">
        {images.map((image, index) => (
          <li className="item" key={image}>
            <img
              className="image"
              src={`images/${image}.jpg`}
              alt="Photo"
              onClick={() => openSlider(image, index)}
              style={{ opacity: isSliderOpen ? 0.4 : 0.9 }}
            />
          </li>
        ))}
      </ul>

      <Slider
        closeSlider={closeSlider}
        isSliderOpen={isSliderOpen}
        setIsSliderOpen={setIsSliderOpen}
        currentImage={currentImage}
        setCurrentImage={setCurrentImage}
        currentIndex={currentIndex}
        setCurrentIndex={setCurrentIndex}
        images={images}
      />
      <Footer/>
    </div>
    
  );
}

export default App;
