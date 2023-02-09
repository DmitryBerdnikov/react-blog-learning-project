import { Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
	theme: Theme
	isSystemTheme: boolean
	setLightTheme: () => void
	setDarkTheme: () => void
	setBrightTheme: () => void
	setSystemTheme: () => void
}

export function useTheme(): UseThemeResult {
	const { theme, setTheme, isSystemTheme, setSystemTheme } =
		useContext(ThemeContext)

	const setLightTheme = () => {
		setTheme('light')
	}

	const setDarkTheme = () => {
		setTheme('dark')
	}

	const setBrightTheme = () => {
		setTheme('special')
	}

	return {
		theme,
		isSystemTheme,
		setLightTheme,
		setDarkTheme,
		setBrightTheme,
		setSystemTheme,
	}
}
