import { observer, observable } from "../components/my-formily/reactive-react";
import { Button } from "antd";

// 可观察对象
const obj = observable({
  count: 1,
});

// 组件更新的条件：forceUpdate钩子，父组件更新，context上下文对象更新
// 此处进行reaction
const ReactivePage = observer(() => {
  const handleClick = () => {
    obj.count++;
  }
  return (
    <>
      <h3>Reactive Page</h3>
      <section>
        <span>Count --  </span>
        <Button onClick={handleClick}>{obj.count}</Button>
      </section>
    </>
  );
});

export default ReactivePage;
