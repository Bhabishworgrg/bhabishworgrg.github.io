function Skills() {  
	function addSkill(filename) {
		return (
			<>
				<img src={ `/assets/${ filename }.png` } alt={ filename }/>
				<span>{ filename }</span>
			</>
		);
	};

	return (
		<>
			<h1>Skills</h1>

			<div>
				{ addSkill('HTML CSS') }
				{ addSkill('JavaScript') }
				{ addSkill('React') }
				{ addSkill('Java') }
				{ addSkill('C#') }
				{ addSkill('C') }
				{ addSkill('Python') }
				{ addSkill('Godot') }
				{ addSkill('Git') }
				{ addSkill('Linux') }
			</div>
		</>
	);
};

export default Skills;
