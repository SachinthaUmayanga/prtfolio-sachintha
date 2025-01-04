import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

// ✅ Use only the supported weights for each font
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"], // ✅ Ovo supports only 400
});

export const metadata = {
  title: "Portfolio - Sachintha",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.className} ${ovo.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
