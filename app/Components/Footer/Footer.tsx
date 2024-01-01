import React from 'react';

interface propTypes {}

const Footer : React.FC<propTypes> = () => {


    return (
        <footer className="nk-footer">
            <div className="nk-footer-top">
                <div className="container">
                    <div className="nk-footer-content row justify-content-xl-between">
                        <div className="col-md-8 col-lg-4 col-xxl-4">
                            <div className="nk-footer-brand pb-5 pb-lg-0">
                                <div className="nk-footer-brand-info mb-4">
                                    <div className="nk-footer-logo"><a className="logo-link"
                                                                       href="https://nioland.themenio.com/index.html">
                                        <div className="logo-wrap"><img alt="brand-logo"
                                                                        className="logo-img"
                                                                        src="https://nioland.themenio.com/images/logo-s2-dark.png"
                                                                        srcSet="https://nioland.themenio.com/images/logo-s2-dark2x.png 2x"/>
                                        </div>
                                    </a></div>
                                    <p>Streamline your business operations with our powerful suite of solutions. Boost
                                        productivity and drive growth with NioLand.</p></div>
                                <ul className="nk-footer-social">
                                    <li><a href="#"><em className="icon ni ni-facebook-f"></em></a></li>
                                    <li><a href="#"><em className="icon ni ni-twitter"></em></a></li>
                                    <li><a href="#"><em className="icon ni ni-linkedin"></em></a></li>
                                    <li><a href="#"><em className="icon ni ni-telegram"></em></a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-8 col-xxl-6">
                            <div className="row justify-content-between">
                                <div className="col-sm-8 col-md-7">
                                    <div className="nk-footer-info"><h5 className="title">Pages</h5>
                                        <ul className="row gy-1 gy-sm-4">
                                            <li className="col-6"><a
                                                href="https://nioland.themenio.com/features.html">Features</a></li>
                                            <li className="col-6"><a href="https://nioland.themenio.com/about.html">About</a>
                                            </li>
                                            <li className="col-6"><a
                                                href="https://nioland.themenio.com/pricing.html">Pricing</a></li>
                                            <li className="col-6"><a href="https://nioland.themenio.com/blogs.html">Blog</a>
                                            </li>
                                            <li className="col-6"><a href="https://nioland.themenio.com/blog-single.html">Blog
                                                Post</a></li>
                                            <li className="col-6"><a
                                                href="https://nioland.themenio.com/customer-testimonials.html">Customer
                                                Reviews</a></li>
                                            <li className="col-6"><a href="https://nioland.themenio.com/help-center.html">Help
                                                Center</a></li>
                                            <li className="col-6"><a
                                                href="https://nioland.themenio.com/contact-us.html">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="nk-footer-info"><h5 className="title">Utility Pages</h5>
                                        <ul className="row gy-1 gy-sm-4">
                                            <li className="col-12"><a href="https://nioland.themenio.com/login.html">Login</a>
                                            </li>
                                            <li className="col-12"><a href="https://nioland.themenio.com/signup.html">Sign
                                                up</a></li>
                                            <li className="col-12"><a href="https://nioland.themenio.com/reset-password.html">Reset
                                                Password</a></li>
                                            <li className="col-12"><a href="https://nioland.themenio.com/page-404.html">404 Not
                                                Found</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="nk-footer-bottom">
                <div className="container">
                    <div className="nk-footer-content row justify-content-between">
                        <div className="col-lg-6 px-0"><p className="nk-footer-copyright-text text-center text-lg-start">© 2011
                            -
                            <span id="currentYear">2023</span><a className="fs-16" href="https://softnio.com/" target="_blank">
                                Softnio</a>. All Rights Reserved.</p></div>
                        <div className="col-lg-6 px-0">
                            <ul className="nk-footer-copyright justify-content-center justify-content-lg-end">
                                <li><a className="nk-footer-text" href="#">All Rights</a></li>
                                <li><a className="nk-footer-text" href="#">Terms &amp; conditions</a></li>
                                <li><a className="nk-footer-text" href="#">Privacy Policy</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;