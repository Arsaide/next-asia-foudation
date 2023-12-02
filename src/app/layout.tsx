import type {Metadata} from 'next'
import './globals.css'
import TheHeader from "@/component/TheHeader/TheHeader";
import TheFooter from "@/component/TheFooter/TheFooter";
import {Open_Sans} from 'next/font/google';

const openSans = Open_Sans({
    weight: ['600', '700', '400'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    display: 'swap',
})

export const metadata: Metadata = {
    title: 'The Asia Foundation',
    description: 'The Asia Foundation is a nonprofit international development organization committed to improving lives across a dynamic and developing Asia.',
}

export default function RootLayout({children,}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <body className={openSans.className}>
        <div className="wrapper">
            <TheHeader/>
            <main className='main'>
                {children}
            </main>
            <TheFooter/>
        </div>
        </body>
        </html>
    )
}
