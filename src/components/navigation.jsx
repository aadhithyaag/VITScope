export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a className='navbar-brand page-scroll' href='#page-top'>
            VITScope
          </a>{' '}
          <ul className="nav navbar-nav navbar-left">
            <li>
              <a href='#services' className='page-scroll'>
                Projects
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Hackathons
              </a>
            </li>
          </ul>
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#header' className='page-scroll'>
                Home
              </a>
            </li>
            <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>
            <li>
              <a href='#testimonials' className='page-scroll'>
                Sign Up
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Log In
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
