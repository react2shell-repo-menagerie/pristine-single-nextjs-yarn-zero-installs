import './globals.css'

export const metadata = {
  title: 'CVE-2025-66478 Test App (Yarn Zero-Installs)',
  description: 'Test application for Yarn Berry zero-installs cache invalidation',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
