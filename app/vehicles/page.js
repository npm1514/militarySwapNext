import { Suspense } from 'react';
import { CategoryWrapper } from '@/components';

const Category = () => (
	<Suspense>
		<CategoryWrapper category='Vehicles' />
	</Suspense>
);

export default Category;
