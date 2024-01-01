import React from 'react';
import Script from "next/script";
import Nav from "@/app/Components/Nav";
import Footer from "@/app/Components/Footer";
import Image from "next/image";
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
                  <div className="logo-wrap">
                    <Image alt="brand-logo"
                           width={200}
                           height={80}
                           src="/assets/images/magnet_logo_transparent.png"/>
                  </div>
                </a></div>
                <Nav/>
              </div>
            </div>
          </div>
        </header>
        <main className="nk-pages">
          {children}
        </main>
        <Footer/>
        <a className="scroll-top shadow animate animate-infinite animate-pulse animate-duration-2 active" href="#"><em
            className="icon ni ni-chevrons-up"></em></a>
      </div>
      <Script src="/assets/js/bundle.js" strategy="afterInteractive"></Script>
      <Script src="/assets/js/script.js" strategy="afterInteractive"></Script>
      </body>
      </html>
  )
}
