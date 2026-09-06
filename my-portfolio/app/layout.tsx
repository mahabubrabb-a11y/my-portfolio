import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer"; // 1. Footer import করুন
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-[#080808]">
      <body className="bg-[#080808] text-white antialiased flex flex-col min-h-screen">
        <Navbar />
      
        <main className="pt-16 flex-grow">
          {children}
        </main>

        {/* 2. main-এর নিচে Footer যুক্ত করুন */}
        <Footer />
      </body>
    </html>
  );
}
