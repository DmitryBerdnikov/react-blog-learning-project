import { Route, Routes } from 'react-router-dom';
import { RoutePath } from '@shared/routes'
import { lazyImport } from '@shared/lib/lazyImport'

const { AboutPage } = lazyImport(() => import('@pages/AboutPage'), 'AboutPage')
const { MainPage } = lazyImport(() => import('@pages/MainPage'), 'MainPage')

export const Routing = () => (
	<Routes>
		<Route path={RoutePath.about} element={<AboutPage />} />
		<Route path={RoutePath.main} element={<MainPage />} />
	</Routes>
)
