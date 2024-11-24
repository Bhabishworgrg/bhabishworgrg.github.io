function Skills() {  
	const items = [
		{ skill: 'html-css', label: 'HTML/CSS' },
		{ skill: 'js', label: 'JavaScript' },
		{ skill: 'react', label: 'React' },
		{ skill: 'java', label: 'Java' },
		{ skill: 'csharp', label: 'C#' },
		{ skill: 'c', label: 'C' },
		{ skill: 'python', label: 'Python' },
		{ skill: 'godot', label: 'Godot' },
		{ skill: 'git', label: 'Git' },
		{ skill: 'linux', label: 'Linux' },
	];

	function setLink(skill) {
		return skill === 'git' 
			? 'https://github.com/Bhabishworgrg?tab=repositories' 
			: `https://github.com/stars/Bhabishworgrg/lists/${ skill }`;
	};

	return (
		<>
			<h1 id='skills'>Skills</h1>

    		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-8'>
      			{ items.map((item) => (
        			<a
					href={ setLink(item.skill) }
          			target='_blank'
					className='group flex flex-col items-center bg-secondary p-4'
        			>
          				<img
            			src={ `/skills/${ item.skill }.png` }
            			alt={ item.label }
            			className='w-24 h-24 mb-2 group-hover:scale-125 transition-transform group-hover:saturate-150'
          				/>
          				
						<span className='group-hover:scale-125 transition-transform group-hover:text-highlight'>
							{ item.label }
						</span>
        			</a>
      			))}
    		</div>
		</>
	);
};

export default Skills;
