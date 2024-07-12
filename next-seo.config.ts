import {NextSeoProps} from "next-seo";

export default {
  title: 'Default Title',
  description: 'This is the default description',
  openGraph: {
    type: 'website',
    locale: 'en_IE',
    url: 'https://www.example.com/',
    site_name: 'SiteName',
  },
  twitter: {
    handle: '@handle',
    site: '@site',
    cardType: 'summary_large_image',
  },
} as NextSeoProps
