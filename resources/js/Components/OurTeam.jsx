import React from 'react';
import Slider from 'react-slick';
// import './OurTeam.css'; // Custom CSS file for this component

const teamMembers = [
    { name: "Azmi", position: "Tim Produksi", image: "/assets/images/team/Azmi_Produksi.png" },
    { name: "Mira", position: "Tim sales", image: "/assets/images/team/Mira_Sales.png" },
    { name: "Dimas", position: "Tim Kreatif", image: "/assets/images/team/Dimas_Kreatif.png" },
    { name: "Irpan", position: "Tim Marketing", image: "/assets/images/team/Irpan_Marketing.png" },
    { name: "Shinta", position: "Finance", image: "/assets/images/team/Shinta_SalesFinance.png" }
];

const OurTeam = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,  // Menambahkan autoplay
        autoplaySpeed: 2000,  // Kecepatan dalam milidetik (3 detik)
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div className="our-team-section">
            <h2 className="section-title text-center">Meet Our Team</h2>
            <div className="team-container">
                <Slider {...settings}>
                    {teamMembers.map((member, index) => (
                        <div key={index} className="team-member">
                            <img src={member.image} alt={member.name} className="team-image" />
                            <div className="team-info">
                                <h3>{member.name}</h3>
                                <p>{member.position}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default OurTeam;