import React from 'react';
import '../../styles/main.scss';
import Carousel from 'nuka-carousel';
import { images } from '../../styles/image-sources';
import Nav from '../Nav/Nav';
import { locations } from '../../location-data';
import Location from '../Location/Location'

function App() {
  const carouselImages = images.map(image => {
    return <img key={image.id} src={image.src} alt={image.alt} />
  });
  const locationsToDisplay = locations.map(location => {
    return <Location info={location} key={location.id} />
  })
  
  return (
    <div className="App">
      <Nav />
      <Carousel width={'85vw'} cellAlign="center">
        {carouselImages}
      </Carousel>
      <div className="locations-container">
        {locationsToDisplay}
      </div>
    </div>
  );
}

export default App;
