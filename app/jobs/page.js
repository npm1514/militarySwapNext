import { Suspense } from 'react';
import { CategoryWrapper } from '@/components';

const Category = () => (
	<Suspense>
		<CategoryWrapper category='Jobs' />
	</Suspense>
);

export default Category;
