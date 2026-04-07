import "@/styles/globals.scss";
import "@/styles/sections/auth/intro.module.scss";  
import "@/styles/sections/auth/auth.module.scss";  
import "@/styles/sections/home/layout.module.scss";
import "@/styles/sections/home/sidebar.module.scss";  
import "@/styles/sections/home/feed.module.scss";  
import "@/styles/sections/home/rightpanel.module.scss";  


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