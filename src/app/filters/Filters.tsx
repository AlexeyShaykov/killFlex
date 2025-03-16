'use client';

import { twMerge } from 'tailwind-merge';
import { filtersData } from './filters.data';
import { useFiltersStore } from '@/store/store';

const Filters = () => {
  const { currentFilter, setCurrentFilter } = useFiltersStore();
  return (
    <div className="text-center mt-10 space-x-3 border border-slate-400/10">
      {filtersData.map((filter, index) => (
        <button 
          key={index} 
          className={twMerge(
            'px-4 py-2 rounded-lg bg-transparent text-black font-medium cursor-pointer transition-colors',
            currentFilter === filter && 'bg-primary text-white',
          )} 
          type="button"
          onClick={() => setCurrentFilter(filter)}
        >
          {filter}
        </button>
      )) }
    </div>
  )
};

export default Filters;
