import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
interface LayoutProps {
    children: React.ReactNode;
}
function Layout({ children }: LayoutProps) {
    return (
        <div className='bg-slate-100 dark:bg-primary dark:text-secondary h-screen flex flex-col -z-0 relative'>
            <Header />
            <main className='flex-1'>
                {children}
            </main>
            <Footer />
        </div>
    )
}

export default Layout;