import React from 'react'
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

const items = [
    {
      src: require("../assets/img/bread-sourdough-1.jpg"),
      altText: "Sourdough Bread from Cafe Tartine",
      caption: "Sourdough Bread from Cafe Tartine"
    },
    {
      src: require("../assets/img/cookie-heart.jpg"),
      altText: "Cookies from Cafe Tartine",
      caption: "Cookies from Cafe Tartine"
    },
    {
      src: require("../assets/img/tiramisu-cake.jpg"),
      altText: "Tiramisu Cake from Cafe Tartine",
      caption: "Tiramisu Cake from Cafe Tartine"
    }
  ];

// this will have carousel of featured baked items, right below jumbotron
const FeaturedGoodies = () => {
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [animating, setAnimating] = React.useState(false);
    const onExiting = () => {
        setAnimating(true);
    };
    const onExited = () => {
        setAnimating(false);
    };
    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };
    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const goToIndex = newIndex => {
        if (animating) return;
        setActiveIndex(newIndex);
    };





    return (
        <>
            <Carousel activeIndex={activeIndex} next={next} previous={previous}>
                <CarouselIndicators
                items={items}
                activeIndex={activeIndex}
                onClickHandler={goToIndex}
                />
                {items.map(item => {
                return (
                    <CarouselItem
                    onExiting={onExiting}
                    onExited={onExited}
                    key={item.src}
                    >
                    <img src={item.src} alt={item.altText} />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>{item.caption}</h5>
                    </div>
                    </CarouselItem>
                );
                })}
                <a
                className="carousel-control-prev"
                data-slide="prev"
                href="#pablo"
                onClick={e => {
                    e.preventDefault();
                    previous();
                }}
                role="button"
                >
                <i className="now-ui-icons arrows-1_minimal-left"></i>
                </a>
                <a
                className="carousel-control-next"
                data-slide="next"
                href="#pablo"
                onClick={e => {
                    e.preventDefault();
                    next();
                }}
                role="button"
                >
                <i className="now-ui-icons arrows-1_minimal-right"></i>
                </a>
            </Carousel>
        </>
    )
}

export default FeaturedGoodies
