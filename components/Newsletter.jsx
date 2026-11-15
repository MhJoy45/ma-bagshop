'use client';
import {useState} from 'react';
import {Icon} from './Icons';
export default function Newsletter(){
 const [email,setEmail]=useState(''); const [done,setDone]=useState(false);
 function submit(e){e.preventDefault();if(email.trim()){setDone(true);setEmail('')}}
 return <section className="newsletter">
  <div className="newsletter-icon"><Icon name="mail" size={28}/></div>
  <div className="newsletter-copy"><h3>Join Our Newsletter</h3><p>Get the latest deals, new arrivals &amp; more.</p></div>
  <form onSubmit={submit}><input type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Enter your email address" required/><button>{done?'Subscribed':'Subscribe'}</button></form>
  <img className="newsletter-art" src="/newsletter-bag.jpg" alt="BagShop collection"/>
 </section>;
}
