// //import React
// import React, { useState } from "react";

// //import link, usePage
// import { Link, usePage } from '@inertiajs/react';

// //import axios
// import axios from "axios";

// export default function Menu() {

//     //destruct props "dataCarts"
//     const { dataCarts } = usePage().props

//     //define state
//     const [products, setProducts] = useState([]);
//     const [isLoading, setIsLoading] = useState(false);

//     //define method "searchhandler"
//     const searchHandler = (e) => {

//         //set isLoading to true
//         setIsLoading(true);

//         //set products to null
//         setProducts([]);

//         axios.post(`/search`, {
//             q: e.target.value
//         })
//             .then(response => {

//                 //set isLoading to false
//                 setIsLoading(false);

//                 //set response to state
//                 setProducts(response.data.products);
//             })
//     }

//     return (
//         <>
//             <nav className="navbar navbar-dark bg-green shadow navbar-expand fixed-bottom p-0">
//                 <div className="container">
//                     <ul className="navbar-nav nav-justified justify-content-center justify-item-center w-100">
//                         <li className="nav-item">
//                             <Link href="/" className="nav-link text-white fw-bold">
//                                 <svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-house" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
//                                     <path fillRule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z" />
//                                     <path fillRule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z" />
//                                 </svg>
//                                 <span className="small d-block">Home</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item">
//                             <Link href="#" data-bs-toggle="modal" data-bs-target="#search" className="nav-link text-white fw-bold">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
//                                     <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
//                                 </svg>
//                                 <span className="small d-block">Search</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item dropup">
//                             <Link href="/carts" className="nav-link text-white fw-bold">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-cart" viewBox="0 0 16 16">
//                                     <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
//                                 </svg>
//                                 {dataCarts
//                                     ? <span className='badge badge-warning rounded-pill shadow' id='count-cart'>{dataCarts.total}</span>
//                                     : <span className='badge badge-warning rounded-pill shadow' id='count-cart'>0</span>
//                                 }
//                                 <span className="small d-block">Shopping Cart</span>
//                             </Link>
//                         </li>
//                         <li className="nav-item dropup">
//                             <Link href="/login" className="nav-link text-white fw-bold">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 16 16">
//                                     <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
//                                     <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
//                                 </svg>
//                                 <span className="small d-block">Account</span>
//                             </Link>
//                         </li>
//                     </ul>
//                 </div>
//             </nav>

//             {/** modal */}
//             <div className="modal fade" id="search" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Search</h5>
//                             <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//                         </div>
//                         <div className="modal-body">
//                             <div className="input-group">
//                                 <input type="text" className="form-control" onChange={((e) => searchHandler(e))} placeholder="search product here..." />
//                             </div>
//                         </div>
//                         <div className="modal-body" style={{ height: '300px', overflow: 'auto' }}>
//                             {isLoading &&
//                                 <div className="justify-content-center mb-3 text-center">
//                                     <div className="spinner-border text-success" role="status">
//                                         <span className="visually-hidden">Loading...</span>
//                                     </div>
//                                     <h6 className="mt-2">Loading...</h6>
//                                 </div>
//                             }

//                             {
//                                 products.map((product, index) => (
//                                     <a href={`/products/${product.slug}`} className="text-decoration-none text-dark" key={index}>
//                                         <div className="card border-0 shadow-sm rounded-3 bg-light mb-3">
//                                             <div className="card-body">
//                                                 {product.title}
//                                             </div>
//                                         </div>
//                                     </a>
//                                 ))
//                             }
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     )

// }


import React from "react";
import { Link } from '@inertiajs/react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

export default function Menu() {
    return (
        <footer className="footer-section pt-4 pb-2">
            <div className="container">
                <div className="row mb-4">

                    <div className="footer-logo-wrap mb-4">
                        <img src="/assets/images/logo-tulip.png" width="130" alt="Logo" />
                    </div>

                    <div className="col-lg-4">
                        
                        <p className="mb-4">Perumahan Bogor Raya Permai Blok FD IV no 10, RT.01/RW.12, Curug, Kec. Bogor Bar., Kota Bogor, Jawa Barat 16113</p>
                        <p className="mb-4">
                            <strong>Jam Operasional :</strong><br />
                            Senin - Jumat : 08.00 - 17.00 WIB <br />
                            Minggu / hari besar : Tutup
                        </p>
                        <p className="text-muted">*Diluar jam operasional mohon maaf pelayanan kami tidak secepat jam operasional</p>

                        <ul className="list-unstyled d-flex justify-content-start mt-3 custom-social">
                            <li><a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><span className="fa fa-brands fa-facebook-f"></span></a></li>
                            <li><a href="https://x.com/" target="_blank" rel="noopener noreferrer"><span className="fa fa-brands fa-twitter"></span></a></li>
                            <li><a href="https://www.instagram.com/tulipbag.id/" target="_blank" rel="noopener noreferrer"><span className="fa fa-brands fa-instagram"></span></a></li>
                            <li><a href="https://id.linkedin.com/company/pt-tulip-diandra-raya" target="_blank" rel="noopener noreferrer"><span className="fa fa-brands fa-linkedin"></span></a></li>
                        </ul>
                    </div>

                    <div className="col-lg-8">
                        <div className="row">
                            <div className="col-md-6 col-lg-4">
                                <h5 className="footer-heading">Quick Links</h5>
                                <ul className="list-unstyled">
                                    <li><Link href="/" className="text-dark">Home</Link></li>
                                    <li><Link href="/products" className="text-dark">Product</Link></li>
                                    <li><Link href="#About-us" className="text-dark">About us</Link></li>
                                    {/* <li><Link href="#" className="text-dark">Blog</Link></li> */}
                                    <li><Link href="#" className="text-dark">Contact us</Link></li>
                                </ul>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <h5 className="footer-heading">Subscribe</h5>
                                <p>Daftarkan Email Anda untuk mendapatkan informasi terbaru, berita, atau promosi.</p>
                                <form action="#" className="row g-2">
                                    <div className="col-12 mb-2">
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="col-12 mb-2">
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="col-12">
                                        <button className="btn btn-primary w-100">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-top pt-3 mt-3">
                    <p className="mb-0 text-center text-muted">
                        &copy; {new Date().getFullYear()} Tulip Craft. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
