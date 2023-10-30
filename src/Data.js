import { useSelector } from "react-redux"
function Data() {

  const cnt = useSelector(state => state.counter)
  return (
    <>
      <h1>{cnt}</h1>
    </>
  )

}
export default Data