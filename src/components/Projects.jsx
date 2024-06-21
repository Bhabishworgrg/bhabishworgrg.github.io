function Projects() {
	const projects = {
		'Project 1': {
			image: '/assets/project1.jpg',
			description: 'This is project 1',
			techStack: 'React, Node, Express, MongoDB',
			link: '',
		},
		'Project 2': {
			image: '/assets/project2.jpg',
			description: 'This is project 2',
			techStack: 'Angular, Node, Express, MongoDB',
			link: '',
		},
		'Project 3': {
			image: '/assets/project3.jpg',
			description: 'This is project 3',
			techStack: 'Vue, Node, Express, MongoDB',
			link: '',
		},
	};

	function addProject(key) {
		return (
			<li className='projects-card'>
				<div className='card-title'>
					{ key }
				</div>
				
				<div className='card-image'>
					<img src={ projects[key]['image'] } alt={ key } />
				</div>
				
				<div className='card-description'>
					{ projects[key]['description'] }
				</div>
				
				<div className='card-tech'>
					{ projects[key]['techStack'] }
				</div>

				<a href={ projects[key]['link'] } target='_blank' rel='noreferrer'>
				</a>
			</li>
		);
	}

	return (
		<>
			<h1>Projects</h1>

			<ul className='projects-grid'>
				{ addProject('Project 1') }
				{ addProject('Project 2') }
				{ addProject('Project 3') }
			</ul>
		</>
	);
}

export default Projects;
