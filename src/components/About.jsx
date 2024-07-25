function About() {
	return (
		<>
			<h1 id='about'>About Me</h1>
			
			<div className='flex'>
				<p className='flex-7'>
I’m currently pursuing a BSc (H) in Computing degree at The British College, Kathmandu. As an aspiring front-end developer and software enthusiast, I’m passionate about creating intuitive user experiences. My fascination for programming extends to building desktop apps and CLI tools as well. I also enjoy developing games as a hobby. Beyond my technical interests, I’ve gained professional experience as a Data Analyst and a Bench Sales Recruiter.
				</p>
				<div className='flex-3 ml-16'>
					<img
					src={'/assets/me.png'}
					alt='img: me.png'
					className='rounded-tl-3xl rounded-br-3xl border-highlight border-4 w-1/2 sm:w-3/4 lg:w-full h-auto'/>
				</div>
			</div>
		</>
	);
}

export default About;
