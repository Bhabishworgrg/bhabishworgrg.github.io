function About() {
	return (
		<>
			<h1 id='about' className='mt-0'>About Me</h1>
			
			<div className='flex flex-col lg:flex-row items-center justify-center'>
				<p className='mt-4 lg:mt-0'>
I’m currently pursuing a BSc (H) in Computing degree at The British College, Kathmandu. As an aspiring front-end developer and software enthusiast, I’m passionate about creating intuitive user experiences. My fascination for programming extends to building desktop apps and CLI tools as well. I also enjoy developing games as a hobby. Beyond my technical interests, I’ve gained professional experience as a Data Analyst and a Bench Sales Recruiter.
				</p>
				
				<img
				src={ '/assets/me.png' }
				alt='img: me.png'
				className='rounded-tl-3xl rounded-br-3xl border-highlight border-4 lg:ml-16 mt-16 lg:mt-0 w-[230px] sm:w-[270px] md:w-[300px] lg:w-[250px] h-auto'/>
			</div>
		</>
	);
}

export default About;
