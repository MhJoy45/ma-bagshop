import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {StoreProvider} from '@/components/StoreProvider';
export const metadata={title:'BagShop | Premium Bags for Every Journey',description:'Discover premium backpacks, tote bags, crossbody bags and travel essentials at BagShop.'};
export default function RootLayout({children}){return <html lang="en"><body><StoreProvider><Header/><main>{children}</main><Footer/></StoreProvider></body></html>}
