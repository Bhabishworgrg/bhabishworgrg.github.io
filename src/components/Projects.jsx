import { useState, useEffect } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
	const [projects, setProjects] = useState([]);
	const [itemsPerPage, setItemsPerPage] = useState(4);
	const [currentPage, setCurrentPage] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	useEffect(() => {
		const updateItemsPerPage = () => {
			const mobileView = window.innerWidth < 640;
			setItemsPerPage(mobileView ? 1 : 4);
			setIsMobile(mobileView);
		};

		updateItemsPerPage();
		window.addEventListener('resize', updateItemsPerPage);
		return () => window.removeEventListener('resize', updateItemsPerPage);
	}, []);

	useEffect(() => {
		const fetchRepos = async () => {
			const response = await fetch('https://api.github.com/users/Bhabishworgrg/repos');
			const data = await response.json();
			const formattedData = data.map(repo => ({
				name: repo.name,
				description: repo.description,
				techstack: repo.topics?.join(', '),
				repoLink: repo.html_url,
				link: repo.homepage || null
			}));
			setProjects(formattedData);
		};
		fetchRepos();
	});

	const totalPages = Math.ceil(projects.length / itemsPerPage);
	const nextSlide = () => setCurrentPage((currentPage + 1) % totalPages);
	const prevSlide = () => setCurrentPage((currentPage - 1 + totalPages) % totalPages);

	return (
		<>
			<h1 id='projects'>Projects</h1>

			<div className='relative flex flex-col items-center mt-8'>
				<button
					onClick={prevSlide}
					className='absolute top-1/2 left-5 text-xl lg:text-3xl text-tertiary hover:text-highlight hover:scale-150 transition-transform z-10'>
					❮
				</button>

				<AnimatePresence mode='wait'>
					<motion.div
						key={ currentPage }
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						exit={{ opacity: 0, x: -50 }}
						transition={{ duration: 0.4 }}
						className={ `grid ${ isMobile ? 'grid-cols-1 w-full' : 'grid-cols-2' } gap-4` }
					>
						{ projects.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
							<div key={ index } className={ `bg-secondary p-6 text-center ${ isMobile ? 'w-full' : '' } `}>
								<h3 className='text-xl font-semibold'>
									{ item.name }
								</h3>
								<p className='text-base'>
									{ item.description }
								</p>
								<p className='text-highlight mt-2 text-base'>
									<em>{ item.techstack }</em>
								</p>
								<div className='flex justify-center mt-4 gap-6'>
									<a
										href={ item.repoLink }
										target='_blank'
										className='hover:text-highlight hover:scale-150 transition-transform'
									>
										<FaGithub size='24' />
									</a>
									{ item.link &&
										<a
											href={ item.link }
											target='_blank'
											className='hover:text-highlight hover:scale-150 transition-transform'
										>
											<FaLink size='24' />
										</a>
									}
								</div>
							</div>
						))}
					</motion.div>
				</AnimatePresence>

				<button
					onClick={nextSlide}
					className='absolute top-1/2 right-5 text-xl lg:text-3xl text-tertiary hover:text-highlight hover:scale-150 transition-transform'>
					❯
				</button>

				<div className='flex gap-2 mt-6'>
					{ Array.from({ length: totalPages }).map((_, index) => (
						<div
							key={ index }
							className={ `h-2 w-2 ${ index === currentPage ? 'bg-highlight' : 'bg-tertiary' }` }
						/>
					))}
				</div>
			</div>
		</>
	);
};

export default Projects;
