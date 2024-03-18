import React, { useState, useEffect } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons';
import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setisDeleting] = useState(false);
    const toRotate = [ ", a Web Designer", ", a Mobile Developer", ", a Software Engineer" ];
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)

        return () => { clearInterval(ticker)};
    }, [text])

    const tick = (() => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
        setText(updatedText);

        if (isDeleting) {
            setDelta(prevDelta => prevDelta/2)
        }

        if (!isDeleting && updatedText === fullText) {
            setisDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === '') {
            setisDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    })

  return (
    
    <section className = "banner" id = "home">
        <Container>
            <Row classNmae="align-items-center">
                <Col xs={12} md={6} xl={7}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                        <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                            <span className="tagline">Welcome to my Portfolio</span>
                            <h1>{'Hi Im Jonathan'} <span className='wrap'>{text}</span></h1>
                            <p>In 2017, I took a leap into the world of programming on YouTube, venturing into mobile app creation and immersing myself in the captivating realm of coding and software development. 
Fast-forward to today, and I've had the privilege of building software for a <a href="https://nnss.gov/" target="_blank">national security site</a>, a <a href="https://alexa.amazon.com/" target="_blank">prominent virtual assistant</a>, and the <a href="https://www.youtube.com/" target="_blank">leading platform for video content creation and sharing</a>, catering to millions of creators and viewers worldwide (oh how things come full circle).</p>
<p>My main focus these days is building and finding unique solutions to incorporate AI tools into existing exosystems. I most enjoy building software that pushes the needle forward, for both the world of technology and my own professional growth.</p>
<p>When I’m not at the computer, I’m usually playing basketball, board gaming, reading, or watching LeBron continue to prove why he's the greatest.</p>
                            <button onClick={() => console.log('connect')}>Let's connect <ArrowRightCircle size={25}/></button>
                        </div>}
                    </TrackVisibility>
                </Col>
                <Col xs={12} md={6} xl={5}>
                    <img src={headerImg} alt='Header Img'/>
                </Col>
            </Row>
        </Container>
    </section>
  )
}

export default Banner