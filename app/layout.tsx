import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Estação Barbearia | Um bom corte, uma boa conversa",
  description:
    "Cortes, barba e cuidado de verdade em uma barbearia de bairro. Reserve seu horário na Estação Barbearia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
