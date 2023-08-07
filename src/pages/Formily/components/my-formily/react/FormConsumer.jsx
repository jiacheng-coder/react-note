import { observer } from "@formily/react"
import { useContext } from "react"
import { FormContext } from "./context"

const FormConsumer = observer(({children}) => { // FormConsumer的children实际传递的就是一个函数
  const form = useContext(FormContext)
  return children(form)
})

export default FormConsumer
