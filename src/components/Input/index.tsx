import React, { InputHTMLAttributes } from 'react'

import './styles.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	label: string
	id: string
}

const Input: React.FC<InputProps> = ({ label, id, ...rest }) =>
	<div className="input-block">
		<label htmlFor={id}>{label}</label>
		<input id={id} type="text" {...rest} />
	</div>

export default Input
