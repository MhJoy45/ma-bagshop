'use client';
import Link from 'next/link';
import { useStore } from './StoreProvider';
import { Icon } from './Icons';
import { money } from '@/lib/products';
export default function ProductCard({product}){const {addToCart,toggleWishlist,wishlist}=useStore();const liked=wishlist.some(x=>x.id===product.id);return <article className="product-card"><div className="product-image"><Link href={`/product/${product.slug}`}><img src={product.image} alt={product.name}/></Link><span className="discount">-{product.discount}%</span><button className={`wish-btn ${liked?'is-liked':''}`} onClick={()=>toggleWishlist(product)} aria-label="Toggle wishlist"><Icon name="heart"/></button></div><div className="product-info"><Link href={`/product/${product.slug}`} className="product-name">{product.name}</Link><div className="rating"><span>★★★★★</span><small>{product.rating} ({product.reviews.toLocaleString()})</small></div><div className="price-row"><b>{money(product.price)}</b><del>{money(product.oldPrice)}</del></div><button className="add-button" onClick={()=>addToCart(product)}><Icon name="cart" size={16}/> Add to Cart</button></div></article>}
