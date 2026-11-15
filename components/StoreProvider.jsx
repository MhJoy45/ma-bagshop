'use client';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';
const StoreContext = createContext(null);
export function StoreProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    try { setCart(JSON.parse(localStorage.getItem('bagshop-cart') || '[]')); setWishlist(JSON.parse(localStorage.getItem('bagshop-wishlist') || '[]')); } catch {}
    setReady(true);
  }, []);
  useEffect(() => { if (ready) localStorage.setItem('bagshop-cart', JSON.stringify(cart)); }, [cart, ready]);
  useEffect(() => { if (ready) localStorage.setItem('bagshop-wishlist', JSON.stringify(wishlist)); }, [wishlist, ready]);
  const addToCart = (product, quantity = 1) => setCart(prev => { const found = prev.find(x => x.id === product.id); return found ? prev.map(x => x.id === product.id ? { ...x, quantity: x.quantity + quantity } : x) : [...prev, { ...product, quantity }]; });
  const clearCart = () => setCart([]);
  const removeFromCart = id => setCart(prev => prev.filter(x => x.id !== id));
  const updateQuantity = (id, quantity) => setCart(prev => prev.map(x => x.id === id ? { ...x, quantity: Math.max(1, quantity) } : x));
  const toggleWishlist = product => setWishlist(prev => prev.some(x => x.id === product.id) ? prev.filter(x => x.id !== product.id) : [...prev, product]);
  const value = useMemo(() => ({ cart, wishlist, addToCart, clearCart, removeFromCart, updateQuantity, toggleWishlist, cartCount: cart.reduce((n,x) => n + x.quantity, 0), subtotal: cart.reduce((n,x) => n + x.price*x.quantity, 0) }), [cart, wishlist]);
  return <StoreContext.Provider value={value}>{children}</StoreContext.Provider>;
}
export const useStore = () => useContext(StoreContext);
