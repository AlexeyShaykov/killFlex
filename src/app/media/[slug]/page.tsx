import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { mediaData } from '@/media/media.data';

import MediaPage from './mediaPage';

export const metaData: Metadata = {
	title: 'Media',
	description: 'Explore the latest media content',
	openGraph: {
		title: 'Media',
		description: 'Explore the latest media content',
	},
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
	const { slug } = await params;
	const mediaItem = mediaData.find(item => item.slug === slug);

	if (!mediaItem) return notFound();

	return <MediaPage mediaItem={mediaItem} />;
};

export default Page;
