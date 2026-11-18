import "./globals.css";


export const metadata = {
  title: "Shovana Charity Foundation",
  description: "Bring Change Home",
  icons: {
    icon: "/favicon-cropped.png", 
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
