import "./globals.css";
import Header from "./components/Header";


export const metadata = {
  title: "Dra. Renata Bourdette",
  description: "Renata Bourdette é uma médica cardiologista formada pela UERJ e titulada como Especialista pela Sociedade Brasileira de Cardiologia.",
  icon: "@/../public/rb.png",
  contentType: "application/javascript"
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
