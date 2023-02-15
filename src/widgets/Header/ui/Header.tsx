import { Link } from 'react-router-dom'
import { RoutePath } from '@shared/routes'
import styles from './Header.module.scss'

export const Header = () => {
	return (
		<div>
			<ul className={styles.menuList}>
				<li>
					<Link to={RoutePath.main}>Home</Link>
				</li>
				<li>
					<Link to={RoutePath.about}>AboutPage</Link>
				</li>
			</ul>
		</div>
	)
}
