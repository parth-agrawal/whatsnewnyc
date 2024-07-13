import { useState } from 'react'
import './App.css'
import { Display } from './components/Display'
import { Button } from './components/ui/button'
import { getJobPostings } from './services/getJobPostings'

function App() {


  const [data, setData] = useState<any>([])

  const handleClick = async () => {
    const response = getJobPostings()
    console.log(response)
  }




  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center">

        <div className="text-3xl">
          What's new in NYC?
        </div>

        <Button className="w-fit" onClick={handleClick}>
          Pull job postings
        </Button>

        <Display />
      </div>



    </>
  )
}

export default App
