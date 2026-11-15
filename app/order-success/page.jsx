'use client';
import {useEffect,useState} from 'react';
import Link from 'next/link';
import {money} from '@/lib/products';
export default function OrderSuccess(){
 const [order,setOrder]=useState(null);
 useEffect(()=>{try{const saved=sessionStorage.getItem('bagshop-last-order');if(saved)setOrder(JSON.parse(saved));}catch{}},[]);
 return <div className="page wrap"><div className="order-success checkout-panel"><div className="success-check">✓</div><span className="kicker">Checkout complete</span><h1>{order?'Demo order placed!':'Order confirmation'}</h1>{order?<><p>Thanks, {order.customer.firstName}! Your demo order has been saved in this browser session. It has <b>not</b> been sent to a merchant.</p><div className="order-meta"><div><span>Order reference</span><strong>{order.id}</strong></div><div><span>Total</span><strong>{money(order.total)}</strong></div><div><span>Payment</span><strong>{order.payment==='cod'?'Cash on delivery (demo)':'Manual payment (demo)'}</strong></div></div><h2>Items ordered</h2>{order.items.map(item=><div className="order-line" key={item.id}><span>{item.name} × {item.quantity}</span><b>{money(item.price*item.quantity)}</b></div>)}</>:<p>No order was found in this browser session. You can return to the shop to start again.</p>}<Link className="btn btn-light" href="/shop">Continue shopping</Link></div></div>;
}
