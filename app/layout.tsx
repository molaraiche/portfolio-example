import type { Metadata } from "next";
import "./globals.css";
import {
  Roboto,
  Playfair_Display,
  Nunito,
  Comfortaa,
  Raleway,
} from "next/font/google";
import Navbar from "@/components/Navbar";
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});
const PD = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-PD",
});
const nunito = Nunito({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "700", "800", "900", "1000"],
  variable: "--font-nunito",
});
const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-comfortaa",
});
const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-raleway",
});
export const metadata: Metadata = {
  title: "Portfolio | molaraiche",
  description:
    "this is a work example for portfolio can provided by the developer molaraiche",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.variable} ${PD.variable} ${nunito.variable} ${comfortaa.variable} ${raleway.variable} bg-bg/gray antialiased`}>
        <svg
          className='yellow'
          xmlns='http://www.w3.org/2000/svg'
          width='720'
          height='629'
          viewBox='0 0 720 629'
          fill='none'>
          <path
            fillRule='evenodd'
            clipRule='evenodd'
            d='M426.755 -247.339C526.01 -242.623 630.416 -205.737 691.019 -128.942C747.053 -57.9359 709.403 42.8884 725.408 131.114C738.276 202.044 786.302 264.961 775.404 336.204C763.332 415.132 724.842 490.453 662.532 542.186C597.271 596.368 510.835 641.895 426.755 625.671C345.261 609.947 319.875 506.823 250.249 462.635C174.069 414.287 41.2528 440.785 6.43092 358.913C-27.6816 278.71 83.9568 208.257 106.308 124.209C131.067 31.1084 79.6084 -81.3667 143.094 -154.976C208.865 -231.236 324.689 -252.189 426.755 -247.339Z'
            fill='#FDC435'
          />
        </svg>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
