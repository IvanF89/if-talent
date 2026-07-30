import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IF Talent",
  description: "Il Talent Hub di IF Group",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="it">
      <body>
        <div className="container">
          <nav className="nav"><a className="brand" href="/">IF Talent</a><a href="/dashboard">Area recruiter</a></nav>
        </div>
        {children}
        <footer><div className="container">IF Talent · Powered by IF Group</div></footer>
      </body>
    </html>
  );
}
