// import IconError from "./Icons/IconError"
import IconError from '../assets/icons/icon-error.png'

const ErrorNotFound = () => {
  return (
    <div className='error-search'>
      <img src={IconError}></img>
      <h3>No Definitions Found</h3>
      <p>Sorry pal, we coulnd't find definitions for the word you were looking for. You can try
        the search again at later time or head to the web instead.
      </p>
    </div>
  )
}

export default ErrorNotFound