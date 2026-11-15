'use client';
import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import {useStore} from '@/components/StoreProvider';
export default function Wishlist(){const {wishlist}=useStore();return <div className="page wrap"><div className="page-hero compact"><span className="kicker">Saved for later</span><h1>Your Wishlist</h1><p>All the bags you love, in one place.</p></div>{wishlist.length?<div className="product-grid">{wishlist.map(p=><ProductCard key={p.id} product={p}/>)}</div>:<div className="empty-state"><h2>No saved bags yet</h2><p>Tap the heart on any product to keep it here.</p><Link className="btn btn-light" href="/shop">Find your favorite <span>→</span></Link></div>}</div>}
