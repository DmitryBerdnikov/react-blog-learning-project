import { Suspense, lazy } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import { useTheme } from '@app/providers/ThemeProvider'
import './styles/index.scss'

const About = lazy(() => import('@pages/About'))
const Main = lazy(() => import('@pages/Main'))

const ThemeSwitcher = () => {
	const {
		theme,
		isSystemTheme,
		setDarkTheme,
		setLightTheme,
		setBrightTheme,
		setSystemTheme,
	} = useTheme()

	return (
		<div>
			CurrentTheme: {isSystemTheme ? 'auto' : theme}
			<button type="button" onClick={setSystemTheme}>
				Auto
			</button>
			<button type="button" onClick={setLightTheme}>
				Light
			</button>
			<button type="button" onClick={setBrightTheme}>
				Bright
			</button>
			<button type="button" onClick={setDarkTheme}>
				Dark
			</button>
		</div>
	)
}

const App = () => {
	return (
		<div className="app">
			<ThemeSwitcher />
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
