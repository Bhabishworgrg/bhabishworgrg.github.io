function About() {
	return (
		<>
			<h1 id='about' className='mt-0'>About Me</h1>

			<div className='flex flex-col lg:flex-row items-center justify-center'>
				<div>
					<p className='mt-4 lg:mt-0 text-base lg:text-lg'>
						As an aspiring backend developer and software enthusiast, I am constantly learning about building scalable and efficient web applications. I am currently an undergraduate student of BSc (Hons) Computing at <a href='https://www.thebritishcollege.edu.np/' className='text-highlight'>The British College</a>, Kathmandu.
					</p>
					<br/>
					<p className='text-base lg:text-lg'>
						My fascination for programming extends to building desktop apps and CLI tools as well. I also make games.
					</p>
				</div>	
				
				<img
					src={ '/me.png' }
					alt='img: me.png'
					className='shadow-lg shadow-highlight lg:ml-16 mt-16 lg:mt-0 w-[230px] sm:w-[270px] md:w-[300px] lg:w-[250px] h-auto'
				/>
			</div>
		</>
	);
};

export default About;
