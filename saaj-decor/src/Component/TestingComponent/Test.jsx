import React from 'react'
import { useState } from 'react'
import "./test.css"
const Test = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme'))

  const changeTheme = (e) => {
    localStorage.setItem('theme', e.target.value);
    setTheme(localStorage.getItem('theme'))
  }
  return (
    <section className={theme}>
      <div>
        <select className='slectTheme' onChange={changeTheme}>
          <option value={theme} >select one</option>
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
        </select>
        <div>
          <h2>Card title </h2>
          <div className="card">
            <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" />
            <div className="container1">
              <h4><b>John Doe</b></h4>
              <p>Architect And Engineer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Test