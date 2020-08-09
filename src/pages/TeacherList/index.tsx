import React from 'react'

import PageHeader from '../../components/PageHeader'
import TeacherItem from '../../components/TeacherItem'
import Input from '../../components/Input'
import Select from '../../components/Select'

import {
	subjects,
	weekdays
} from '../../utils/selectOptions'

import './styles.css'

export default () =>
	<div id="page-teacher-list" className="container">
		<PageHeader title="Estes são os proffys disponíveis.">
			<form id="search-teachers">
				<Select
					id="subject"
					label="Matéria"
					options={subjects}
				/>
				<Select
					id="weekday"
					label="Dia da semana"
					options={weekdays}
				/>
				<Input type="time" id="time" label="Hora" />
			</form>
		</PageHeader>

		<main>
			<TeacherItem />
		</main>
	</div>
