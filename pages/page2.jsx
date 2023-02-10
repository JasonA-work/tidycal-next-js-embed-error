import Link from 'next/link'

const Page2 = () => {
  return (
    <main>
      <h1>Page2</h1>
      <p><Link style={{ color: "blue" }} href="/">Click on this link to go back to Page 1</Link></p>
    </main>
  )
}

export default Page2