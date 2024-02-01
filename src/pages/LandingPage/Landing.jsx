import React from 'react'
import Content from '../../components/Content/Content'
import IconDisplay from '../../components/IconDisplay/IconDisplay'
// import Trendles1 from '../../assets/png-for-dark-mode/trendles-text.png'
// import Trendles2 from '../../assets/png-for-dark-mode/Trendles-dark-text-alt.png'
// import Trendles3 from '../../assets/png-for-dark-mode/Trendles-Dark-text.png'
// import Image from '../../components/Image/Image'
import ImageSlideShow from '../../components/ImagesSlideShow/ImageSlideShow'

const slides = [
  "https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg",
  "https://images.unsplash.com/photo-1509043759401-136742328bb3?ixlib=rb-4.0.3",
  "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630",
  "https://media.istockphoto.com/id/1322277517/photo/wild-grass-in-the-mountains-at-sunset.jpg?s=612x612&w=0&k=20&c=6mItwwFFGqKNKEAzv0mv6TaxhLN3zSE43bWmFN--J5w="
];

const Landing = () => {
  return (
    <div className='flex flex-col gap-20 pt-8 overflow-hidden md:py-8 md:gap-28'>
      <div className="relative flex flex-col items-center gap-5 text-center md:justify-around md:gap-0 md:items-center md:flex-row md:text-start">
        <Content Title={'TRENDLES'} content={'The Trendles Club organizes and promotes various personality building activities and provides enough avenues under multiple domains to students to facilitate the pursuit of their dreams. '} />
        <div className="m-5 md:m-0">
          <IconDisplay />
        </div>
      </div>
      <div className='flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-around md:gap-0 md:text-start'>
        <Content Title={'Discover Creativity'} content={'Embark on literary adventures, weeb out over your favourite mangas, shape eye-pleasing wonders, engage in mind boggling battles, journey through the cosmos, and so much more.'} />
        <ImageSlideShow slides={slides} />
      </div>
      <div className="relative flex flex-col-reverse items-center justify-center gap-8 text-center md:flex-row md:justify-around md:gap-0 md:text-start ">
      <ImageSlideShow slides={slides} />
        <Content Title={'Embrace the Spectrum'} content={'Whether your affinity is towards, words, the skies, design, brains, finance, or pictures, our cultural club awaits the distinctive touch of your contribution and we will be looking forward to it.'} />
      </div>
      <div className='flex flex-col items-center justify-center gap-8 text-center md:flex-row md:justify-around md:gap-0 md:text-start'>
        <Content Title={'Connect and Thrive'} content={'Forge bonds, put forward ideas, and make lasting memories as you dive deep into the rich tapestry of this cultural mix. Welcome to a world with people having similar passions and let your creativity know no bounds!'} />
        <ImageSlideShow slides={slides} />
      </div>
    </div>
  )
}

export default Landing