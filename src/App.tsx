import Footer from './components/Footer'
import Header from './components/Header'
import Contact from './components/main/Contact'
import Price from './components/main/Price'
import Privelege from './components/main/Privelege'
import Vehicle from './components/main/Vehicle'

import { useState } from 'react'

function App() {
	const [burgerOpen, setBurgerOpen] = useState(false)
	burgerOpen
		? (document.body.style.overflowY = 'hidden')
		: (document.body.style.overflowY = '')
	return (
		<div>
			<Header burgerOpen={burgerOpen} setBurgerOpen={setBurgerOpen} />
			<Privelege />
			<Price />
			<Vehicle />
			<Contact />
			<Footer />
		</div>
	)
}

export default App
