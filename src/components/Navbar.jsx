import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

function Navbar() {
	function scrollToSection(event, id) {
		event.preventDefault();
		document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
		setMenuOpen(false);
	};

	return (
		<nav className='bg-secondary sticky top-0 my-7 px-4 py-1 z-50'>
				<div className='flex items-center justify-between'>
					{ /* Name */ }
					<a
					href='#'
					className='font-bold text-lg hover:text-highlight hover:scale-110 transition-transform'
					>
						Bhabishwor
					</a>
					
					{ /* Navigation Links */ }
					<div className='hidden text-lg md:flex md:px-2 md:space-x-2 md:w-auto'>
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
								className='hover:text-highlight hover:scale-110 transition-transform'
							>
								{ item.name }
							</a>
						))}
					</div>

					{ /* Social Links */ }
					<div className='flex items-center space-x-4 text-xl'>
						{[
							{ name: 'GitHub', icon:<FaGithub/>, href: 'https://github.com/Bhabishworgrg', target: '_blank' },
							{ name: 'LinkedIn', icon:<FaLinkedin/>, href: 'https://www.linkedin.com/in/bhabishwor-gurung', target: '_blank' },
							{ name: 'Mail', icon:<IoIosMail/>, href: 'mailto:bhabishworgrg@gmail.com', target: '_blank' },
						].map((item) => (
							<a
							href={ item.href }
							target={ item.target }
							alt={ item.name }
							className='hover:text-highlight hover:scale-125 transition-transform'
							>
								{ item.icon }
							</a>
						))}
					</div>
				</div>
		</nav>
	);
};

export default Navbar;
