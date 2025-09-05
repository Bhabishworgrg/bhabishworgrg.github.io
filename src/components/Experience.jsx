import { motion } from 'framer-motion';
import { FaBuilding, FaLaptopHouse } from 'react-icons/fa';

function Experience() {
	const items = [
		{
			position: 'Software Engineer Intern',
			company: 'Verisk',
			date: 'Jun 2025 - Sep 2025',
			description: [
				'Built RESTful APIs using ASP.NET Core and Python FastAPI with layered architecture for maintainability.',
				'Integrated PostgreSQL via Entity Framework Core (for .NET) and SQLAlchemy ORM (for Python).',
				'Implemented JWT authentication and role-based access control.',
				'Designed clear data flow with DTOs (.NET) and Pydantic schemas (Python) and used LINQ (for .NET) and ORM queries for data manipulation.'
				],
			mode: 'onsite',
		},
		{
			position: 'Software Engineer Intern',
			company: 'Amnil Technologies',
			date: 'Dec 2024 - Jun 2025',
			description: [
				'Designed and developed Python-based applications tailored to business requirements with custom Odoo modules.',
				'Integrated multiple Odoo apps to streamline workflows and improve data consistency.',
				'Customized user interfaces using Bootstrap to enhance usability and branding.',
				'Used Odoo ORM to perform database operations in PostgreSQL database.',
				'Managed deployment of dockerized Odoo instances, ensuring data integrity.'
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
				'Communicated with team members via Slack to align on project goals and resolve edge cases.'
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
				'Trained new team members on annotation tools and quality standards to ensure consistent output.'
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
				'Maintained daily and weekly activity reports using Google Sheets to track progress and performance.'
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
