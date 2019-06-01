import React from 'react';
import '../../styles/main.scss';
import Carousel from 'nuka-carousel';
import { images } from '../../styles/images-for-carousel/image-sources';
import Nav from '../Nav/Nav';

function App() {
  const carouselImages = images.map((image) => {
    console.log(`./styles/images-for-carousel/${image.src}`)
    return <img key={image.id} src={image.src} alt={image.alt} />
  })
  
  return (
    <div className="App">
      <Nav />
      <Carousel width={'85vw'} cellAlign="center">
        {carouselImages}
      </Carousel>
      <div className="locations"></div>
    </div>
  );
}

export default App;
