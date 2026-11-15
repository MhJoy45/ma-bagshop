import Link from 'next/link';
import ProductCard from '@/components/ProductCard';
import Newsletter from '@/components/Newsletter';
import {products} from '@/lib/products';
import {Icon} from '@/components/Icons';

const reviews=[
  ['Sarah M.','Amazing quality and super stylish! My go-to bag brand now.','/avatar-sarah.jpg'],
  ['James K.','Fast delivery and premium feel. Highly recommended!','/avatar-james.jpg'],
  ['Priya S.','Perfect blend of style and functionality. Love it!','/avatar-priya.jpg']
];

export default function Home(){
  return <>
    <section className="hero wrap">
      <div className="hero-copy">
        <span className="eyebrow">Premium Bag Collection</span>
        <h1>Carry Your<br/>Style <em>Everywhere</em></h1>
        <p>Discover the perfect blend of fashion, function,<br className="desktop-only"/> and quality. Premium bags for every journey.</p>
        <div className="hero-ctas">
          <Link className="btn btn-light" href="/shop">Shop Now <Icon name="arrow"/></Link>
          <a className="video-link" href="#popular"><span><Icon name="play"/></span> Watch Video</a>
        </div>
      </div>
      <div className="hero-visual">
        <div className="hero-orb"/>
        <img src="/hero-scene.jpg" alt="Premium black backpack from the BagShop collection"/>
        <div className="sale-float">Up to<strong>50%</strong>Off</div>
      </div>
    </section>
    <section className="benefits wrap">
      <div><Icon name="truck"/><span><b>Free Shipping</b><small>On Orders Over $50</small></span></div>
      <div><Icon name="shield"/><span><b>Secure Payments</b><small>100% Secure</small></span></div>
      <div><Icon name="return"/><span><b>Easy Returns</b><small>30-Day Returns</small></span></div>
      <div><Icon name="headset"/><span><b>24/7 Support</b><small>Always Here</small></span></div>
    </section>
    <section className="section wrap" id="popular">
      <div className="section-heading"><div><span className="kicker">Our Bestsellers</span><h2>Popular Bags</h2></div><Link className="btn btn-outline" href="/shop">View All Products <Icon name="arrow"/></Link></div>
      <div className="product-grid">{products.slice(0,4).map(p=><ProductCard key={p.id} product={p}/>)}</div>
    </section>
    <section className="sale-banner wrap">
      <div><span>Limited Time Offer</span><h2>Get Up to <em>50% OFF</em></h2><p>Upgrade your style with premium bags at unbeatable prices.</p><Link className="btn btn-light" href="/shop">Shop the Sale <Icon name="arrow"/></Link></div>
      <img src="/sale-model.jpg" alt="Model carrying a premium black handbag"/>
    </section>
    <section className="section wrap reviews-home">
      <div className="section-heading"><div><span className="kicker">What Our Customers Say</span><h2>Trusted by Thousands</h2></div><div className="review-arrows"><Link href="/reviews" aria-label="Previous reviews">‹</Link><Link href="/reviews" aria-label="View all reviews">›</Link></div></div>
      <div className="review-grid">{reviews.map(([name,quote,img])=><article className="review-card" key={name}><img src={img} alt={name}/><div><p>“{quote}”</p><b>{name}</b><span className="stars">★★★★★</span></div></article>)}</div>
    </section>
    <div className="wrap"><Newsletter/></div>
  </>;
}
