function Navbar() {
	return(
		<nav className='navbar'>
			<a className='navbar-title' href='#'>
				<p className='first-name'>Bhabishwor</p>
				<p className='last-name'>Gurung</p>
			</a>
			
			<div className='navbar-menu'>
				<a className='navbar-menu-item' href='#intro'>
					Home
				</a>
				<a className='navbar-menu-item' href='#about'>
					About
				</a>
				<a className='navbar-menu-item' href='#skills'>
					Skills
				</a>
				<a className='navbar-menu-item' href='#projects'>
					Projects
				</a>
				<a className='navbar-menu-item' href='#experience'>
					Experience
				</a>
			</div>
		
			<div className='navbar-contact'>
				<a className='navbar-contact-item' href='mailto:bhabishworgrg@gmail.com' target='_blank' rel='noreferrer'>
					<img src='https://img.icons8.com/ios/50/000000/email.png' alt='email'/>
				</a>
				<a className='navbar-contact-item' href='https://www.github.com/Bhabishworgrg' target='_blank' rel='noreferrer'>
					<img src='https://img.icons8.com/ios/50/000000/github.png' alt='github'/>
				</a>
				<a className='navbar-contact-item' href='https://www.linkedin.com/in/bhabishwor-gurung/' target='_blank' rel='noreferrer'>
					<img src='https://img.icons8.com/ios/50/000000/linkedin.png' alt='linkedin'/>
				</a>
			</div>
		</nav>
	);
}

export default Navbar;
