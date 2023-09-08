import React from 'react'
import Left from './components/Left'
import Right from './components/Right';
import Contact from './components/Contact';
import './style.css';


const App = () => {
  return (
    
      <div>
        <div className='app'>

<Left/>
<Right/>
<Contact/>
</div>
      </div>
  )
}

export default App