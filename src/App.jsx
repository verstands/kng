import { BrowserRouter } from "react-router-dom"
import IndexRoute from "./Routes/IndexRoute"

function App() {
  return (
    <>
      <BrowserRouter>
        <IndexRoute />
      </BrowserRouter>
    </>
  )
}

export default App
