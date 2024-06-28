'use client';

import { useState } from 'react';
import Link from 'next/link';
import listOfStates from '@/data/listOfStates';

export default function Home() {
	const [selectedState, setSelectedState] = useState('');
	const [selectedCounty, setSelectedCounty] = useState('');
	return (
		<div>
			<div className='m-4 flex justify-center'>
				<h3>State: </h3>
				<select
					onChange={(e) => setSelectedState(e.target.value)}
					value={selectedState}
				>
					<option value=''>Pick Your State</option>
					{Object.keys(listOfStates).map((state, index) => (
						<option key={state + index} defaultValue='' value={state}>
							{state}
						</option>
					))}
				</select>
			</div>
			<div className='m-4 flex justify-center'>
				<h3>County: </h3>
				<select
					onChange={(e) => setSelectedCounty(e.target.value)}
					value={selectedCounty}
				>
					<option value=''>Pick Your County</option>
					{selectedState ? (
						listOfStates[selectedState].map((county, index) => (
							<option key={county + index} value={county}>
								{county}
							</option>
						))
					) : (
						<option placholder='Pick State First' disabled={true}>
							Pick State First
						</option>
					)}
				</select>
			</div>
			{selectedState && selectedCounty && (
				<div className='m-4 flex justify-center'>
					<Link href={`/${selectedCounty}-${selectedState}`}>
						{/* fix this */}
						<button>Go to Your Location</button>
					</Link>
				</div>
			)}
		</div>
	);
}
