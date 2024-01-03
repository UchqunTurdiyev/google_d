import Navbar from '@/components/shared/navbar';
import { UserButton } from '@clerk/nextjs';
import React from 'react';

export default function HomePage() {
	return (
		<div className='pt-10'>
			<UserButton />
		</div>
	);
}
