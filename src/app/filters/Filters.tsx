'use client';

import { twMerge } from 'tailwind-merge';

import { useFiltersStore } from '@/store/store';

import { filtersData } from './filters.data';

const Filters = () => {
	const { currentFilter, setCurrentFilter } = useFiltersStore();
	return (
		<div className="mt-10 space-x-3 border border-slate-400/10 text-center">
			{filtersData.map((filter, index) => (
				<button
					key={index}
					className={twMerge(
						'cursor-pointer rounded-lg bg-transparent px-4 py-2 font-medium text-white transition-colors',
						currentFilter === filter && 'bg-primary text-white',
					)}
					type="button"
					onClick={() => setCurrentFilter(filter)}
				>
					{filter}
				</button>
			))}
		</div>
	);
};

export default Filters;
