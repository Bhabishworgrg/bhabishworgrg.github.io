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
		<div className='mx-5 sm:mx-16 md:mx-30 lg:mx-48'>
			<Navbar/>
		
			<div className='mx-3 sm:mx-10 md:mx-10 lg:mx-20'>
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
