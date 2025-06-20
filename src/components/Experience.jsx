import { motion } from 'framer-motion';
import { FaBuilding, FaLaptopHouse } from 'react-icons/fa';

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
			mode: 'remote',
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
			mode: 'remote',
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
			mode: 'onsite',
		},
	];

	const modeIcons = {
		onsite: <FaBuilding className='text-highlight w-10 h-10 object-contain'/>,
		remote: <FaLaptopHouse className='text-highlight w-10 h-10 object-contain'/>,
	}

	return (
		<>
			<h1 id='experience'>Experience</h1>


			<div className='relative border-l-2 border-highlight mt-8 pl-6 space-y-8'>
				{ items.map((item, index) => (
					<motion.div
						className='relative bg-secondary p-8 pl-10'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5, delay: index * 0.1 }}
						key={ item.position }
					>
						<div className='flex flex-col lg:flex-row justify-between items-start gap-4'>
							<div className='flex-1'>
								<div className='flex items-center gap-3'>
									<div>
										<h3 className='text-lg lg:text-xl font-semibold'>{ item.position }</h3>
										<p className='text-base'>{ item.company }</p>
										<p className='text-sm italic'>{ item.date }</p>
									</div>
								</div>

								<ul className='mt-4 pl-5 text-sm lg:text-base space-y-1'>
									{ item.description.map((description) => (
										<li className='relative pl-5 before:content-[""] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-highlight before:rounded-none'>{ description }</li>
									))}
								</ul>
							</div>
							{ modeIcons[item.mode] }
						</div>
					</motion.div>
				))}
			</div>
		</>
	);
};

export default Experience;
