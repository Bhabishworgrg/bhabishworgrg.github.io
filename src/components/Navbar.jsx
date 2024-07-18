import { useState } from 'react';

function Navbar() {
	const [activeLink, setActiveLink] = useState('#intro');

	function setLinkColor(link) {
		return (link === activeLink ? 'text-highlight' : 'text-tertiary') + ' hover:text-highlight';
	}

	return (
		<nav className='bg-secondary'>
			<div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
				<div className='flex h-16 items-center justify-between'>
					{/* Name */}
					<div className='text-tertiary text-lg font-bold'>Bhabishwor</div>

					{/* Navigation Links */}
					<div className='flex space-x-4'>
						{[
							{ name: 'Home', href: '#intro' },
							{ name: 'About', href: '#about' },
							{ name: 'Skills', href: '#skills' },
							{ name: 'Projects', href: '#projects' },
							{ name: 'Experience', href: '#experience' },
						].map((item) => (
							<a href={ item.href } onClick={ () => setActiveLink(item.href) } className={ setLinkColor(item.href) }>
								{ item.name }
							</a>
						))}
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;

//function Navbar() {
	//	return(
		//		<nav className='navbar'>
		//			<a className='navbar-title' href='#'>
		//				<p className='first-name'>Bhabishwor</p>
		//				<p className='last-name'>Gurung</p>
		//			</a>
		//			
		//			<div className='navbar-menu'>
		//				<a className='navbar-menu-item' href='#intro'>
		//					Home
		//				</a>
		//				<a className='navbar-menu-item' href='#about'>
		//					About
		//				</a>
		//				<a className='navbar-menu-item' href='#skills'>
		//					Skills
		//				</a>
		//				<a className='navbar-menu-item' href='#projects'>
		//					Projects
		//				</a>
		//				<a className='navbar-menu-item' href='#experience'>
		//					Experience
		//				</a>
		//			</div>
		//		
		//			<div className='navbar-contact'>
		//				<a className='navbar-contact-item' href='mailto:bhabishworgrg@gmail.com' target='_blank' rel='noreferrer'>
		//					<img src='https://img.icons8.com/ios/50/000000/email.png' alt='email'/>
		//				</a>
		//				<a className='navbar-contact-item' href='https://www.github.com/Bhabishworgrg' target='_blank' rel='noreferrer'>
		//					<img src='https://img.icons8.com/ios/50/000000/github.png' alt='github'/>
		//				</a>
		//				<a className='navbar-contact-item' href='https://www.linkedin.com/in/bhabishwor-gurung/' target='_blank' rel='noreferrer'>
		//					<img src='https://img.icons8.com/ios/50/000000/linkedin.png' alt='linkedin'/>
		//				</a>
		//			</div>
		//		</nav>
		//	);
	//}
//
//	export default Navbar;
