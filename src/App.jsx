
import './App.css'
import ControlledField from './components/controlledField/ControlledField'
import FormAcrtion from './components/simpleForm/FormAcrtion'
import FormActionUpdate from './components/simpleForm/FormActionUpdate'
import SimpleFrom from './components/simpleForm/SimpleFrom'

function App() {
 


  return (
    <>
      

      <div className='text-center flex gap-6'>
        <h1 className='text-green-300 text-5xl'>Context   Api </h1>
      </div>
     <div className='text-4xl text-center text-gray-400'>
      {/* <SimpleFrom/> */}
      {/* <FormActionUpdate/> */}
     <ControlledField/>
     </div>

  
    </>
  )
}

export default App
