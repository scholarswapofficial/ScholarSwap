import "@/style/globals.scss";
import "@/style/sections/intro.scss";  
import "@/style/sections/auth.scss";  

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}