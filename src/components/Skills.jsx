import { useState } from 'react';

function Skills() {  
	const items = [
		{ skill: 'dotnet', label: '.NET' },
		{ skill: 'java', label: 'Java' },
		{ skill: 'python', label: 'Python' },
		{ skill: 'linux', label: 'Linux' },
		{ skill: 'git', label: 'Git' },
		{ skill: 'docker', label: 'Docker' },
		{ skill: 'js', label: 'JavaScript' },
		{ skill: 'postgresql', label: 'PostgreSQL' },
		{ skill: 'sqlite', label: 'SQLite' },
		{ skill: 'react', label: 'React' },
		{ skill: 'godot', label: 'Godot' },
		{ skill: 'c', label: 'C' },
		{ skill: 'odoo', label: 'Odoo' },
		{ skill: 'bootstrap', label: 'Bootstrap' },
		{ skill: 'tailwind', label: 'Tailwind CSS' },
		{ skill: 'oracle-apex', label: 'Oracle APEX' }
	];

	const setLink = (skill) => {
		return `https://github.com/${
			skill === 'git' 
			? 'Bhabishworgrg?tab=repositories' 
			: `stars/Bhabishworgrg/lists/${ skill }` 
		}`;
	};

	const itemsAtStart = 9;
	const [showAll, setShowAll] = useState(false);
	const displayedItems = showAll ? items : items.slice(0, itemsAtStart);

	return (
		<>
			<h1 id='skills'>Skills</h1>

    		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8'>
      			{ displayedItems.map((item) => (
        			<a
						key={ item.skill }
						href={ setLink(item.skill) }
						target='_blank'
						className='group flex flex-col items-center bg-secondary p-4 border border-transparent transition-all hover:border-highlight hover:shadow-md hover:shadow-highlight'
        			>
          				<img
            				src={ `/skills/${ item.skill }.png` }
            				alt={ item.label }
            				className='w-24 h-24 mb-2 group-hover:scale-110 transition-transform'
          				/>
          				
						<span className='group-hover:scale-110 transition-transform group-hover:text-highlight'>
							{ item.label }
						</span>
        			</a>
      			))}
    		</div>
			
			<button
				onClick={ () => setShowAll(prevShowAll => !prevShowAll) }
				className='mt-4 w-full bg-secondary p-4 border border-transparent shadow-md hover:border-highlight hover:shadow-highlight transition-transform group'
			>
				<p className='text-base group-hover:scale-110 group-hover:text-highlight transition-transform'>
					{ showAll ? 'Show less' : 'Show more' }
				</p>
			</button>
		</>
	);
};

export default Skills;
