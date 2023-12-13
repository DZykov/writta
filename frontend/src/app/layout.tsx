"use client"

import './globals.css'
import Navbar from '@/components/navbar/navbar';
import { useEffect, useState } from 'react';
import { checkAuth, create } from '@/api/check';

export default function RootLayout({ children }: { children: React.ReactNode }) {

    const [username, setUsername] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            var user = await checkAuth();
            if (user == false) {
                await create();
            }
            setUsername(user as string);
        }
        fetchData();
    }, [username]);

    return (
        <html lang="en">
            <body className=''>
                <Navbar nickName={username} />
                {children}
            </body>
        </html>
    )
}