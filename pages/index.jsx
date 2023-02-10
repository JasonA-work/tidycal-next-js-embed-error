import Link from 'next/link'

import Calendar from '@/components/Calendar'

export default function Home() {
  return <>
    <main style={{ maxWidth: "900px" }}>
      <h1>Page 1</h1>
      <p>The nature of the bug has changed with NextJS 13, which is what this demo is based on</p>
      <Calendar />
      <footer>
        <h2>For reference, this is the footer. The iframe should render above this text</h2>
      </footer>
      <h1>Bug Description</h1>
      <h2>Localhost</h2>
      <p>On the localhost, when we refresh the page (command + R), it will throw a hydration error. This can be quite a blocking factor when developing. When hosted on Vercel, the hydration error doesn't show up.</p>
      <h2>Script Placement</h2>
      <p>The iframe does not load at all when putting the script anywhere other than "_document". This is a problem because some pages may not utilize the calendar component, it doesn't make sense to load and run this script on every page regardless of whether the component will be used or not.</p>
      <h2>Changing pages</h2>
      <p><Link style={{ color: "blue" }} href="/page2">Please also try clicking this link</Link> to go to another page and then come back to this page. The iframe will fail to load</p>
      <h2>Next/Script Strategy</h2>
      <p>Any strategy other than "afterInteractive" doesn't work at all. The one that will really help with website performance is "lazyOnLoad".</p>
      <p><a href="https://nextjs.org/docs/api-reference/next/script" target="_blank" rel="noreferrer">Here's a reference to next/script docs</a></p>

    </main>
  </>
}
