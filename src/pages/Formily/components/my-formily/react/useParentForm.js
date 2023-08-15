import { useContext } from 'react'
import { FormContext } from './context'

export function useParentForm() {
  const form = useContext(FormContext) // 获取 Context 对象的当前值，这个值是由最近的上层 <Context.Provider> 的 value 属性决定的。
  return form
}
