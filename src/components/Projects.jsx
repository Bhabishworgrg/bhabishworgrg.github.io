import { useState, useEffect } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

function Projects() {
	const items = [
		{
			name: 'PushPod',
			description: 'a git hosting platform',
			techstack: 'asp.net mvc, c#, sqlite',
			repo: 'pushpod',
			image: '/projects/pushpod.png',
		},
		{
			name: 'Helpdesk System',
			description: 'a helpdesk system to manage tickets',
			techstack: 'odoo, python',
			repo: 'helpdesk-system',
			image: '/projects/helpdesk-system.png',
		},
		{
			name: 'Turtle Graphics',
			description: 'a paint tool to draw via commands',
			techstack: 'java',
			repo: 'turtle-graphics',
			image: '/projects/turtle-graphics.png',
		},
		{
			name: 'Virtual Drumset',
			description: 'drums to play via keyboard or buttons',
			techstack: 'html, css, javascript',
			repo: 'virtual-drumset',
			image: '/projects/virtual-drumset.png',
			link: 'https://bhabishworgrg.github.io/virtual-drumset/',
		},
		{
			name: 'BOOSE Interpreter',
			description: 'an interpreter for BOOSE, a custom language',
			techstack: '.net core, c#',
			repo: 'BOOSE-interpreter',
			image: '/projects/BOOSE-interpreter.png',
		},
		{
			name: 'Cleckhuddersfax Market Hub',
			description: 'an e-commerce website (group project)',
			techstack: 'html, css, php, javascript, bootstrap, oracle apex',
			repo: 'cleckhuddersfax-market-hub',
			image: '/projects/cleckhuddersfax-market-hub.png',
		},
		{
			name: 'Memory Match',
			description: 'a simple card matching game',
			techstack: 'godot, c#',
			repo: 'memory-match',
			image: '/projects/memory-match.png',
		},
		{
			name: 'Pattern Matcher',
			description: 'a grep clone',
			techstack: '.net core, c#, bash',
			repo: 'pattern-matcher',
			image: '/projects/pattern-matcher.png',
		},
		{
			name: 'Monsetor',
			description: 'a multi-monitor management tool for X11 & i3wm',
			techstack: 'bash',
			repo: 'monsetor',
			image: '/projects/monsetor.png',
		},
		{
			name: 'Bhabeasy',
			description: 'a java maven archetype curated for beginners',
			techstack: 'java, maven',
			repo: 'bhabeasy',
			image: '/projects/bhabeasy.png',
		},
		{
			name: 'Init OpenCV',
			description: 'a project initializer for OpenCV in C++',
			techstack: 'bash',
			repo: 'init-opencv',
			image: '/projects/init-opencv.png',
		},
		{
			name: 'Race for the Ace',
			description: 'a card game simulator',
			techstack: 'python',
			repo: 'race-for-the-ace',
			image: '/projects/race-for-the-ace.png',
		},
		{
			name: 'Rainfall Stats Analyser',
			description: 'a rainfall statistics analyser',
			techstack: 'python',
			repo: 'rainfall-stats-analyser',
			image: '/projects/rainfall-stats-analyser.png',
		},
		{
			name: 'Checkout Process Simulator',
			description: 'a checkout process simulator',
			techstack: 'python',
			repo: 'checkout-process-simulator',
			image: '/projects/checkout-process-simulator.png',
		},
	];

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

	const totalPages = Math.ceil(items.length / itemsPerPage);

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
						{ items.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage).map((item, index) => (
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
										href={ `https://github.com/Bhabishworgrg/${ item.repo }` }
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
}

export default Projects;
