import './styles/styles.scss'
import React from 'react'
import { render } from 'react-dom'

render(
  <div className='section'>
    <div className='container'>
      This is the app.

      <div className='columns'>
        <div className='column'>
          <p className='notification is-info'>1</p>
        </div>
        <div className='column'>
          <p className='notification is-success'>2</p>
        </div>
        <div className='column'>
          <p className='notification is-warning'>3</p>
        </div>
        <div className='column'>
          <p className='notification is-danger'>4</p>
        </div>
      </div>

    </div>
  </div>,
  document.getElementById('app')
)
