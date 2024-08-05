import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import type { Metadata } from 'next';
import { globalTheme } from './theme';

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
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={globalTheme}>{children}</MantineProvider>
      </body>
    </html>
  );
}
