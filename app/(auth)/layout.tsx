import Navbar from '@/components/shared/navbar';
import Sidebar from '@/components/shared/sidebar';
import { ChildProps } from '@/types';
import { auth } from '@clerk/nextjs';
import React from 'react';

const AuthLayout = ({ children }: ChildProps) => {
	const { userId } = auth();

	console.log(userId);

	return (
		<div className='relative'>
			<div className='mt-16'>
				<Navbar />
			</div>
			<Sidebar />
			<main className='flex items-center justify-center w-full h-[90vh]  z-50 relative'>{children}</main>
		</div>
	);
};

export default AuthLayout;
