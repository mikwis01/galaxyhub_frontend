import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './views/Landing/Landing'
import News from './views/News/News'
import About from './views/About/About'

function App() {
	return (
		<div className="App">
			<Router>
				<Routes>
					<Route path="/" element={<Landing />} />
					<Route path="/news" element={<News />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
