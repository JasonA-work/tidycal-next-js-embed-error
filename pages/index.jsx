import Link from 'next/link'
import Script from 'next/script'

export default function Home() {
  return <>
    <main>
      <h1>Page 1</h1>
      <p>On first load, the calendar embed below should load just fine.</p>
      <p>Please try refreshing this page 1 or more times. Eventually, the iframe will not render on the page at all.</p>
      <p>Please also try clicking <Link href="/page2">this link</Link> to go to another page and then come back to this page. The iframe should fail to load as well</p>

      <div id="tidycal-embed" data-path="wittstudio/tidycal-next-js-embed-bug"></div>
      <footer>
        <h2>For reference, this is the footer. The iframe should render above this text</h2>
      </footer>
    </main>
  </>
}
