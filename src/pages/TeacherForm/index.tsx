import React, {
	useState,
	FormEvent
} from 'react'
import { useHistory } from 'react-router-dom'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import api from '../../services/api'
import {
	subjects,
	days
} from '../../utils/selectOptions'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

export default () => {
	const history = useHistory()

	const [name, setName] = useState('')
	const [avatar, setAvatar] = useState('')
	const [whatsapp, setWhatsapp] = useState('')
	const [bio, setBio] = useState('')

	const [subject, setSubject] = useState('')
	const [cost, setCost] = useState('')

	const [schedule, setSchedule] = useState([
		{ day: 0, from: '', to: '' }
	])

	function addScheduleItem() {
		setSchedule([
			...schedule,
			{ day: 0, from: '', to: '' }
		])
	}

	function setScheduleItemValue(position: number, field: string, value: string) {
		setSchedule(schedule.map((item, index) =>
			index === position ? { ...item, [field]: value } : item
		))
	}

	function handleCreateClass(e: FormEvent) {
		e.preventDefault()

		api.post('classes', {
			name,
			avatar,
			whatsapp,
			bio,
			subject,
			cost: Number(cost),
			schedule
		}).then(() => {
			alert('Cadastro realizado com sucesso')

			history.push('/')
		}).catch(() => {
			alert('Erro no cadastro')
		})
	}

	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="Que incrível que você quer dar aulas."
				description="O primeiro passo é preencher esse formulário de inscrição"
			/>

			<main>
				<form onSubmit={handleCreateClass}>
					<fieldset>
						<legend>Seus dados</legend>

						<Input
							id="name"
							label="Nome Completo"
							value={name}
							onChange={e => setName(e.target.value)}
						/>
						<Input
							id="avatar"
							label="Avatar"
							value={avatar}
							onChange={e => setAvatar(e.target.value)}
						/>
						<Input
							id="whatsapp"
							label="Whatsapp"
							value={whatsapp}
							onChange={e => setWhatsapp(e.target.value)}
						/>
						<Textarea
							id="bio"
							label="Biografia"
							value={bio}
							onChange={e => setBio(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>Sobre a aula</legend>

						<Select
							id="subject"
							label="Matéria"
							value={subject}
							onChange={e => setSubject(e.target.value)}
							options={subjects}
						/>
						<Input
							id="cost"
							label="Custo da sua hora por aula"
							value={cost}
							onChange={e => setCost(e.target.value)}
						/>
					</fieldset>

					<fieldset>
						<legend>
							Horários disponíveis

							<button type="button" onClick={addScheduleItem}>
								+ Novo horário
							</button>
						</legend>

						{schedule.map((scheduleItem, index) =>
							<div key={scheduleItem.day} className="schedule-item">
								<Select
									id="day"
									label="Dia da semana"
									value={scheduleItem.day}
									onChange={e => setScheduleItemValue(index, 'day', e.target.value)}
									options={days}
								/>
								<Input
									id="from"
									label="Das"
									type="time"
									value={scheduleItem.from}
									onChange={e => setScheduleItemValue(index, 'from', e.target.value)}
								/>
								<Input
									id="to"
									label="Até"
									type="time"
									value={scheduleItem.to}
									onChange={e => setScheduleItemValue(index, 'to', e.target.value)}
								/>
							</div>
						)}
					</fieldset>

					<footer>
						<p>
							<img src={warningIcon} alt="Aviso importante" />
							Importante! <br />
							Preencha todos os dados
						</p>
						<button type="submit">
							Salvar cadastro
						</button>
					</footer>
				</form>
			</main>
		</div>
	)
}
