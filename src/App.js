
import axios from "axios";

function App(props) {

  const text = "<p>hello world</p>"
  return (
    <>
    <h1>Hello World</h1>
      {text}
      <div dangerouslySetInnerHTML={{ __html: text }}>
      </div>
      <div >

        <nav>
          <div dangerouslySetInnerHTML={{ __html: text }}>
          </div>

        </nav>


      </div>


    </>
  )

}
export default App