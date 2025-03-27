import type { Metadata } from 'next';
import { Geist, Geist_Mono, Montserrat } from 'next/font/google';

import MainWrapper from '@/components/main-wrapper/MainWrapper';

import LazyMotionProvider from './LazyMotionProvider';
import './globals.css';

const montserrat = Montserrat({
	variable: '--font-montserrat',
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'],
	preload: true,
});

export const metadata: Metadata = {
	title: 'KillFlex',
	description: 'More animations, than netflix',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.variable} antialiased`}>
				<LazyMotionProvider>
					<MainWrapper>{children}</MainWrapper>
				</LazyMotionProvider>
			</body>
		</html>
	);
}
