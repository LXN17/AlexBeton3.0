import '../styles/styles.scss'
import headerStyles from '../styles/header.module.scss'

interface headerProps {
	burgerOpen: boolean
	setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<headerProps> = ({ burgerOpen, setBurgerOpen }) => {
	return (
		<section className={headerStyles.header}>
			<div className={headerStyles.header_left}>
				<div className={headerStyles.header_logo}>
					<a href='#privelege'>
						<img src='images/Logo.png' alt='' />
					</a>
				</div>
				<div className={headerStyles.header_title}>
					<div className={headerStyles.header_title_name}>
						<a href='#privelege'>ALEXBETON</a>
					</div>
					<div className={headerStyles.header_description}>
						<a href='#privelege'>
							Производство и продажа строительных материалов
						</a>
					</div>
				</div>
			</div>
			<div
				className={
					!burgerOpen
						? headerStyles.header_menu_icon
						: headerStyles.header_menu_icon_active
				}
				onClick={() => {
					setBurgerOpen(prevState => !prevState)
				}}
			>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<nav
				className={
					!burgerOpen
						? headerStyles.header_right
						: headerStyles.header_right_active
				}
			>
				<ul className={headerStyles.header_navigation_list}>
					<li>
						<a
							href='#privelege'
							onClick={() => {
								setBurgerOpen(prevState => !prevState)
							}}
						>
							ГЛАВНАЯ
						</a>
					</li>
					<li>
						<a
							href='#price'
							onClick={() => {
								setBurgerOpen(prevState => !prevState)
							}}
						>
							ТОВАР
						</a>
					</li>
					<li>
						<a
							href='#vehicle'
							onClick={() => {
								setBurgerOpen(prevState => !prevState)
							}}
						>
							ТЕХНИКА
						</a>
					</li>
					<li>
						<a
							href='#contacts'
							onClick={() => {
								setBurgerOpen(prevState => !prevState)
							}}
						>
							КОНТАКТЫ
						</a>
					</li>
				</ul>
			</nav>
			<nav className={headerStyles.normi}>
				<ul className={headerStyles.header_navigation_list}>
					<li>
						<a href='#privelege'>ГЛАВНАЯ</a>
					</li>
					<li>
						<a href='#price'>ТОВАР</a>
					</li>
					<li>
						<a href='#vehicle'>ТЕХНИКА</a>
					</li>
					<li>
						<a href='#contacts'>КОНТАКТЫ</a>
					</li>
				</ul>
			</nav>
		</section>
	)
}

export default Header
