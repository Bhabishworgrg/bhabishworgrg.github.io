import { useState } from 'react';
import { FaGithub, FaLink } from 'react-icons/fa';

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
			description: 'a virtual drumset to play drums via keyboard or buttons',
			techstack: 'html, css, javascript',
			repo: 'virtual-drumset',
			image: '/projects/virtual-drumset.png',
			link: 'https://bhabishworgrg.github.io/virtual-drumset/',
		},
		{
			name: 'BOOSE Interpreter',
			description: 'an interpreter for BOOSE, a custom graphical programming language',
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
			description: 'a cli tool to search for strings or patterns',
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

	const [current, setCurrent] = useState(0);
	const nextSlide = () => setCurrent((current + 1) % items.length);
	const prevSlide = () => setCurrent((current - 1 + items.length) % items.length);

	return (
		<>
			<h1 id='projects'>Projects</h1>

			<div
				className='relative flex justify-center items-center min-h-screen bg-cover bg-center bg-no-repeat'
				style={{ backgroundImage: `url(${ items[current].image })` }}
			>
				<button onClick={prevSlide} className='absolute left-0 p-2 bg-gray-700 text-white rounded-l'>❮</button>
				<div className='text-center p-4'>
					<h3 className='text-2xl'>{items[current].name}</h3>
					<p className='text-sm'>{items[current].description}</p>
					<em className='text-highlight'>{items[current].techstack}</em>
					<div className='flex justify-center mt-4 gap-4'>
						<a 
							href={ `https://github.com/Bhabishworgrg/${ items[current].repo }` }
							target='_blank'
							className='hover:text-highlight hover:scale-150 transition-transform'
						>									
							<FaGithub />
						</a>
						{ items[current].link &&
							<a 
								href={ items[current].link }
								target='_blank'
								className='hover:text-highlight hover:scale-150 transition-transform'
							>
								<FaLink />
							</a>
						}
					</div>
				</div>
				<button onClick={nextSlide} className='absolute right-0 p-2 bg-gray-700 text-white rounded-r'>❯</button>
			</div>
		</>
	);
}

export default Projects;
