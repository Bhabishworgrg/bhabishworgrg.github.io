import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

function Navbar() {
	const [menuOpen, setMenuOpen] = useState(false);

	function toggleMenuButton() {
		return menuOpen ? <XMarkIcon className='h-6 w-6' /> : <Bars3Icon className='h-6 w-6' />
	}

	function toggleLinksVisibility() {
		return menuOpen ? 'flex' : 'hidden';
	}

	function scrollToSection(event, id) {
		event.preventDefault();
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	}

	return (
		<nav className='bg-secondary sticky top-0 z-50'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					{ /* Name */ }
					<a
					href='#'
					className='text-tertiary text-lg font-bold'
					>
						Bhabishwor
					</a>
					
					{ /* Navigation Links */ }
					<div className={
						toggleLinksVisibility() +
    					' flex-col items-center text-center sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 sm:justify-start sm:flex'
					}>
						{[
							{ name: 'Home', href: '#intro' },
							{ name: 'About', href: '#about' },
							{ name: 'Skills', href: '#skills' },
							{ name: 'Projects', href: '#projects' },
							{ name: 'Experience', href: '#experience' },
						].map((item) => (
							<a
							href={ item.href }
							onClick={ (event) => scrollToSection(event, item.href) }
							className='text-tertiary hover:text-highlight'
							>
								{ item.name }
							</a>
						))}
					</div>
					
					{ /* Mobile Menu Button */ }
					<button
					onClick={ () => setMenuOpen(!menuOpen) }
					className='sm:hidden text-tertiary hover:text-highlight focus:outline-none'
					>
						{ toggleMenuButton() }
					</button>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
