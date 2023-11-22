import { Field } from "formik"

type Props = {
  name: string,
  type?: string,
  title: string,
  placeholder?: string
}

function CustomCamp({ name, title, placeholder = "", type = "text" }: Props) {
  return (
    <div className="flex flex-col gap-2" >
      <label className="font-semibold text-xl" > {title} </label>
      <Field 
        className="py-2 px-4 bg-zinc-800 outline-none"
      name={name} type={type} placeholder={placeholder} />
    </div>
  )
}

export default CustomCamp