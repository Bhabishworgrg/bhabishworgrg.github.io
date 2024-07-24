import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'
import Footer from './components/Footer.jsx'

import './App.css'

function App() {
	return (
		<div className='text-tertiary mx-5 sm:mx-16 md:mx-36 lg:mx-48'>
			<Navbar/>
		
			<div className='content'>
				<Intro/>
				<About/>
				<Skills/>
				<Projects/>
				<Experience/>
			</div>

			<div className='footer'>
				<Footer/>
			</div>
		</div>
	)
}

export default App
