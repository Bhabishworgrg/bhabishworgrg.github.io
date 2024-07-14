import Navbar from './components/Navbar.jsx'
import Intro from './components/Intro.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import Experience from './components/Experience.jsx'

function App() {
	return (
		<div className='App'>
			<Navbar/>
			<Intro/>
			<About/>
			<Skills/>
			<Projects/>
			<Experience/>
		</div>
	)
}

export default App
