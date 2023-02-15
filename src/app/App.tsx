import { Suspense } from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '@app/providers/ThemeProvider'
import { Routing } from '@pages/index'
import './styles/index.scss'

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
			<Link to="/about">AboutPage</Link>
			<Suspense fallback={<div>Loading...</div>}>
				<Routing />
			</Suspense>
		</div>
	)
}

export default App
