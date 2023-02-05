import { Suspense, lazy } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import './styles/index.scss';

const About = lazy(() => import('./pages/About/About'))
const Main = lazy(() => import('./pages/Main/Main'))

const App = () => {
	return (
		<div className="app">
			<Link to="/">Home</Link>
			<Link to="/about">About</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routes>
					<Route path="/about" element={<About />} />
					<Route path="/" element={<Main />} />
				</Routes>
			</Suspense>
		</div>
	)
}

export default App
