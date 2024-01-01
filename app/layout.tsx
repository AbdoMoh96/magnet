import React from 'react';
import Script from "next/script";
import '/public/assets/css/style.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
    <head>
        <meta charSet="UTF-8"/>
          <meta content="Softnio" name="author"/>
           <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
           <link href="https://nioland.themenio.com/images/favicon.png" rel="shortcut icon"/>
           <title></title>
           <link crossOrigin="use-credentials" href="https://fonts.googleapis.com" rel="preconnect"/>
           <link href="https://fonts.gstatic.com" rel="preconnect"/>
           <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@200;300;400;500;600;700;800;900&amp;display=swa" rel="stylesheet"/>
      </head>
      <body className="nk-body">
      <div className="preloader">
        <div className="loader"></div>
      </div>
      <div className="nk-app-root home-business-expense-tracker">
        <header className="nk-header">
          <div className="nk-header-main">
            <div className="container">
              <div className="nk-header-wrap">
                <div className="nk-header-logo"><a className="logo-link" href="https://nioland.themenio.com/index.html">
                  <div className="logo-wrap"><img alt="brand-logo"
                                                  className="logo-img"
                                                  src="https://nioland.themenio.com/images/logo-s2-dark.png"
                                                  srcSet="https://nioland.themenio.com/images/logo-s2-dark2x.png 2x"/>
                  </div>
                </a></div>
                <nav className="nk-header-menu nk-navbar">
                  <div>
                    <ul className="nk-nav">
                      <li className="nk-nav-item has-sub"><a className="nk-nav-link nk-nav-toggle" href="#"><span
                          className="nk-nav-text">Homepages</span></a>
                        <ul className="nk-nav-sub nk-nav-mega nk-nav-mega-lg nk-nav-mega-lg-home">
                          <li className="nk-nav-item">
                            <ul className="row mx-auto">
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-analytics.html">
                                <div className="media-group">
                                  <div className="text-primary me-3"><em
                                      className="icon ni ni-pie-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Analytics SAAS</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">All in One analytics tool</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-kids-course.html">
                                <div className="media-group">
                                  <div className="text-danger me-3"><em
                                      className="icon ni ni-book-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">Kids
                                      Course Startup</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Super Courses for Super Kids</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-collaboration-tool.html">
                                <div className="media-group">
                                  <div className="text-info me-3"><em
                                      className="icon ni ni-users-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Collaboration tool</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Secure team management</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-business-expense-tracker.html">
                                <div className="media-group">
                                  <div className="text-warning me-3"><em
                                      className="icon ni ni-building-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Business Expense Tracker</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Track business performance</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-live-chat-app.html">
                                <div className="media-group">
                                  <div className="text-success me-3"><em
                                      className="icon ni ni-chat-circle-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">Live
                                      Chat App Software</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Connect with customers</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-business-solution.html">
                                <div className="media-group">
                                  <div className="text-primary me-3"><em
                                      className="icon ni ni-db-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Business Solutions</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Empowering Business Growth</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-saas.html">
                                <div className="media-group">
                                  <div className="text-danger me-3"><em
                                      className="icon ni ni-bar-chart-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Business Expenses</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Cost Managment Tool</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-digital-business-saas.html">
                                <div className="media-group">
                                  <div className="text-success me-3"><em
                                      className="icon ni ni-cloud-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">Digital
                                      Business SAAS</h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Streamline Business Operations</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-crypto-profile.html">
                                <div className="media-group">
                                  <div className="text-warning me-3"><em
                                      className="icon ni ni-sign-btc-alt"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0"> Crypto
                                      Profile </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Manage your crypto assets</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-business-management.html">
                                <div className="media-group">
                                  <div className="text-blue-800 me-3"><em
                                      className="icon ni ni-package-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Business Management </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Smart business tool</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-business-subscription.html">
                                <div className="media-group">
                                  <div className="text-danger me-3"><em
                                      className="icon ni ni-coin-alt-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Business Subscription </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">grow business with subscription</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-data-driven.html">
                                <div className="media-group">
                                  <div className="text-primary me-3"><em
                                      className="icon ni ni-growth-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Data-driven Business </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">business analysis tool</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-language-learning.html">
                                <div className="media-group">
                                  <div className="text-cyan-200 me-3"><em
                                      className="icon ni ni-file-text-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Language Learning </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">grow business with subscription</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-project-management.html">
                                <div className="media-group">
                                  <div className="text-blue-1400 me-3"><em
                                      className="icon ni ni-presentation-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Project Management </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Easy As Ever Before</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-coaching-service.html">
                                <div className="media-group">
                                  <div className="text-purple me-3"><em
                                      className="icon ni ni-puzzle-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Coaching Service </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Grow Faster With A Coach</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-project-manage.html">
                                <div className="media-group">
                                  <div className="text-green-400 me-3"><em
                                      className="icon ni ni-pie-2-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Project Manage </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Growth For Your Startup</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-business-analytics.html">
                                <div className="media-group">
                                  <div className="text-red me-3"><em
                                      className="icon ni ni-activity-round-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Business Analytics </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">One Stop Solution</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-codebase.html">
                                <div className="media-group">
                                  <div className="text-green-500 me-3"><em
                                      className="icon ni ni-file-code-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2 className="lead-text fs-14 text-capitalize m-0">
                                      Codebase IDE </h2><span
                                        className="sub-text text-nowrap text-capitalize m-0">Integrate Your Relighble Codebase</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-help-desk.html">
                                <div className="media-group">
                                  <div className="text-blue me-3"><em
                                      className="icon ni ni-support-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2
                                        className="d-flex align-items-center gap-1 lead-text fs-14 text-capitalize m-0">
                                      Help Desk <span
                                        className="badge rounded-pill text-bg-primary text-uppercase fs-8 ms-1">NEW</span>
                                    </h2><span className="sub-text text-nowrap text-capitalize m-0">Tech Support Made Simple</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-business-consulting.html">
                                <div className="media-group">
                                  <div className="text-purple-800 me-3"><em
                                      className="icon ni ni-cards-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2
                                        className="d-flex align-items-center gap-1 lead-text fs-14 text-capitalize m-0">
                                      Business Consulting <span
                                        className="badge rounded-pill text-bg-primary text-uppercase fs-8 ms-1">NEW</span>
                                    </h2><span className="sub-text text-nowrap text-capitalize m-0">Business growth consulting expertise.</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-fintech.html">
                                <div className="media-group">
                                  <div className="text-purple-800 me-3"><em
                                      className="icon ni ni-opt-alt-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2
                                        className="d-flex align-items-center gap-1 lead-text fs-14 text-capitalize m-0">
                                      Fintech <span
                                        className="badge rounded-pill text-bg-primary text-uppercase fs-8 ms-1">NEW</span>
                                    </h2><span className="sub-text text-nowrap text-capitalize m-0">Business growth consulting expertise.</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-green-tech.html">
                                <div className="media-group">
                                  <div className="text-green me-3"><em
                                      className="icon ni ni-apple-store-ios"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2
                                        className="d-flex align-items-center gap-1 lead-text fs-14 text-capitalize m-0">
                                      Green Tech <span
                                        className="badge rounded-pill text-bg-primary text-uppercase fs-8 ms-1">NEW</span>
                                    </h2><span className="sub-text text-nowrap text-capitalize m-0">Sustainable green tech solutions.</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                              <li className="col-lg-6 col-xl-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/index-podcast-app.html">
                                <div className="media-group">
                                  <div className="text-blue-1000 me-3"><em
                                      className="icon ni ni-headphone-fill"></em></div>
                                  <div className="media-text d-flex align-items-center sm">
                                    <div><h2
                                        className="d-flex align-items-center gap-1 lead-text fs-14 text-capitalize m-0">
                                      Podcast App <span
                                        className="badge rounded-pill text-bg-primary text-uppercase fs-8 ms-1">NEW</span>
                                    </h2><span className="sub-text text-nowrap text-capitalize m-0">Podcast streaming made easy.</span>
                                    </div>
                                  </div>
                                </div>
                              </a></li>
                            </ul>
                          </li>
                        </ul>
                      </li>
                      <li className="nk-nav-item"><a className="nk-nav-link"
                                                     href="https://nioland.themenio.com/about.html"><span
                          className="nk-nav-text">About</span></a></li>
                      <li className="nk-nav-item has-sub"><a className="nk-nav-link nk-nav-toggle" href="#"><span
                          className="nk-nav-text">Pages</span></a>
                        <ul className="nk-nav-sub nk-nav-mega row nk-nav-mega-lg">
                          <li className="nk-nav-item col-lg-8">
                            <ul className="row px-3 px-lg-0 mx-auto">
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/about.html"> About </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/about-business-solution.html">
                                About - v2 </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/page-404.html"> 404
                                Error </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/features.html"> Features </a>
                              </li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/features-business-solution.html">
                                Features -v2 </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/customer-testimonials.html">
                                Testimonials </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/contact-us.html"> Contact
                                Us </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/contact-us-business-solution.html">
                                Contact Us -v2 </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/login.html"> Login </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/pricing.html"> Pricing </a>
                              </li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/pricing-business-solution.html">
                                Pricing -v2 </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/signup.html"> Sign Up </a>
                              </li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/blogs.html"> Blogs </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/blog-single.html"> Blog
                                Single </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/reset-password.html"> Reset
                                Password </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/help-center.html"> Help
                                Center </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/help-center-single.html">
                                Help Center Single </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/forgot-password.html"> Forgot
                                Password </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/terms-and-conditions.html">
                                Terms &amp; Conditions </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/careers.html"> Careers </a>
                              </li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/career-details.html"> Career
                                Details </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/careers-project-manage.html">
                                Careers-v2 </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link d-flex align-items-center text-nowrap"
                                  href="https://nioland.themenio.com/career-details-project-manage.html">
                                Careers Details-v2 </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/shop.html"> Shop </a></li>
                              <li className="col-lg-4 p-0"><a
                                  className="nk-nav-link"
                                  href="https://nioland.themenio.com/product-details.html">
                                Product Details </a></li>
                            </ul>
                          </li>
                          <li className="nk-nav-item col-lg-4 nk-nav-media d-none d-lg-block"><a
                              href="https://1.envato.market/NioLand" target="_blank"><img
                              alt="promo-banner"
                              className="rounded-3"
                              src="https://nioland.themenio.com/images/promo-banner/promo-1.png"/></a>
                          </li>
                        </ul>
                      </li>
                      <li className="nk-nav-item"><a className="nk-nav-link"
                                                     href="https://nioland.themenio.com/blogs.html"><span
                          className="nk-nav-text">Blogs</span></a></li>
                      <li className="nk-nav-item"><a className="nk-nav-link"
                                                     href="https://nioland.themenio.com/contact-us.html"><span
                          className="nk-nav-text">Contact</span></a>
                      </li>
                    </ul>
                    <div className="nk-navbar-btn d-lg-none">
                      <ul className="nk-btn-group sm justify-content-center">
                        <li className="w-100"><a className="btn btn-primary w-100"
                                                 href="https://1.envato.market/NioLand"
                                                 target="_blank"><em
                            className="icon ni ni-bag-fill"></em><span>Purchase Now</span></a></li>
                      </ul>
                    </div>
                  </div>
                </nav>
                <div className="nk-header-action">
                  <ul className="nk-btn-group sm justify-content-center">
                    <li className="d-none d-md-block"><a className="btn btn-outline-dark"
                                                         href="https://1.envato.market/NioLand"><em
                        className="icon ni ni-bag"></em><span>Purchase Now</span></a></li>
                    <li className="nk-navbar-toggle">
                      <button className="btn btn-outline-dark navbar-toggle rounded-1 h-100 p-2"><em
                          className="icon ni ni-menu"></em></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>
        <main className="nk-pages">
          {children}
        </main>
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
        <a className="scroll-top shadow animate animate-infinite animate-pulse animate-duration-2 active" href="#"><em
            className="icon ni ni-chevrons-up"></em></a>
        <div className="nk-sticky-badge">
          <ul>
            <li><a className="nk-sticky-badge-icon nk-sticky-badge-home" data-bs-custom-class="nk-tooltip"
                   data-bs-placement="right" data-bs-title="View Demo" data-bs-toggle="tooltip"
                   href="https://nioland.themenio.com/index.html" target="_blank"><em
                className="icon ni ni-home-fill"></em></a></li>
            <li><a aria-label="Purchase Now" className="nk-sticky-badge-icon nk-sticky-badge-purchase"
                   data-bs-custom-class="nk-tooltip" data-bs-title="Purchase Now"
                   data-bs-toggle="tooltip" href="https://1.envato.market/NioLand" target="_blank"><em
                className="icon ni ni-cart-fill"></em></a></li>
          </ul>
        </div>
      </div>
      <Script src="/assets/js/bundle.js" strategy="afterInteractive"></Script>
      <Script src="/assets/js/script.js" strategy="afterInteractive"></Script>
      </body>
      </html>
  )
}
