import './App.css'
import { Display } from './components/Display'
import { Button } from './components/ui/button'

function App() {



  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">

        <div className="text-3xl">
          What's new in NYC?
        </div>

        <Button className="w-fit">
          Pull job postings
        </Button>

        <Display />
      </div>



    </>
  )
}

export default App
