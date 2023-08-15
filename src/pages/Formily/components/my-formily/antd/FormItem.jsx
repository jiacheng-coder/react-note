import React, { useContext } from "react";
import { FieldContext, observer } from "@formily/react";

// observer(实现响应式)
export const FormItem = ({ children }) => {
  const field = useContext(FieldContext) 
  // console.log('field', field)
  // if (field.title === 'Name') {
  //   field.visible = false
  // }
  return (
    <div>
      <div>{field.title}</div>
      {/* <div>可见性: {field.visible ? '可见' : '不可见'}</div> */}
      {children}
      <div style={{color:'red'}}>{field.selfErrors.join(",")}</div>
    </div>
  )
}
