import { FaGithub, FaLink } from 'react-icons/fa';

function Projects() {
	const items = [
		{
			name: 'PushPod',
			description: 'a git hosting platform',
			techstack: 'asp.net mvc, c#, sqlite',
			repo: 'pushpod',
		},
		{
			name: 'Helpdesk System',
			description: 'a helpdesk system to manage tickets',
			techstack: 'odoo, python',
			repo: 'helpdesk-system',
		},
		{
			name: 'Turtle Graphics',
			description: 'a paint tool to draw via commands',
			techstack: 'java',
			repo: 'turtle-graphics',
		},
		{
			name: 'Virtual Drumset',
			description: 'a virtual drumset to play drums via keyboard or buttons',
			techstack: 'html, css, javascript',
			repo: 'virtual-drumset',
			link: 'https://bhabishworgrg.github.io/virtual-drumset/',
		},
		{
			name: 'BOOSE Interpreter',
			description: 'an interpreter for BOOSE, a custom graphical programming language',
			techstack: '.net core, c#',
			repo: 'BOOSE-interpreter',
		},
		{
			name: 'Project Cleckhuddersfax Market Hub',
			description: 'an e-commerce website (group project)',
			techstack: 'html, css, php, javascript, bootstrap, oracle apex',
			repo: 'project-cleckhuddersfax-market-hub',
		},
		{
			name: 'Memory Match',
			description: 'a simple card matching game',
			techstack: 'godot, c#',
			repo: 'memory-match',
		},
		{
			name: 'Pattern Matcher',
			description: 'a cli tool to search for strings or patterns',
			techstack: '.net core, c#, bash',
			repo: 'pattern-matcher',
		},
		{
			name: 'Monsetor',
			description: 'a multi-monitor management tool for X11 & i3wm',
			techstack: 'bash',
			repo: 'monsetor',
		},
		{
			name: 'Bhabeasy',
			description: 'a java maven archetype curated for beginners',
			techstack: 'java, maven',
			repo: 'bhabeasy',
		},
		{
			name: 'Init OpenCV',
			description: 'a project initializer for OpenCV in C++',
			techstack: 'bash',
			repo: 'init-opencv',
		},
		{
			name: 'Race for the Ace',
			description: 'a card game simulator',
			techstack: 'python',
			repo: 'race-for-the-ace',
		},
		{
			name: 'Rainfall Stats Analyser',
			description: 'a rainfall statistics analyser',
			techstack: 'python',
			repo: 'rainfall-stats-analyser',
		},
		{
			name: 'Checkout Process Simulator',
			description: 'a checkout process simulator',
			techstack: 'python',
			repo: 'checkout-process-simulator',
		},
	];

	return (
		<>
			<h1 id='projects'>Projects</h1>

			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8'>
				{ items.map((item) => (
					<div className='bg-secondary p-10 group'>
						<div className='flex justify-between'>
							<h2 className='inline-block'>
								{ item.name }
							</h2>
							<div className='flex gap-[10px] text-2xl group-hover:scale-150 transition-transform'>
								<a 
									href={ `https://github.com/Bhabishworgrg/${ item.repo }` }
									target='_blank'
									className='hover:text-highlight'
								>
									<FaGithub />
								</a>
								{ item.link &&
									<a 
										href={ item.link }
										target='_blank'
										className='hover:text-highlight'
									>
										<FaLink />
									</a>
								}
							</div>
						</div>	

						<div className='py-8'>
							{ item.description }
						</div>
						
						<h4>
							{ item.techstack }
						</h4>
					</div>
				))}
			</div>
		</>
	);
};

export default Projects;
