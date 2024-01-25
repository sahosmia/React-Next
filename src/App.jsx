import { useState } from "react";
import Panel from "./component/Panel";
import { data } from "./data";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleShow = (getIndex) => {
    activeIndex === getIndex ? setActiveIndex(null) : setActiveIndex(getIndex);
  };

  return (
    <>
      <div className="container m-auto max-w-xl">
        <h1 className="text-center text-4xl font-bold py-10">Accroding 3.9</h1>

        <div className="border px-5 rounded-lg">
          {data.map((item, index) => (
            <Panel
              key={item.id}
              title={item.title}
              content={item.content}
              isActive={activeIndex === index}
              onShow={() => handleShow(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
