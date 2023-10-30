import { Field } from 'formik'

type Props = {
  title: string,
  name: string,
  placeholder?: string,
  type?: string
}

function InputCustom({ title, placeholder, name, type = "text"}: Props) {
  return (
    <div className='flex flex-col gap-1' >
      <label className='text-blue-500' >
        {title}
      </label>
      <Field
        className='outline-none bg-zinc-800 text-white py-1 px-2'
        name={name}
        placeholder={placeholder}
        type={type}
      />
    </div>
  )
}

export default InputCustom