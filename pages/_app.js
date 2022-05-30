import '../styles/globals.css'
import Link from 'next/link'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav className="border-b p-6 flex justify-around">
        <p className="text-3xl font-bold text-blue-500">NFT Marketplace</p>
        <div className="flex mt-4 justify-between	">
          <Link href="/">
            <a className="mr-8 text-blue-500 font-bold">
              Home
            </a>
          </Link>
          <Link href="/create-nft">
            <a className="mr-8 text-blue-500 font-bold">
              Sell NFT
            </a>
          </Link>
          <Link href="/my-nfts">
            <a className="mr-8 text-blue-500 font-bold">
              My NFTs
            </a>
          </Link>
          <Link href="/dashboard">
            <a className="mr-8 text-blue-500 font-bold">
              Dashboard
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
