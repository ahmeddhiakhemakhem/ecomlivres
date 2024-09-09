import { Inter } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.css';
import Menu from "@/components/client/menu";
import AuthProvider from '@/providers/authProvider';
import connectDB from '@/lib/connectDB';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({ children }) {
  await connectDB();


  return (
    <html lang="en">
      <body className={inter.className}>

        <AuthProvider>
          <Menu />
          {children}
        </AuthProvider>

      </body>
    </html>
  );
}
