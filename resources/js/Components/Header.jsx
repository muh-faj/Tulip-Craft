// //import React
// import React from "react";

// //import Link
// import { Link } from '@inertiajs/react';

// export default function Header() {

//     return (
//         <>
//             <nav className="navbar-expand-md navbar-dark fixed-top bg-green shadow">
//                 <div className="container">
//                     <div className="row justify-content-center">
//                         <div className="col-md-8">
//                             <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-1">
//                                 <Link href="/" className="d-flex align-items-center col-md-12 mb-2 mb-md-0 text-white text-decoration-none">
//                                     <img src="/assets/images/logo-tulip.png" width="100" />
//                                     <h5 className="mb-0"><strong>TULIP </strong> CRAFT-BGR</h5>
//                                 </Link>
//                             </header>
//                         </div>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )

// }


//import React
import React, { useState } from "react";

//import link, usePage
import { Link, usePage } from '@inertiajs/react';

//import axios
import axios from "axios";

export default function CustomNavbar() {

    //destruct props "dataCarts"
    const { dataCarts } = usePage().props

    //define state
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    //define method "searchhandler"
    const searchHandler = (e) => {

        //set isLoading to true
        setIsLoading(true);

        //set products to null
        setProducts([]);

        axios.post(`/search`, {
            q: e.target.value
        })
            .then(response => {

                //set isLoading to false
                setIsLoading(false);

                //set response to state
                setProducts(response.data.products);
            })
    }

    // Dapatkan URL halaman saat ini dari usePage
    const { url } = usePage();

    // Fungsi untuk menentukan apakah link aktif
    const isActive = (path) => url === path ? 'active' : '';

    return (
        <>
            <nav className="custom-navbar navbar navbar-expand-md navbar-dark" aria-label="Furni navigation bar">
                <div className="container">
                    <Link className="log-link" href="/"><img src="/assets/images/logo-tulip.png" width="130" alt="Logo" /></Link> 
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsTulip" aria-controls="navbarsTulip" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarsTulip">
                        <ul className="custom-navbar-nav navbar-nav ms-auto mb-2 mb-md-0">
                            <li className={`nav-item ${isActive('/')}`}>
                                <Link className="nav-link" href="/">Home</Link>
                            </li>
                            <li className={`nav-item ${isActive('/products')}`}>
                                <Link className="nav-link" href="/products">Product</Link>
                            </li>
                            <li>
                                <Link className="nav-link" href="#About-us">About Us</Link>
                            </li>
                            <li>
                                <Link className="nav-link" href="#contact-us">Contact</Link>
                            </li>
                            <li className="nav-item">
                                <Link href="#" data-bs-toggle="modal" data-bs-target="#search" className="nav-link text-white">
                                    Search
                                </Link>
                            </li>
                        </ul>
                        <ul className="custom-navbar-cta navbar-nav mb-2 mb-md-0 ms-5">
                            <li className="nav-item">
                                <Link href="/login" className="nav-link text-white fw-bold">
                                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M17 19V17C17 15.9391 16.5786 14.9217 15.8284 14.1716C15.0783 13.4214 14.0609 13 13 13H5C3.93913 13 2.92172 13.4214 2.17157 14.1716C1.42143 14.9217 1 15.9391 1 17V19" stroke="#8D493A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 9C11.2091 9 13 7.20914 13 5C13 2.79086 11.2091 1 9 1C6.79086 1 5 2.79086 5 5C5 7.20914 6.79086 9 9 9Z" stroke="#8D493A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link href="/carts" className="nav-link text-white fw-bold">
                                    <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20 22C20.5523 22 21 21.5523 21 21C21 20.4477 20.5523 20 20 20C19.4477 20 19 20.4477 19 21C19 21.5523 19.4477 22 20 22Z" stroke="#8D493A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M9 22C9.55228 22 10 21.5523 10 21C10 20.4477 9.55228 20 9 20C8.44772 20 8 20.4477 8 21C8 21.5523 8.44772 22 9 22Z" stroke="#8D493A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                        <path d="M1 1H5L7.68 14.39C7.77144 14.8504 8.02191 15.264 8.38755 15.5583C8.75318 15.8526 9.2107 16.009 9.68 16H19.4C19.8693 16.009 20.3268 15.8526 20.6925 15.5583C21.0581 15.264 21.3086 14.8504 21.4 14.39L23 6H6" stroke="#8D493A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    </svg>
                                    {dataCarts
                                        ? <span className='badge badge-warning rounded-pill shadow' id='count-cart'>{dataCarts.total}</span>
                                        : <span className='badge badge-warning rounded-pill shadow' id='count-cart'>0</span>
                                    }
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/** modal */}
            <div className="modal fade" id="search" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Search</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="input-group">
                                <input type="text" className="form-control" onChange={((e) => searchHandler(e))} placeholder="search product here..." />
                            </div>
                        </div>
                        <div className="modal-body" style={{ height: '300px', overflow: 'auto' }}>
                            {isLoading &&
                                <div className="justify-content-center mb-3 text-center">
                                    <div className="spinner-border text-success" role="status">
                                        <span className="visually-hidden">Loading...</span>
                                    </div>
                                    <h6 className="mt-2">Loading...</h6>
                                </div>
                            }

                            {
                                products.map((product, index) => (
                                    <a href={`/products/${product.slug}`} className="text-decoration-none text-dark" key={index}>
                                        <div className="card border-0 shadow-sm rounded-3 mb-3">
                                            <div className="card-body">
                                                {product.title}
                                            </div>
                                        </div>
                                    </a>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


