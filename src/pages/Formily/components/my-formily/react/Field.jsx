import React, { useContext } from "react";
import { FormContext } from "./context";
import { FieldContext, observer } from "@formily/react";

const Field = observer((props) => {
  const form = useContext(FormContext);
  const field = form.createField(props); // 内核层做的事，我们暂时可以忽略
  const component = React.createElement(field.component[0], { 
    ...field.component[1], // Input组件
    value: field.value,
    onChange: field.onInput,
  });
  const decorator = React.createElement( 
    field.decorator[0], // FormItem组件
    field.decorator[1],
    component
  );
  return (
    <FieldContext.Provider value={field}>{decorator}</FieldContext.Provider>
  );
});

export default Field;
