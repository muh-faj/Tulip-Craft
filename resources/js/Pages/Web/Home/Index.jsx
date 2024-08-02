//import React
import React, { useState, useEffect } from "react";

//import layout web
import LayoutWeb from '../../../Layouts/Web';

//import Head, usePage, Link
import { Head, usePage, Link } from '@inertiajs/react';

//import component slider
import Slider from '../../../Components/Slider';

import OurTeam from '../../../Components/OurTeam'; // Import the new component

//import component ourparner
import OurPartnerSlider from '../../../Components/Ourpartner';

//import component card category
import CardCategory from '../../../Shared/CardCategory';

//import component slider
import CardProduct from '../../../Shared/CardProduct';

export default function HomeIndex() {

    //destruct props "sliders", "categories", "products"
    const { sliders, categories, products } = usePage().props;

    // Fungsi untuk menggulir ke atas
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    // Tambahkan state untuk visibilitas tombol
    const [isVisible, setIsVisible] = useState(false);

    // Effect untuk memeriksa scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) { // Ganti dengan nilai scroll yang sesuai
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <Head>
                <title>Tulip Craft</title>
            </Head>
            <LayoutWeb>

                <Slider sliders={sliders} />

                <div className="container-fluid mt-4 mb-5">
                    <div className="fade-in">
                        <div className="row justify-content-center">
                            <div className="col-md-8">

                                {/* categories */}
                                <div className="row justify-content-between mb-3">
                                    <div className="col-md-6 col-6 text-start"><strong> Categories</strong></div>
                                    <div className="col-md-6 col-6 text-end">
                                        <Link href="/categories" className="text-dark"><strong>See More <i className="fa fa-long-arrow-alt-right"></i></strong></Link>
                                    </div>
                                </div>

                                <div className="row justify-content-center">
                                    {categories.map((category, index) => (
                                        <CardCategory category={category} key={index} />
                                    ))}
                                </div>

                                {/* products */}
                                <div className="row justify-content-between mb-3 mt-4">
                                    <div className="col-md-6 col-6 text-start"><strong> Latest Products</strong></div>
                                    <div className="col-md-6 col-6 text-end">
                                        <Link href="/products" className="text-dark"><strong>See More <i className="fa fa-long-arrow-alt-right"></i></strong></Link>
                                    </div>
                                </div>

                                <div className="row mb-5">
                                    {products.map((product, index) => (
                                        <CardProduct product={product} key={index} />
                                    ))}
                                </div>

                                {/* <!-- Start Why Choose Us Section --> */}
                                <div id="About-us" className="why-choose-section">
                                    <div className="container">
                                        <div className="row justify-content-between">
                                            <div className="col-lg-6">
                                                <h2 className="section-title">Mengapa Harus Tulipbag ?</h2>
                                                <p>Tulipbag adalah spesialis dan ekspotir Tas Spunbond sebagai gantinya kantong plastik sejak 2016. Sebagai Spesialis Goodiebag, Tas Seminar, Promosi & Lebaran.</p>

                                                <div className="row my-5">
                                                    <div className="col-6 col-md-6">
                                                        <div className="feature">
                                                            <div className="icon">
                                                                <img src="/assets/images/trust.svg" alt="Image" className="img-fluid" />
                                                            </div>
                                                            <h3>Top Material Quality</h3>
                                                            <p>Export Quality Since 2016.</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-6 col-md-6">
                                                        <div className="feature">
                                                            <div className="icon">
                                                                <img src="/assets/images/bag.svg" alt="Image" className="img-fluid" />
                                                            </div>
                                                            <h3>Customize</h3>
                                                            <p>Custom Size and Design in Lowest Quality.</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-6 col-md-6">
                                                        <div className="feature">
                                                            <div className="icon">
                                                                <img src="/assets/images/support.svg" alt="Image" className="img-fluid" />
                                                            </div>
                                                            <h3>Legalitas Lengkap</h3>
                                                            <p>Telah Terdaftar di Kemenkumham.</p>
                                                        </div>
                                                    </div>

                                                    <div className="col-6 col-md-6">
                                                        <div className="feature">
                                                            <div className="icon">
                                                                <img src="/assets/images/return.svg" alt="Image" className="img-fluid" />
                                                            </div>
                                                            <h3>Terpercaya</h3>
                                                            <p>Sudah Terjual +5 juta pcs.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>

                                            <div className="col-lg-5">
                                                <div className="img-wrap">
                                                    <img src="/assets/images/why-choose-us-img.png" alt="Image" className="img-fluid" />
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                {/* <!-- End Why Choose Us Section --> */}

                                {/* Start Our Team Section */}
                                <OurTeam />
                                {/* End Our Team Section */}

                                {/* Contact Us Section */}
                                <div id="contact-us" className="contact-us-section mt-5">
                                    <div className="container">
                                        <h2 className="section-title text-center">Contact Us</h2>
                                        <div className="row">
                                            <div className="col-md-6 mb-4">
                                                <h5 className="contact-heading">Get in Touch</h5>
                                                <p>Have any questions or need assistance? Feel free to reach out to us through the form below or contact us directly at:</p>
                                                <ul className="contact-info list-unstyled">
                                                    <li><i className="fa fa-map-marker-alt"></i> Perumahan Bogor Raya Permai Blok FD IV no 10, RT.01/RW.12, Curug, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16113</li>
                                                    <li><i className="fa fa-phone"></i> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Admin 1: +62 812-7774-8853</a></li>
                                                    <li><i className="fa fa-phone"></i> <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">Admin 2: +62 812-1938-5414</a></li>
                                                    <li><i className="fa fa-envelope"></i> <a href="mailto:adminsupport@tulipbag.id">adminsupport@tulipbag.id</a></li>
                                                </ul>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="map-wrap">
                                                    <iframe 
                                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1178.4337265564313!2d106.77070389290401!3d-6.5516049151851385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c5a8459a545b%3A0x81b8500c7c04cc03!2sTulipbag!5e0!3m2!1sid!2sid!4v1721916018018!5m2!1sid!2sid" 
                                                        width="100%" 
                                                        height="350" 
                                                        style={{border: 0}} 
                                                        allowFullScreen="" 
                                                        loading="lazy"
                                                    ></iframe>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* end */}
                                
                                {/* Start Our Partner Section */}
                                <OurPartnerSlider />
                                {/* End Our Partner Section */}

                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll to Top Button */}
                <div className={`scroll-to-top ${isVisible ? 'show' : ''}`}>
                    <button onClick={scrollToTop} className="btn btn-primary" href="/">
                        <i className="fa fa-chevron-up"></i>
                    </button>
                </div>
            </LayoutWeb>

        </>
    )

}