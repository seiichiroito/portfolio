import { Inter } from "next/font/google"

import "@/assets/css/reset.css"
import "@/assets/css/global.css"
import "@/styles/global.css"

import StyledComponentsRegistry from "@/lib/registry"
import SiteChrome from "@/components/SiteChrome"
import { siteMetadata } from "@/lib/site"

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  variable: "--font-inter",
})

export const metadata = {
  metadataBase: new URL(siteMetadata.siteUrl),
  title: {
    default: siteMetadata.siteTitle,
    template: `%s | ${siteMetadata.siteTitle}`,
  },
  description: siteMetadata.siteDescription,
  authors: [{ name: siteMetadata.author }],
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        <StyledComponentsRegistry>
          <SiteChrome>{children}</SiteChrome>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

export default RootLayout
