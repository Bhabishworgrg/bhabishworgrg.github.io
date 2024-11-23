function Experience() {
	const items = [
		{
			position: 'AI Image Annotator',
			company: 'Invisible Technologies',
			date: 'Jul 2024 - Present',
			description: [
				'Annotated images for AI/ML models, ensuring accuracy and consistency.', 
				'Collaborated with the team via Slack to provide high-quality annotations for model training.',
				'Maintained project accuracy and throughput requirements consistently.',
			],
		},
		{
			position: 'Data Annotator',
			company: 'CloudFactory',
			date: 'Nov 2021 - Present',
			description: [
				'Annotate on Dataloop, Hasty, Encord, or directly on the client\'s platform, for detailed analysis.',
    			'Communicate with Team Captains via Zoom, Google Meet, and Slack to receive client updates.',
    			'Help train new employees in the annotation process, ensuring they understand the tools and standards.',
    			'Consistently maintain project-required accuracy and throughput levels.',
			],
		},
		{
			position: 'Bench Sales Recruiter',
			company: 'Luzon Technologies',
			date: 'Apr 2021 - Nov 2021',
			description: [
				'Marketed the bench consultants for Corp-To-Corp positions in the US IT industry.',
				'Worked night shifts collaborating with the offshore US team via Slack and Google Meet.',
				'Employed Boolean Search techniques to identify suitable requirements.',
				'Coordinated with consultants and vendors to set up interviews using Google Calendar.',
				'Maintained daily and weekly status reports of all activities in Google Sheets.',
			],		
		},
	];

	return (
		<>
			<h1 id='experience'>Experience</h1>

			<div className='grid grid-cols-1 gap-6 pt-8'>
				{ items.map((item) => (
					<div className='bg-secondary pl-20 p-10 group'>
						<h2 className='group-hover:scale-110 transition-transform'>
							{ item.position }
						</h2>

						<h3 className='group-hover:scale-110 duration-500 transition-transform'>
							{ item.company }
						</h3>
						
						<h4 className='group-hover:scale-110 duration-700 transition-transform'>
							{ item.date }
						</h4>
						
						<ul className='list-square marker:text-highlight pl-5 group-hover:scale-110 duration-1000 transition-transform'>
							{ item.description.map((item) => (
								<li>
									{ item }
								</li>
    	    				))}
    	  				</ul>
					</div>
				))}
			</div>
		</>
	);
};

export default Experience;
