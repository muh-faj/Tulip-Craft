import React from "react";
import Slider from "react-slick";

const OurPartners = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="our-partner-section">
            <div className="partner-container">
                <h2 className="section-title text-center">Our Client</h2>
                <Slider {...settings}>
                    <div className="team-member">
                        <img src="/assets/images/partner/bri.png" alt="Partner 2" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/btn.png" alt="Partner 4" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/danamon.png" alt="Partner 3" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/indihome.png" alt="Partner 4" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/ipb.png" alt="Partner 4" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/ui.png" alt="Partner 1" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/mui.png" alt="Partner 4" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/kominfo.png" alt="Partner 4" className="img-fluid" />
                    </div>
                    <div className="team-member">
                        <img src="/assets/images/partner/pegadaian.png" alt="Partner 4" className="img-fluid" />
                    </div>
                    {/* Add more items as needed */}
                </Slider>
            </div>
        </div>
    );
};

export default OurPartners;
