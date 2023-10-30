
import axios from "axios";

function App(props) {

  const text = "<p>hello world</p>"
  return (
    <>
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