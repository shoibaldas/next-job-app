// app/layout.js
import localFont from "next/font/local";
import "./globals.css";
import { Roboto } from "next/font/google"

const roboto = Roboto({
  subsets: ["latin"], 
  weight: ["100", "300", "400", "500", "700", "900"],
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
        {children}
      </body>
    </html>
  );
}