import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'

export default () =>
	<article className="teacher-item">
		<header>
			<img src="https://pbs.twimg.com/profile_images/1175432315553615872/m9M_Rb72_400x400.jpg" alt="Luis Meirelles"/>

			<div>
				<strong>Luis Meirelles</strong>
				<span>Matemática</span>
			</div>
		</header>

		<p>
			Lorem, ipsum
			<br/><br/>
			Dolor sit amet consectetur adipisicing elit. Modi voluptatibus repellat iusto fugiat tenetur officia nostrum at dolore! Natus deserunt nobis fuga cumque nulla veritatis ducimus officiis fugit beatae iure.
		</p>

		<footer>
			<p>
				Preço/Hora
				<strong>R$ 80,00</strong>
			</p>

			<button type="button">
				<img src={whatsappIcon} alt="Whatsapp" />
				Entrar em contato
			</button>
		</footer>
	</article>
