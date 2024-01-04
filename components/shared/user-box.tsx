'use client';
import { useClerk, useUser } from '@clerk/nextjs';
import { DropdownMenu, DropdownMenuItem } from '@radix-ui/react-dropdown-menu';

import React from 'react';
import { DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu';
import { Avatar, AvatarImage } from '../ui/avatar';
import { useRouter } from 'next/navigation';

export default function UserBox() {
	const { user } = useUser();
	const { signOut } = useClerk();
	const router = useRouter();
	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<div role='button'>
					<Avatar>
						<AvatarImage src={user?.imageUrl} />
					</Avatar>
				</div>
			</DropdownMenuTrigger>
			<DropdownMenuContent className='w-80' align='start' alignOffset={11} forceMount>
				<div className='flex flex-col space-y-4 p-2'>
					<p className='text-xs font-medium leading-none text-muted-foreground'>{user?.emailAddresses[0].emailAddress}</p>
					<div className='flex items-center gap-x-2'>
						<div className='rounded-md  bg-secondary p-1'>
							<Avatar className='w-8 h-8'>
								<AvatarImage src={user?.imageUrl} />
							</Avatar>
						</div>
						<div className='space-y-1'>
							<div className='text-sm line-clamp-1'>{user?.fullName}</div>
						</div>
					</div>
					<DropdownMenuSeparator />

					<DropdownMenuItem
						asChild
						onClick={() => signOut(() => router.push('/sign-in'))}
						className='w-full cursor-pointer text-muted-foreground'
					>
						<div role='button'>Log out</div>
					</DropdownMenuItem>
				</div>
			</DropdownMenuContent>
		</DropdownMenu>
	);
}
