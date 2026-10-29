import Arrayrender from "./components/Arrayrender"
import Arrobjrender from "./components/Arrobjrender"
import Props from "./components/Props"

const App = () => {
  const arr=["HTML", "CSS", "JavaScript", "React", "Python"];
  const obj={name:"React",year:2013, author:"Mark Zuckerberg"}

  const problem=[
    {name:"React 3",year:2013, author:"Mark Zuckerberg"},
    {name:"React vite",year:2020, author:"Evan yu"}

  ]


  return (<>
      <div >
        <div>
          <Arrayrender dataOne={arr}/>
        </div>
        <div>
          <Props dataTwo={obj}/>
        </div>
        <div>
          <Arrobjrender dataThree={problem}/>
        </div>
      </div>
    
</>)
}

export default App
