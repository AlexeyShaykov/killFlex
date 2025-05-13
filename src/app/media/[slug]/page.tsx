import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { mediaData } from '@/media/media.data';

import MediaPage from './mediaPage';

export const metadata: Metadata = {
	title: 'Media',
};

export default async function Page(props: { params: Promise<{ slug: string }> }) {
	const params = await props.params;

	const { slug } = params;

	const mediaItem = mediaData.find(mediaItem => mediaItem.slug === slug);

	if (!mediaItem) {
		notFound();
	}

	return <MediaPage mediaItem={mediaItem} />;
}
