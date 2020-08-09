import React, { useState, FormEvent } from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem, { Teacher } from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import api from '../../services/api'
import {
	subjects,
	days
} from '../../utils/selectOptions'

import './styles.css'

export default () => {
	const [teachers, setTeachers] = useState([])

	const [subject, setSubject] = useState('')
	const [day, setDay] = useState('')
	const [time, setTime] = useState('')

	async function searchTeachers(e: FormEvent) {
		e.preventDefault()

		const res = await api.get('classes', {
			params: {
				subject,
				day,
				time
			}
		})

		setTeachers(res.data)
	}

	return (
		<div id="page-teacher-list" className="container">
			<PageHeader title="Estes são os proffys disponíveis.">
				<form onSubmit={searchTeachers} id="search-teachers">
					<Select
						id="subject"
						label="Matéria"
						value={subject}
						onChange={e => setSubject(e.target.value)}
						options={subjects}
					/>
					<Select
						id="day"
						label="Dia da semana"
						value={day}
						onChange={e => setDay(e.target.value)}
						options={days}
					/>
					<Input
						type="time"
						id="time"
						label="Hora"
						value={time}
						onChange={e => setTime(e.target.value)}
					/>

					<button type="submit">
						Buscar
					</button>
				</form>
			</PageHeader>

			<main>
				{teachers.map((teacher: Teacher) =>
					<TeacherItem key={teacher.id} teacher={teacher} />
				)}
			</main>
		</div>
	)
}
