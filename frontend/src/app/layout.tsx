import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Expensify',
  description: 'Manage your expenses',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
