import { motion } from 'framer-motion';

function Experience() {
	const items = [
		{
			position: 'AI Image Annotator',
			company: 'Invisible Technologies',
			date: 'Jul 2024 - Present',
			description: [
				'Annotate images for AI/ML models, ensuring accuracy and consistency.', 
				'Collaborate with the team via Slack to provide high-quality annotations.',
				'Maintain project accuracy and throughput requirements consistently.',
			],
		},
		{
			position: 'Data Annotator',
			company: 'CloudFactory',
			date: 'Nov 2021 - Present',
			description: [
				'Annotate on Dataloop, Hasty, Encord and more for detailed analysis.',
    			'Communicate with Team Captains via Zoom, and Slack for updates.',
    			'Help train new employees, ensuring they understand the tools and standards.',
    			'Consistently maintain project-required accuracy and throughput levels.',
			],
		},
		{
			position: 'Bench Sales Recruiter',
			company: 'Luzon Technologies',
			date: 'Apr 2021 - Nov 2021',
			description: [
				'Marketed bench consultants for CTC positions in the US IT industry.',
				'Worked night shifts collaborating with the offshore team via Slack and Google Meet.',
				'Employed Boolean Search techniques to identify suitable requirements.',
				'Coordinated with consultants and vendors to set up interviews.',
				'Maintained daily and weekly status reports of all activities.',
			],		
		},
	];

	return (
		<>
			<h1 id='experience'>Experience</h1>


			<div className='grid grid-cols-1 gap-6 pt-8'>
				{ items.map((item) => (
					<motion.div
						className='bg-secondary p-10'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
						key={ item.position }
					>
						<div className='relative left-2 md:left-4 lg:left-8 group'>
							<p className='text-base lg:text-lg font-semibold group-hover:scale-105 duration-300 transition-transform'>
								{ item.position }
							</p>

							<p className='text-base lg:text-lg group-hover:scale-105 duration-500 transition-transform'>
								{ item.company }
							</p>

							<p className='text-sm lg:text-base group-hover:scale-105 duration-700 transition-transform'>
								<em>{ item.date }</em>
							</p>

							<ul className='text-sm lg:text-base lg:pl-4 pt-2 list-square marker:text-highlight group-hover:scale-105 duration-1000 transition-transform'>
								{ item.description.map((item) => (
									<li>
										{ item }
									</li>
								))}
							</ul>
						</div>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default Experience;
