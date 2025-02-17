import { Suspense } from 'react';
import { CategoryWrapper } from '@/components';

const Category = () => (
	<Suspense>
		<CategoryWrapper category='For Sale' />
	</Suspense>
);

export default Category;
