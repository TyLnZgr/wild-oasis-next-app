import Logo from "./components/Logo";
import Navigation from "./components/Navigation";
import "./global.css";
export const metadata = {
  title: "The Wild Oasis",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
          <Navigation />
        </header>

        <main>{children}</main>
        <footer>© 2025 The Wild Oasis</footer>
      </body>
    </html>
  );
}
