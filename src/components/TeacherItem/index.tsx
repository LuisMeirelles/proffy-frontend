import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './styles.css'
import api from '../../services/api'

export interface Teacher {
	id: number
	avatar: string
	bio: string
	cost: number
	name: string
	subject: string
	whatsapp: string
}

interface TeacherItemProps {
	teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher: { name, avatar, bio, cost, subject, whatsapp, id } }) => {
	function newConnection() {
		api.post('connections', {
			user_id: id
		})
	}

	return (
		<article className="teacher-item">
			<header>
				<img src={avatar} alt={name} />

				<div>
					<strong>{name}</strong>
					<span>{subject}</span>
				</div>
			</header>

			<p>{bio}</p>

			<footer>
				<p>
					Preço/Hora
					<strong>R$ {cost}</strong>
				</p>

				<a
					onClick={newConnection}
					href={
						`https://wa.me/${whatsapp}?
						text=Ol%C3%A1%2C+eu+vi+seu+perfil+no+Proffy+e+gostaria+de+conversar+sobre+as+aulas%21`
					}
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src={whatsappIcon} alt="Whatsapp" />
					Entrar em contato
				</a>
			</footer>
		</article>
	)
}

export default TeacherItem
