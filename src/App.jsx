import './App.css'

import WhomeIcon from "./assets/WhomeIcon.svg"


function App() {

  return (
    <>
      <nav className='navbar'>
        <ul>
          <img className='homeicon' src={WhomeIcon} alt="WhomeIcon" />
          <li><a href='#'>FAQ</a></li>
          <li><a href='#'>서비스 소개</a></li>
        </ul>
      </nav>
      <div className='main'>
      </div>
    </>
  )
}

export default App
