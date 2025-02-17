const forSaleData = {
	title: '',
	description: '',
	subcategory: '',
	condition: '',
	price: 0,
	images: [],
	creatorId: '',
};

const convertedForSaleData = {
	price: 0,
	images: [],
	title: '',
	description: '',
	category: '',
	subcategory: '',
	condition: '',
	creatorId: '',
	dateAdded: new Date(),
	id: '',
};

const jobsData = {
	title: '',
	companyName: '',
	city: '',
	state: '',
	locationType: '', //in office, remote, hybrid
	experienceLevel: '',
	educationRequirements: '',
	yearsOfExperience: 1,
	requiredSkills: '',
	description: '',
	pay: '',
	payPeriod: '',
	benefits: '',
	subcategory: '',
	creatorId: '',
};

const convertedJobsData = {
	title: '',
	companyName: '',
	city: '',
	state: '',
	locationType: '', //in office, remote, hybrid
	experienceLevel: '',
	educationRequirements: '',
	yearsOfExperience: 1,
	requiredSkills: '',
	description: '',
	pay: '',
	payPeriod: '',
	benefits: '',
	subcategory: '',
	creatorId: '',
	dateAdded: new Date(),
	id: '',
};

const realEstateData = {
	title: '',
	description: '',
	address: '',
	city: '',
	state: '',
	propertyType: '', // home, apt, lot
	purchaseType: '', // buy, rent
	bed: '',
	bath: '',
	acreage: '',
	sqft: '',
	condition: '',
	petRestrictions: '',
	price: 0,
	images: [],
	creatorId: '',
};

const convertedRealEstateData = {
	price: 0,
	images: [],
	title: '',
	description: '',
	address: '',
	city: '',
	state: '',
	propertyType: '', // home , apt, lot
	bed: '',
	bath: '',
	acreage: '',
	sqft: '',
	pets: '',
	subcategory: '',
	condition: '',
	creatorId: '',
	dateAdded: new Date(),
	id: '',
};

const vehiclesData = {
	year: 0,
	make: '',
	model: '',
	trim: '',
	vehicleType: '',
	mileage: 0,
	transmission: '',
	driveType: '',
	fuelType: '',
	doors: 4,
	exteriorColor: '',
	interiorColor: '',
	titleType: '',
	dealerType: '',
	description: '',
	condition: '',
	price: 0,
	images: [],
	creatorId: '',
};

const convertedVehiclesData = {
	year: 0,
	make: '',
	model: '',
	trim: '',
	vehicleType: '',
	mileage: 0,
	transmission: '',
	driveType: '',
	fuelType: '',
	doors: 4,
	exteriorColor: '',
	interiorColor: '',
	titleType: '',
	dealerType: '',
	description: '',
	condition: '',
	price: 0,
	images: [],
	creatorId: '',
	dateAdded: new Date(),
	id: '',
};

export const propsByCategory = {
	'for-sale': [
		{
			prop: 'title',
			label: 'Listing Title',
			inputType: 'text',
		},
		{
			prop: 'description',
			label: 'Description',
			inputType: 'textarea',
		},
		{
			prop: 'subcategory',
			label: 'Category',
			inputType: 'text',
		},
		{
			prop: 'condition',
			label: 'Condition',
			inputType: 'selector',
		},
		{
			prop: 'price',
			label: 'Price',
			inputType: 'number',
		},
		{
			prop: 'images',
			label: 'Images',
			inputType: 'file',
			accept: 'image/*',
		},
	],
	jobs: [
		{
			prop: 'title',
			label: 'Title',
			inputType: 'text',
		},
		{
			prop: 'company',
			label: 'Company Name',
			inputType: 'text',
		},
		{
			prop: 'city',
			label: 'City',
			inputType: 'text',
		},
		{
			prop: 'state',
			label: 'State',
			inputType: 'text',
		},
		{
			prop: 'locationType',
			label: 'Location Type',
			inputType: 'selector',
		},
		{
			prop: 'experienceLevel',
			label: 'Experience Level',
			inputType: 'selector',
		},
		{
			prop: 'educationRequirements',
			label: 'Education Requirements',
			inputType: 'selector',
		},
		{
			prop: 'yearsOfExperience',
			label: 'Required Years of Experience',
			inputType: 'number',
		},
		{
			prop: 'requiredSkills',
			label: 'Required Skills',
			inputType: 'textarea',
		},
		{
			prop: 'description',
			label: 'Description',
			inputType: 'textarea',
		},
		{
			prop: 'pay',
			label: 'Pay Amount',
			inputType: 'number',
		},
		{
			prop: 'payPeriod',
			label: 'Pay Period',
			inputType: 'selector',
		},
		{
			prop: 'benefits',
			label: 'Benefits',
			inputType: 'textarea',
		},
		{
			prop: 'subcategory',
			label: 'Category',
			inputType: 'selector',
		},
	],
	'real-estate': [
		{
			prop: 'title',
			label: 'Listing Title',
			inputType: 'text',
		},
		{
			prop: 'description',
			label: 'Description',
			inputType: 'textarea',
		},
		{
			prop: 'address',
			label: 'Address',
			inputType: 'text',
		},
		{
			prop: 'city',
			label: 'City',
			inputType: 'text',
		},
		{
			prop: 'state',
			label: 'State',
			inputType: 'text',
		},
		{
			prop: 'propertyType',
			label: 'Property Type',
			inputType: 'selector',
		},
		{
			prop: 'purchaseType',
			label: 'For Rent / For Sale',
			inputType: 'selector',
		},
		{
			prop: 'bed',
			label: 'Bed',
			inputType: 'number',
		},
		{
			prop: 'bath',
			label: 'Bath',
			inputType: 'number',
		},
		{
			prop: 'acreage',
			label: 'Acreage',
			inputType: 'number',
		},
		{
			prop: 'sqft',
			label: 'Square Foot',
			inputType: 'number',
		},
		{
			prop: 'condition',
			label: 'Condition',
			inputType: 'selector',
		},
		{
			prop: 'petRestrictions',
			label: 'Pet Restrictions',
			inputType: 'text',
		},
		{
			prop: 'price',
			label: 'Price',
			inputType: 'number',
		},
		{
			prop: 'images',
			label: 'Images',
			inputType: 'file',
			accept: 'image/*',
		},
	],
	vehicles: [
		{
			prop: 'year',
			label: 'Year',
			inputType: 'number',
		},
		{
			prop: 'make',
			label: 'Make',
			inputType: 'text',
		},
		{
			prop: 'model',
			label: 'Model',
			inputType: 'text',
		},
		{
			prop: 'trim',
			label: 'Trim',
			inputType: 'text',
		},
		{
			prop: 'vehicleType',
			label: 'Vehicle Type',
			inputType: 'selector',
		},
		{
			prop: 'mileage',
			label: 'Mileage',
			inputType: 'number',
		},
		{
			prop: 'transmission',
			label: 'Transmission',
			inputType: 'selector',
		},
		{
			prop: 'driveType',
			label: 'Drive Type',
			inputType: 'selector',
		},
		{
			prop: 'fuelType',
			label: 'Fuel Type',
			inputType: 'selector',
		},
		{
			prop: 'doors',
			label: 'Number of Doors',
			inputType: 'number',
		},
		{
			prop: 'exteriorColor',
			label: 'Exterior Color',
			inputType: 'text',
		},
		{
			prop: 'interiorColor',
			label: 'Interior Color',
			inputType: 'text',
		},
		{
			prop: 'titleType',
			label: 'Title Type',
			inputType: 'selector',
		},
		{
			prop: 'dealerType',
			label: 'Dealer Type',
			inputType: 'selector',
		},
		{
			prop: 'description',
			label: 'Description',
			inputType: 'textarea',
		},
		{
			prop: 'condition',
			label: 'Condition',
			inputType: 'selector',
		},
		{
			prop: 'price',
			label: 'Price',
			inputType: 'number',
		},
		{
			prop: 'images',
			label: 'Images',
			inputType: 'file',
			accept: 'image/*',
		},
	],
};
