const listOfTestListings = [
	{
		id: 1234567,
		title: 'Lawn Mower',
		images: [
			'https://hips.hearstapps.com/hmg-prod/images/mower-1568302588.jpg?crop=1.00xw:1.00xh;0,0&resize=640:*',
		],
		price: 100,
		location: ['40.743424', '-111.882760'],
		timePosted: '04/06/2024',
		description: 'Works well. Just changed oil. Asking $60 OBO.',
		condition: 'good',
		category: 'Farm & Garden',
		contactId: 123456,
	},
	{
		id: 2345678,
		title: 'Refrigerator',
		images: [
			'https://m.media-amazon.com/images/I/71n3Kd9GMZL._AC_UF894,1000_QL80_.jpg',
		],
		price: 250,
		location: ['40.743424', '-111.882760'],
		timePosted: '05/06/2024',
		description:
			"SMETA Refrigerator French Door with Ice Maker, 36'' Frost-free Counter Depth",
		condition: 'great',
		category: 'Appliances',
		contactId: 123456,
	},
	{
		id: 3456789,
		title: 'Pogo Stick',
		images: [
			'https://www.flybar.com/cdn/shop/products/V_220707_ListingImages_PogoSticks_V4_1.jpg?v=1700646894',
		],
		price: 50,
		location: ['40.745606', '-111.866555'],
		timePosted: '04/15/2024',
		description:
			'Fun Pogo Stick. Scratches up the side from normal use. Otherwise functions just fine.',
		condition: 'fair',
		category: 'Toys & Games',
		contactId: 234567,
	},
	{
		id: 4567890,
		title: 'Antique Canon Camera',
		images: [
			'https://summerschool.lsr7.org/wp-content/uploads/sites/13/2021/12/product-g.jpg',
		],
		price: 160,
		location: ['40.745606', '-111.866555'],
		timePosted: '04/26/2024',
		description: "Doesn't work, but body is in mint condition.",
		condition: 'good',
		category: 'Antiques',
		contactId: 234567,
	},
	{
		id: 5678901,
		title: 'Spiral Art Design Center',
		images: [
			'https://img.lakeshorelearning.com/is/image/OCProduction/dd348?wid=800&fmt=jpeg&qlt=85,1&pscan=auto&op_sharpen=0&resMode=sharp2&op_usm=1,0.65,6,0',
		],
		price: 50,
		location: ['40.645475', '-111.874688'],
		timePosted: '04/30/2024',
		description: 'Fun for the kids. Asking $50 OBO.',
		condition: 'good',
		category: 'Arts & Crafts',
		contactId: 345678,
	},
];
export default listOfTestListings;
