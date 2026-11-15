import Link from 'next/link';
import {Icon} from './Icons';
export default function Footer(){return <footer className="footer wrap">
 <div className="footer-main">
  <div><Link href="/" className="brand"><span className="brand-icon"><Icon name="bag" size={30}/></span><b>BagShop</b></Link><p>Carry Better. Live Bolder.</p></div>
  <div><h4>Quick Links</h4><Link href="/">Home</Link><Link href="/shop">Shop</Link><Link href="/about">About</Link><Link href="/contact">Contact</Link></div>
  <div><h4>Customer Care</h4><Link href="/faq">FAQ</Link><Link href="/shipping">Shipping Policy</Link><Link href="/returns">Returns</Link><Link href="/support">Support</Link></div>
  <div><h4>Follow Us</h4><div className="socials"><a href="https://facebook.com" aria-label="Facebook">f</a><a href="https://instagram.com" aria-label="Instagram">◎</a><a href="https://youtube.com" aria-label="YouTube">▶</a><a href="https://x.com" aria-label="X">♥</a></div></div>
 </div>
 <div className="footer-bottom"><span>© 2025 BagShop. All rights reserved.</span><span><Link href="/privacy">Privacy Policy</Link> | <Link href="/terms">Terms of Service</Link></span></div>
 </footer>}
