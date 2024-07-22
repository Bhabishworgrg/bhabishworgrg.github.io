function Experience() {
	const experience = {
		'Experience 1': {
			company: 'ABC Company',
			date: 'Jan 2019 - Dec 2020',
			description: 'This is experience 1',
		},
		'Experience 2': {
			company: 'XYZ Company',
			date: 'Jan 2021 - Dec 2022',
			description: 'This is experience 2',
		},
		'Experience 3': {
			company: 'PQR Company',
			date: 'Jan 2023 - Dec 2024',
			description: 'This is experience 3',
		},
	};

	function addExperience(key) {
		return (
			<li className='experience-tab'>
				<div className='card-title'>
					{ key }
				</div>

				<div className='card-company'>
					{ experience[key]['company'] }
				</div>
				
				<div className='card-date'>
					{ experience[key]['date'] }
				</div>
				
				<div className='card-description'>
					{ experience[key]['description'] }
				</div>
			</li>
		);
	}

	return (
		<>
			<h1 id='experience'>Experience</h1>

			<ul className='experience-list'>
				{ addExperience('Experience 1') }
				{ addExperience('Experience 2') }
				{ addExperience('Experience 3') }
			</ul>
		</>
	);
}

export default Experience;
