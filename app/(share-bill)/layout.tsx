import Navbar from "@/components/Navbar";
import "@/styles/globals.css";

export const metadata = {
  title: "nadesh52",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="mx-auto flex max-w-screen-sm flex-col shadow-lg">
          <Navbar />
          <main>{children}</main>
        </div>
      </body>
    </html>
  );
}
