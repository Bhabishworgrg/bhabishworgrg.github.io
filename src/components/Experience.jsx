import { motion } from 'framer-motion';
import { FaBuilding, FaLaptopHouse } from 'react-icons/fa';

function Experience() {
	const items = [
		{
			position: 'Backend Intern',
			company: 'Amnil Technologies',
			date: 'Dec 2024 - Mar 2025',
			description: [
				'Developed a to-do app in Odoo, using MVC structure and Odoo’s ORM.',
				'Built a helpdesk system by integrating existing modules with the custom to-do, helpdesk and bridge modules.',
				'Customized user interfaces with Bootstrap to enhance usability and layout.',
				'Used PostgreSQL for data persistence and Docker for containerized deployments.',
				'Created a public ticket submission portal by implementing custom controllers, routing, and form handling.',
				'Applied security best practices using Odoo’s record rules and user groups to restrict data access.',
			],
			mode: 'onsite',
		},
		{
			position: 'AI Image Annotator',
			company: 'Invisible Technologies',
			date: 'Jul 2024 - Nov 2024',
			description: [
				'Annotated images used for training AI/ML models, following detailed labeling guidelines.',
				'Ensured consistency and precision across annotations to support high-quality model performance.',
				'Used internal tools and client-provided platforms to complete annotation tasks efficiently.',
				'Communicated with team members via Slack to align on project goals and resolve edge cases.',
				'Consistently achieved or exceeded accuracy and throughput targets set by the project.',
			],
			mode: 'remote',
		},
		{
			position: 'Data Annotator',
			company: 'CloudFactory',
			date: 'Nov 2021 - Nov 2024',
			description: [
				'Annotated videos and images on Dataloop, Hasty, Encord, and client-specific platforms.',
				'Collaborated with Team Captains via Zoom, Google Meet, and Slack to align with client updates.',
				'Trained new team members on annotation tools and quality standards to ensure consistent output.',
				'Maintained high accuracy and throughput in line with project requirements.',
			],
			mode: 'remote',
		},
		{
			position: 'Bench Sales Recruiter',
			company: 'Luzon Technologies',
			date: 'Apr 2021 - Nov 2021',
			description: [
				'Marketed bench consultants for Corp-to-Corp (C2C) positions in the US IT industry.',
				'Collaborated with the offshore US team during night shifts via Slack and Google Meet.',
				'Utilized Boolean Search techniques to identify and match suitable job requirements.',
				'Scheduled and coordinated interviews with consultants and vendors using Google Calendar.',
				'Maintained daily and weekly activity reports using Google Sheets to track progress and performance.',
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
