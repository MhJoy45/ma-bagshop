'use client';
import {useState} from 'react';
import Link from 'next/link';
import {useRouter} from 'next/navigation';
import {useStore} from '@/components/StoreProvider';
import {money} from '@/lib/products';

export default function Checkout(){
 const router=useRouter();
 const {cart,subtotal,clearCart}=useStore();
 const [shipping,setShipping]=useState('standard');
 const [payment,setPayment]=useState('cod');
 const [error,setError]=useState('');
 const [busy,setBusy]=useState(false);
 const shippingCost=shipping==='express'?14.99:(subtotal>=50?0:6.99);
 const total=subtotal+shippingCost;
 function submit(e){
  e.preventDefault();if(busy)return;
  if(!cart.length){setError('Your cart is empty. Add a product before placing an order.');return;}
  const data=new FormData(e.currentTarget);
  const customer=Object.fromEntries(data.entries());
  if(!customer.email.includes('@')){setError('Please enter a valid email address.');return;}
  setBusy(true);setError('');
  const order={id:'BS-'+Date.now().toString(36).toUpperCase(),createdAt:new Date().toISOString(),customer,items:cart.map(({id,name,price,quantity,image})=>({id,name,price,quantity,image})),subtotal,shippingCost,shipping,payment,total,status:'Demo order placed — not submitted to a merchant'};
  try{sessionStorage.setItem('bagshop-last-order',JSON.stringify(order));clearCart();router.push('/order-success');}catch{setBusy(false);setError('Unable to save your order in this browser. Please try again.');}
 }
 return <div className="page wrap checkout-page"><div className="page-hero compact"><span className="kicker">Secure-looking demo checkout</span><h1>Checkout</h1><p>Complete your details to place a demo order. No payment is collected.</p></div>
 {!cart.length?<div className="empty-state"><h2>Your cart is empty</h2><p>Add something you love before checking out.</p><Link href="/shop" className="btn btn-light">Shop bags</Link></div>:
 <form className="checkout-layout" onSubmit={submit}><div className="checkout-fields">
 <section className="checkout-panel"><h2>Contact information</h2><div className="checkout-grid"><label className="field full">Email address<input type="email" name="email" autoComplete="email" placeholder="you@example.com" required maxLength={150}/></label><label className="field">First name<input name="firstName" autoComplete="given-name" required maxLength={80}/></label><label className="field">Last name<input name="lastName" autoComplete="family-name" required maxLength={80}/></label><label className="field full">Phone number<input type="tel" name="phone" autoComplete="tel" required maxLength={30}/></label></div></section>
 <section className="checkout-panel"><h2>Shipping address</h2><div className="checkout-grid"><label className="field full">Street address<input name="address" autoComplete="street-address" required maxLength={200}/></label><label className="field">City<input name="city" autoComplete="address-level2" required maxLength={100}/></label><label className="field">State / Region<input name="region" autoComplete="address-level1" required maxLength={100}/></label><label className="field">Postal code<input name="postal" autoComplete="postal-code" required maxLength={20}/></label><label className="field">Country<input name="country" autoComplete="country-name" required maxLength={100}/></label><label className="field full">Delivery notes (optional)<textarea name="notes" rows="3" maxLength={500}/></label></div></section>
 <section className="checkout-panel"><h2>Delivery method</h2><label className="choice"><input type="radio" name="shipping" checked={shipping==='standard'} onChange={()=>setShipping('standard')}/><span><b>Standard delivery</b><small>Estimated 5–7 business days (demo)</small></span><strong>{subtotal>=50?'Free':money(6.99)}</strong></label><label className="choice"><input type="radio" name="shipping" checked={shipping==='express'} onChange={()=>setShipping('express')}/><span><b>Express delivery</b><small>Estimated 2–3 business days (demo)</small></span><strong>{money(14.99)}</strong></label></section>
 <section className="checkout-panel"><h2>Payment method</h2><label className="choice"><input type="radio" name="payment" checked={payment==='cod'} onChange={()=>setPayment('cod')}/><span><b>Cash on delivery (demo)</b><small>No real order is sent to a seller</small></span></label><label className="choice"><input type="radio" name="payment" checked={payment==='manual'} onChange={()=>setPayment('manual')}/><span><b>Manual payment (demo)</b><small>No bank or card details are collected</small></span></label></section>
 </div><aside className="checkout-panel checkout-summary"><h2>Order summary</h2><div className="checkout-items">{cart.map(item=><div className="checkout-product" key={item.id}><img src={item.image} alt={item.name}/><span><b>{item.name}</b><small>Qty: {item.quantity}</small></span><strong>{money(item.price*item.quantity)}</strong></div>)}</div><div className="checkout-totals"><div><span>Subtotal</span><b>{money(subtotal)}</b></div><div><span>Delivery</span><b>{shippingCost?money(shippingCost):'Free'}</b></div><div className="summary-total"><span>Total</span><b>{money(total)}</b></div></div>{error&&<p role="alert" className="checkout-error">{error}</p>}<button className="btn btn-light full-width" type="submit" disabled={busy}>{busy?'Placing order…':'Place demo order'}</button><p className="muted">Frontend demo only. No payment is charged or order transmitted.</p><Link className="continue-link" href="/cart">← Return to cart</Link></aside></form>}
 </div>
}
