import CountDownTimer from "./countdowntimer"

export const Header = (props) => {
  const hoursMinSecs = { hours: 0, minutes: 0, seconds: 0 }
  return (
    <header id='header'>
      <div className='intro'>
        <div className='overlay'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-5 col-sm-5 intro-text'>
                <div className="timer">
                  <CountDownTimer hoursMinSecs={hoursMinSecs} />
                </div>
              </div>
              <div className='col-md-7 col-sm-7 hackdetail'>
                <h3>
                  {props.data ? props.data.title : 'Loading'}
                  <span></span>
                </h3>
                <p>
                  {props.data ? props.data.paragraph : 'Loading'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
