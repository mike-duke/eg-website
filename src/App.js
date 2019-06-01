import React from 'react';
import './App.css';
import Carousel from 'nuka-carousel';
import { images } from './styles/images-for-carousel/image-sources';

function App() {
  const carouselImages = images.map((image) => {
    console.log(`./styles/images-for-carousel/${image.src}`)
    return <img key={image.id} src={image.src} alt={image.alt} />
  })
  
  return (
    <div className="App">
      <aside>
        <ul>
          <li>Locations</li>
          <li>Podcast Archive</li>
          <li>Coffee Menu</li>
          <li>Contact</li>
        </ul>
      </aside>
      <Carousel heightMode={'first'} slideWidth={0.8} cellSpacing={75} cellAlign={'center'}>
        {carouselImages}
      </Carousel>
      
      <div className="test-image"></div>
    </div>
  );
}

export default App;
