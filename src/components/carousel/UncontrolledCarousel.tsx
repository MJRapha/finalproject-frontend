import Carousel from 'react-bootstrap/Carousel';
import pic1 from "../../images/IPhone-14-pro-carousel-photo.jpg"
import pic2 from "../../images/flipfold-4.jpg"
import pic3 from "../../images/Samsung-Galaxy-S23-Ultra.jpg"

const UncontrolledCarousel = () => {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>IPhone 14 pro is here!</h3>
                    <p>Now in sale!</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3 style={{ color: "black" }}>Z Fold4 | Z Flip4</h3>
                    <p style={{ color: "black" }}>Your Galaxy. Your Way.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={pic3}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Galaxy S23 Ultra is here!</h3>
                    <p>
                        Now in sale!
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default UncontrolledCarousel;