import { InputHTMLAttributes } from 'react'
import { FieldError, FormState, UseFormRegister } from 'react-hook-form'

interface IFieldProps {
	type?: string
	placeholder: string
	className?: string
	error?: FieldError | undefined
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps

type TypeTextAreaPropsField = InputHTMLAttributes<HTMLTextAreaElement> &
	IFieldProps

export interface IField extends TypeInputPropsField {}

export interface IFieldTextArea extends TypeTextAreaPropsField {}

export interface ICreateFields {
	register: UseFormRegister<any>
	formState: any
	isRequired?: boolean
}
