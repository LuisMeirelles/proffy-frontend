import React, { useState } from 'react'

import PageHeader from '../../components/PageHeader'
import Input from '../../components/Input'
import Textarea from '../../components/Textarea'
import Select from '../../components/Select'

import {
	subjects,
	weekdays
} from '../../utils/selectOptions'

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css'

export default () => {
	const [scheduleItems, setScheduleItems] = useState([
		{ weekday: 0, from: '', to: '' }
	])

	function addScheduleItem() {
		setScheduleItems([
			...scheduleItems,
			{ weekday: 0, from: '', to: '' }
		])
	}

	return (
		<div id="page-teacher-form" className="container">
			<PageHeader
				title="Que incrível que você quer dar aulas."
				description="O primeiro passo é preencher esse formulário de inscrição"
			/>

			<main>
				<fieldset>
					<legend>Seus dados</legend>

					<Input id="name" label="Nome Completo" />
					<Input id="avatar" label="Avatar" />
					<Input id="whatsapp" label="Whatsapp" />
					<Textarea id="bio" label="Biografia" />
				</fieldset>

				<fieldset>
					<legend>Sobre a aula</legend>

					<Select
						id="subject"
						label="Matéria"
						options={subjects}
					/>
					<Input id="cost" label="Custo da sua hora por aula" />
				</fieldset>

				<fieldset>
					<legend>
						Horários disponíveis

						<button onClick={addScheduleItem}>
							+ Novo horário
						</button>
					</legend>

					{scheduleItems.map(scheduleItem =>
						<div key={scheduleItem.weekday} className="schedule-item">
							<Select
								id="weekday"
								label="Dia da semana"
								options={weekdays}
							/>
							<Input id="from" label="Das" type="time" />
							<Input id="to" label="Até" type="time" />
						</div>
					)}
				</fieldset>

				<footer>
					<p>
						<img src={warningIcon} alt="Aviso importante" />
						Importante! <br />
						Preencha todos os dados
					</p>
					<button>
						Salvar cadastro
					</button>
				</footer>
			</main>
		</div>
	)
}
