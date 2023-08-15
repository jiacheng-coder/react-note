import React, { useContext } from "react";
import { FormContext } from "./context";
import { FieldContext, observer } from "@formily/react";

const Field = observer((props) => {
  const form = useContext(FormContext);
  const field = form.createField(props); // 内核层挂载到form实例上的函数，我们暂时可以忽略
  console.log("form:". form)
  console.log("field:". field)
  const component = React.createElement(field.component[0], { // Input 组件 
    ...field.component[1], // 附加的属性
    value: field.value, // 值属性，field提供
    onChange: field.onInput, // onChange 事件，同样由 field 提供
  });
  const decorator = React.createElement( 
    field.decorator[0], // FormItem组件
    field.decorator[1], // 附加的属性
    component // 子元素
  );
  return (
    <FieldContext.Provider value={field}>{decorator}</FieldContext.Provider>
  );
});

export default Field;
