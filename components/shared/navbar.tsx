import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { ModeToggle } from './mood-togle';
import { HelpCircle, Settings } from 'lucide-react';
import { auth } from '@clerk/nextjs';
import UserBox from './user-box';
import { Avatar, AvatarFallback } from '../ui/avatar';

export default function Navbar() {
	const { userId } = auth();
	return (
		<div className='w-full h-[10vh] fixed left-0 top-0 z-30 bg-[#f6f9fc] dark:bg-[#1f1f1f]'>
			<div className='flex items-center justify-between my-4 px-6'>
				<Link href={'/'}>
					<div className='flex items-center'>
						<Image src={'/logo.svg'} alt='Logo' width={40} height={40} />
						<span className='pl-2 opacity-75 text-lg'>Drive</span>
					</div>
				</Link>
				<div className='flex items-center space-x-2'>
					<ModeToggle />
					<div className='p-2 hover:bg-secondary rounded-full transition' role='button'>
						<HelpCircle className='h-5 w-5' />
					</div>
					<div className='p-2 hover:bg-secondary rounded-full transition' role='button'>
						<Settings className='h-5 w-5' />
					</div>
					{userId ? (
						<UserBox />
					) : (
						<Avatar className='cursor-pointer'>
							<AvatarFallback>UT</AvatarFallback>
						</Avatar>
					)}
				</div>
			</div>
		</div>
	);
}
