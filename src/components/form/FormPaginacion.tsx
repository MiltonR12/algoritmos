import { Formik } from 'formik'
import PrimaryButton from '../button/PrimaryButton'
import CustomCamp from './CustomCamp'

type Props = {
  handleAction: (nroMarcos: number, nroPages: number) => void
}

function FormPaginacion({ handleAction }: Props) {
  return (
    <Formik
      initialValues={{ nroMarcos: 0, nroPages: 0 }}
      onSubmit={({ nroMarcos, nroPages }) => {
        console.log(nroMarcos, nroPages)
        handleAction(nroMarcos, nroPages)
      }}
    >
      {({ handleSubmit }) => (
        <form onSubmit={handleSubmit}>
          <div className="p-3 flex flex-col gap-3" >
            <div className='flex gap-3' >
              <CustomCamp name='nroMarcos' title='Nro Marcos' type='number' />
              <CustomCamp name='nroPages' title='Nro Paginas' type='number' />
            </div>
            <div>
              <PrimaryButton type="submit" >
                Generar Datos Automaticamente
              </PrimaryButton>
            </div>
          </div>
        </form>
      )}
    </Formik>
  )
}

export default FormPaginacion