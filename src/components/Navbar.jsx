function Navbar() {
	function scrollToSection(event, id) {
		event.preventDefault();
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	}

	return (
		<nav className='bg-secondary sticky top-0 my-7 px-4'>
				<div className='flex items-center justify-between'>
					{ /* Name */ }
					<a
					href='#'
					className='text-tertiary text-lg font-bold'
					>
						Bhabishwor
					</a>
					
					{ /* Navigation Links */ }
					<div className='flex-col sm:flex-row sm:space-x-4 sm:justify-start sm:static sm:w-auto absolute top-full left-0 w-full bg-secondary sm:bg-transparent sm:flex sm:space-y-0'>
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

					{ /* Social Links */ }
					<div className='flex items-center space-x-4'>
						{[
							{ name: 'GitHub', href: 'https://github.com/Bhabishworgrg', target: '_blank' },
							{ name: 'LinkedIn', href: 'https://www.linkedin.com/in/bhabishwor-grg', target: '_blank' },
							{ name: 'Mail', href: 'mailto:bhabishworgrg@gmail.com' },
						].map((item) => (
							<a
							href={ item.href }
							target={ item.target }
							className='text-tertiary hover:text-highlight'
							>
								{ item.name }	
							</a>
						))}
					</div>
				</div>
		</nav>
	);
}

export default Navbar;
