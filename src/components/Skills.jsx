function Skills() {  
	function addSkill(title, filename) {
		return (
			<>
				<img src={ `/assets/${ filename }.png` } alt={ filename }/>
				<span>{ title }</span>
			</>
		);
	};

	return (
		<>
			<h1 id='skills'>Skills</h1>

			<div>
				{ addSkill('HTML/CSS', 'html_css') }
				{ addSkill('JavaScript', 'js') }
				{ addSkill('React', 'react') }
				{ addSkill('Java', 'java') }
				{ addSkill('C#', 'csharp') }
				{ addSkill('C', 'c') }
				{ addSkill('Python', 'python') }
				{ addSkill('Godot', 'godot') }
				{ addSkill('Git', 'git') }
				{ addSkill('Linux', 'linux') }
			</div>
		</>
	);
};

export default Skills;
