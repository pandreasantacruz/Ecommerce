import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import Navbar from "./components/navbar&footer/navbar";
import Footer from "./components/navbar&footer/footer";
import VisibleWrapper from "./components/wrapper/visibleWrapper";
import { Bounce, ToastContainer } from "react-toastify";
import { AuthProvider } from "./context/authContext";
import { CartProvider } from "./context/cartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tech E",
  description: "Tech Ecommerce ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {" "}
        <AuthProvider>
          <CartProvider>
            <VisibleWrapper>
              <Navbar />
            </VisibleWrapper>
            <div className="min-h-screen max-w-[90vw] m-auto py-6">
              {children}
            </div>
            <ToastContainer
              position="top-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick={false}
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="dark"
              transition={Bounce}
            />
          </CartProvider>
        </AuthProvider>
        <Footer />
      </body>
    </html>
  );
}
//Toast container caja donde aparece el notificador
