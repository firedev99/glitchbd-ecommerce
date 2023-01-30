import Head from "next/head"

type Props = {
  title: string
  siteName?: string
  description?: string
  url?: string
}

export default function Seo({
  title,
  siteName = "Glitch Dhaka",
  description = "Glitch is a fashion apparel and gear shop and manufacturer located at Dhaka, Bangladesh. Get yourself glitched within a click.",
  url = "https://glitchbd.com",
}: Props) {
  return (
    <Head>
      <title key="title">{`${title} – ${siteName}`}</title>
      <meta name="description" content={description} />
      <meta key="og_type" property="og:type" content="website" />
      <meta key="og_title" property="og:title" content={title} />
      <meta
        key="og_description"
        property="og:description"
        content={description}
      />
      <meta key="og_locale" property="og:locale" content="en_IE" />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <meta key="og_url" property="og:url" content={url} />
      <meta key="og_site_name" property="og:site_name" content={siteName} />
      <link rel="shortcut icon" href="/favicon.ico" />
    </Head>
  )
}

{
  /* <meta
      key="og_image"
      property="og:image"
      content={ogImage ?? DEFAULT_OG_IMAGE}
    />
    <meta
      key="og_image:alt"
      property="og:image:alt"
      content={`${title} | ${siteName}`}
    />
    <meta key="og_image:width" property="og:image:width" content="1200" />
    <meta key="og_image:height" property="og:image:height" content="630" />

    <meta name="robots" content="index,follow" />

    <meta
      key="twitter:card"
      name="twitter:card"
      content="summary_large_image"
    />
    <meta 
      key="twitter:site" 
      name="twitter:site" 
      content={twitterHandle} 
    />
    <meta
      key="twitter:creator"
      name="twitter:creator"
      content={twitterHandle}
    />
    <meta 
      key="twitter:title" 
      property="twitter:title" 
      content={title} 
    />
    <meta
      key="twitter:description"
      property="twitter:description"
      content={description}
    />
    
    <link rel="canonical" href={canonical ?? DOMAIN} /> */
}
{
  /* <link rel="canonical" href="https://glitchbd.com" key="canonical" /> */
}
