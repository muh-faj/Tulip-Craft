//import React
import React from "react";

//import usePage
import { usePage } from '@inertiajs/react';

export default function Slider() {

    //destruct props sliders
    const { sliders } = usePage().props

    return (
        <>
            <div className="container mt-5">
                <div className="fade-in">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                                <div className="carousel-inner">
                                    {sliders.map((slider, index) => (
                                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                                            <img src={slider.image} className="d-block w-100 img-carousel rounded-3" alt={`Slide ${index + 1}`} />
                                        </div>
                                    ))}
                                </div>
                                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <i className="fa fa-long-arrow-alt-left carousel-custom text-dark shadow"></i>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <i className="fa fa-long-arrow-alt-right carousel-custom text-dark shadow"></i>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}