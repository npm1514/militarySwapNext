const listOfCategories = [
	{
		category: 'For Sale',
		link: '/for-sale',
		image: '/for-sale.webp',
		subcategories: [
			{ title: 'Antiques', link: 'antiques' },
			{ title: 'Appliances', link: 'appliances' },
			{ title: 'Arts & Crafts', link: 'arts-and-crafts' },
			{ title: 'Farm & Garden', link: 'farm-and-garden' },
			{ title: 'Outdoor Gear', link: 'outdoor-gear' },
			{ title: 'Toys & Games', link: 'toys-and-games' },
		],
	},
	{
		category: 'Vehicles',
		link: '/vehicles',
		image: '/vehicles.jpg',
		subcategories: [
			{ title: 'Cars', link: 'cars' },
			{ title: 'Motorcycles', link: 'motorcycles' },
			{ title: "RV's", link: 'rvs' },
			{ title: 'Boats', link: 'boats' },
			{ title: "ATV's", link: 'atvs' },
			{ title: 'Heavy Equipment', link: 'heavy-equipment' },
		],
	},
	{
		category: 'Real Estate',
		link: '/real-estate',
		image: '/homes.jpg',
		subcategories: [
			{ title: 'Residential For Sale', link: 'residential-for-sale' },
			{ title: 'Commercial For Sale', link: 'commercial-for-sale' },
			{ title: 'Commercial For Lease', link: 'commercial-for-lease' },
			{ title: 'House For Rent', link: 'house-for-rent' },
			{ title: "Apartment For Rent", link: 'apartment-for-rent' },
			{ title: 'Short Term Rental', link: 'short-term-rental' },
			{ title: 'Parking', link: 'parking' },
			{ title: 'Storage', link: 'storage' },
		],
	},
	{
		category: 'Jobs',
		link: '/jobs',
		image: '/jobs.webp',
		subcategories: [
			{ title: 'Admin', link: 'admin' },
			{ title: 'Finance', link: 'finance' },
			{ title: 'Labor', link: 'labor' },
			{ title: 'Medicine', link: 'medicine' },
			{ title: 'Skilled Trade', link: 'skilled-trade' },
			{ title: 'Tech', link: 'tech' },
		],
	},
];

export default listOfCategories;
