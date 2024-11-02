import "./OwlCarousel.css"

import Owl_Carousel from "react-owl-carousel"
import "owl.carousel/dist/assets/owl.carousel.min.css"
import "owl.carousel/dist/assets/owl.theme.default.min.css"
import FeaturedGamesItem from "../FeaturedGamesItem/FeaturedGamesItem"

import FeaturedGamesData from "../../Data/FeaturedGamesItem";


const OwlCarousel = () => {

  const item = FeaturedGamesData.map(item => {
    return <FeaturedGamesItem key={item.id} image={item.image} name={item.name} downloads={item.downloads} rate={item.rate} url={item.url} />
  })

  const options = {
    responsiveClass: true,
    nav: true,
    dots: false,
    autoplay: true,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 1,
        },
        700: {
            items: 2,
        },
        1000: {
            items: 3,

        }
    },
};
  return (
    <Owl_Carousel className="owl-carousel"loop autoplayTimeout={4000} {...options}>
      {item}
    </Owl_Carousel>
  );
}

export default OwlCarousel
