import Link from 'next/link'
import Image from 'next/image'
const Navbar = () => {
  return (
    <nav >
        <ul>
            <Link href='/'><a><Image src='/Logo.svg' width={87} height={17}/></a></Link>
            <Link href='/'><a>首頁</a></Link>
            <Link href='/explore'><a>探索</a></Link>
            <Link href='/premium'><a>Premium</a></Link>
            <Link href='/about'><a>認識XPACE</a></Link>
            <Link href='/download_app'><a>下載X-city</a></Link>
        </ul>
    </nav>
    
  )
}

export default Navbar