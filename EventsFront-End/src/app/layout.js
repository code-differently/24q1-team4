// layout.js
import React from 'react';
import { Inter } from 'next/font/google';
import 'materialize-css/dist/css/materialize.min.css';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Perfectly Planned Events',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="fullpage">
      <body>
        {children}
        <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
      </body>
    </html>
  );
}
