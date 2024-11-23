function Skills() {  
	const items = [
		{ image: '/assets/html_css.png', label: 'HTML/CSS' },
		{ image: '/assets/js.png', label: 'JavaScript' },
		{ image: '/assets/react.png', label: 'React' },
		{ image: '/assets/java.png', label: 'Java' },
		{ image: '/assets/csharp.png', label: 'C#' },
		{ image: '/assets/c.png', label: 'C' },
		{ image: '/assets/python.png', label: 'Python' },
		{ image: '/assets/godot.png', label: 'Godot' },
		{ image: '/assets/git.png', label: 'Git' },
		{ image: '/assets/linux.png', label: 'Linux' },
	];

	return (
		<>
			<h1 id='skills'>Skills</h1>

    		<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 pt-4'>
      			{ items.map((item) => (
        			<div
          			className='flex flex-col items-center bg-secondary p-4'
        			>
          				<img
            			src={ item.image }
            			alt={ item.label }
            			className='w-24 h-24 object-cover mb-2 hover:scale-125 transform transition-transform hover:saturate-150'
          				/>
          				<span className='text-tertiary'>{item.label}</span>
        			</div>
      			))}
    		</div>
		</>
	);
};

export default Skills;
