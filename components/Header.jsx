'use client';
import Link from 'next/link';
import {useState} from 'react';
import {useStore} from './StoreProvider';
import {Icon} from './Icons';
const links=[['Home','/'],['Shop','/shop'],['About','/about'],['Reviews','/reviews'],['Contact','/contact']];
export default function Header(){
 const [open,setOpen]=useState(false);
 const {cartCount}=useStore();
 return <header className="header wrap">
   <Link href="/" className="brand"><span className="brand-icon"><Icon name="bag" size={30}/></span><b>BagShop</b></Link>
   <nav className={open?'nav nav-open':'nav'}>{links.map(([n,u])=><Link key={u} href={u} onClick={()=>setOpen(false)}>{n}</Link>)}</nav>
   <div className="header-actions"><Link href="/shop" aria-label="Search products"><Icon name="search" size={21}/></Link><Link href="/cart" className="icon-count" aria-label="Shopping cart"><Icon name="cart" size={23}/><i>{cartCount}</i></Link><button className="mobile-menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation"><Icon name={open?'close':'menu'}/></button></div>
 </header>;
}
