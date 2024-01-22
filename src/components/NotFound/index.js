// Write your code here
import Navbar from '../Navbar'

import ThemeContext from '../../context/ThemeContext'

import './index.css'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value

      const notFoundBgClassName = isDarkTheme
        ? 'not-found-bg-dark'
        : 'not-found-bg-light'

      const notFoundHeadingTextClassName = isDarkTheme
        ? 'not-found-heading-text-light'
        : 'not-found-heading-text-dark'

      const notFoundContextTextClassName = isDarkTheme
        ? 'not-found-context-text-light'
        : 'not-found-context-text-dark'

      return (
        <div className={`not-found-app-container ${notFoundBgClassName}`}>
          <Navbar />
          <div className="not-found-page-container">
            <div className="not-found-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
                className="not-found-img"
                alt="not found"
              />
              <h1
                className={`not-found-heading ${notFoundHeadingTextClassName}`}
              >
                Lost Your Way?
              </h1>
              <p
                className={`not-found-content ${notFoundContextTextClassName}`}
              >
                We cannot seem to find the page you are looking for
              </p>
            </div>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
