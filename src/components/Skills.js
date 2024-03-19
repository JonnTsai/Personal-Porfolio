import React from 'react'
import { Container, Row , Col} from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import googleIcon from "../assets/img/google240.svg"
import amazonIcon from "../assets/img/amazon240.svg"
import unlvIcon from "../assets/img/unlv.png"
import mstsIcon from "../assets/img/msts.jpg"
import meter2 from "../assets/img/meter2.svg"
import meter3 from "../assets/img/meter3.svg"
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
  return (
    <section className='skill' id='skills'>
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>
                        Experience
                    </h2>
                    <Carousel responsive={responsive} infinite={true} className='skill-slider'>
                        <div className='item'>
                            <img src={googleIcon} alt="Image"/>
                            <h5>Google/YouTube</h5>
                            <p>iOS Developer for YouTube Shorts</p>
                        </div>
                        <div className='item'>
                            <img src={amazonIcon} alt="Image"/>
                            <h5>Amazon</h5>
                            <p>Java Developer for Amazon Alexa</p>
                        </div>
                        <div className='item'>
                            <img src={mstsIcon} alt="Image"/>
                            <h5>NNSS</h5>
                            <p>Android Mobile/Wear OS Developer</p>
                        </div>
                        <div className='item'>
                            <img src={unlvIcon} alt="Image"/>
                            <h5>UNLV-FIA</h5>
                            <p>Accessibility Engineer</p>
                        </div>
                    </Carousel>
                    <a href="/Jonathan_Tsai_Resume.pdf" target="_blank">View Full Résumé</a>
                </div>
                </Col>
            </Row>
        </Container>
        <img className='background-image-left' src={colorSharp}/>
    </section>
  )
}

export default Skills