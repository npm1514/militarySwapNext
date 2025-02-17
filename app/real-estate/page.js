import { Suspense } from 'react';
import { CategoryWrapper } from '@/components';

const Category = () => (
	<Suspense>
		<CategoryWrapper category='Real Estate' />
	</Suspense>
);

export default Category;
