import "./globals.css";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Internshala - Search Internships",
  description: "Find the best internships in India",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        {children}
        <Footer />
      </body>
    </html>
  );
}
