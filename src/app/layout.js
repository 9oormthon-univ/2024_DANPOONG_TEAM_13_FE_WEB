'use client';

import localFont from "next/font/local";
import {QueryClient, QueryClientProvider} from 'react-query';
import "./globals.css";
import { metadata } from './metadata';

const pretendard = localFont({
    src: [
        {
            path: './fonts/PretendardVariable.woff2',
            weight: '45 920',
            style: 'normal',
        },
    ],
    variable: '--font-pretendard',
});

// QueryClient 인스턴스 생성
const queryClient = new QueryClient();

export default function RootLayout({ children }) {
    return (
        <QueryClientProvider client={queryClient}>
            <html lang="ko">
            <head>
                <title>{metadata.title}</title>
                <link rel="icon" href="/icon/ic_app.svg" />
                <meta name="description" content={metadata.description} />
            </head>
            <body className={`${pretendard.variable} antialiased`}>
            {children}
            </body>
            </html>
        </QueryClientProvider>
    );
}
