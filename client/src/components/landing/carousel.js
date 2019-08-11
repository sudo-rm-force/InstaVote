import React, { Component } from 'react'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from 'mdbreact'
import vote1 from '../../assets/vote1.jpg'
import vote2 from '../../assets/vote2.jpg'
import vote3 from '../../assets/vote3.jpg'
import '../../styles/main.scss'

class Carousel extends Component {
    render() {
        return(
            <MDBContainer>
                <MDBCarousel
                    activeItem={1}
                    length={3}
                    showControls={true}
                    showIndicators={true}
                    interval={2000}
                    className="z-depth-1"
                >
                    <MDBCarouselInner>
                    <MDBCarouselItem itemId="1">
                        <MDBView>
                        <img
                            className="d-block w-100"
                            src={vote1}
                            alt="First slide"
                        />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="2">
                        <MDBView>
                        <img
                            className="d-block w-100"
                            src={vote2}
                            alt="Second slide"
                        />
                        </MDBView>
                    </MDBCarouselItem>
                    <MDBCarouselItem itemId="3">
                        <MDBView>
                        <img
                            className="d-block w-100"
                            src={vote3}
                            alt="Third slide"
                        />
                        </MDBView>
                    </MDBCarouselItem>
                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>
        )
    }
}

export default Carousel
