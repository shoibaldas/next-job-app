import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google"
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"], weight: ["100", "300", "400", "500", "700", "900"],
  variable: '--font-roboto'
})

export const metadata = {
  title: "ICEL TECH",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
          <Header/>
          <PageTransition>
            {children}
          </PageTransition>
          <Footer/>
      </body>
    </html>
  );
}