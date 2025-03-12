import { FaGithub, FaLink } from 'react-icons/fa';

function Projects() {
	const items = [
		{
			name: 'Turtle Graphics',
			description: 'a paint tool to draw via commands',
			techstack: 'java',
			repo: 'turtle-graphics',
		},
		{
			name: 'Virtual Drumset',
			description: 'a virtual drumset to play drums via keyboard or buttons',
			techstack: 'html, css, javascript, tailwind',
			repo: 'virtual-drumset',
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
			techstack: 'c#',
			link: 'pattern-matcher',
		},
		{
			name: 'Race for the Ace',
			description: 'a card game to simulate shuffling and dealing of a deck',
			techstack: 'python',
			link: 'race-for-the-ace',
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
