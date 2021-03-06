import React from 'react'
import PropTypes from 'prop-types'
import Header from 'components/Header'
import './style.css'

const App = (props) => {
  return (
    <div className="container">
      <div>
        <Header />
        {props.children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.element
  ]).isRequired
}

export default App
