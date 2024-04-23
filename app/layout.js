import { Inter } from "next/font/google";
import "./globals.css";
// Components imported here
import Navbar from "../components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Get me a chai!",
    description: "Creators are rewarded",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Navbar  */}
                <Navbar />
                <div className=" min-h-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">{children}</div>

                {/* Footer */}
                <Footer />
            </body>
        </html>
    );
}
