import { ChevronRight } from 'lucide-react';
import { motion as m } from 'motion/react';
import Image from 'next/image';

import { parentProductAnimation, firstChildProductAnimation, secondChildProductAnimation } from './product.animation';

const Products = () => {
	return (
		<m.div
			{...parentProductAnimation}
			className="relative"
		>
			<div className="absolute bottom-10 left-2.5">
				<Image
					width={180}
					height={180}
					src="/products/product.png"
					alt="product"
					className="relative z-3 rounded-lg bg-white"
				/>
				<m.div
					{...firstChildProductAnimation}
					className="absolute left-0.5 z-2 h-full w-full scale-90 rounded-lg bg-white/90"
				/>
				<m.div
					{...secondChildProductAnimation}
					className="absolute left-1 z-1 h-full w-full scale-80 rounded-lg bg-white/80"
				/>
			</div>
			<div
				className="flex h-28 w-full items-end rounded-lg bg-black/50 px-4 py-2.5"
				style={{ width: 200 }}
			>
				<div className="mt-2 flex w-full items-center justify-between text-sm">
					<button className="text-secondary font-semibold">Shop now</button>
					<ChevronRight
						className="text-secondary"
						size={20}
					/>
				</div>
			</div>
		</m.div>
	);
};

export default Products;
