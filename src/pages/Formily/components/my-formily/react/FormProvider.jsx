import { useEffect } from 'react'
import { FormContext } from './context'

const FormProvider = ({form, children}) => {
  // 表单的挂载和卸载 -> 内核层
  useEffect(() => { 
    form.onMount()
    return () => {  // return的时候，记得做副作用清理
      form.onUnmount()
     }
   },[])
  return (
    <FormContext.Provider value={form}>
      {children}
    </FormContext.Provider>
  )
}

export default FormProvider
