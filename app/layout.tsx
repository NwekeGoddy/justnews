import "../styles/globals.css";
import Header from './Header'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <Header />
      <body>{children}</body>
    </html>
  );
}
