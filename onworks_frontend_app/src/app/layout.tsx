// import Loader from "../components/global/Loader";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html>
//       <body>
//         {children}</body>
//     </html>
//   );
// }
import { AuthProvider } from "../context/AuthContext";
import Loader from "../components/global/Loader";

// import { LayoutProvider } from "../context/LayoutContext";
import ProtectedLayout from "../components/ProtectedRoutes";
import "./globals.css";
import { ObjectFieldProvider } from "../context/ObjectFieldContext";
import { ToastProvider } from "../context/ToastContext";
import Script from "next/script";
import { Providers } from "./providers";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ margin: "0" }} cz-shortcut-listen="true">
        <Loader/>
        <ToastProvider>
        <AuthProvider>   
            <ObjectFieldProvider>
              <ProtectedLayout>
                <Providers>{children}</Providers>
                </ProtectedLayout>
               <Script
          src="https://accounts.google.com/gsi/client"
          strategy="afterInteractive"
        />a
            </ObjectFieldProvider>
        </AuthProvider>
        </ToastProvider>
      </body>
    </html>
  );
}
