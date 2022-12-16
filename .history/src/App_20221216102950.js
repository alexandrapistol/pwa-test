import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className='App'>
      <header
        className='w3-display-container w3-content w3-center'
        style='max-width:1500px'
      >
        <img
          className='w3-image'
          src='https://www.w3schools.com/w3images/photographer.jpg'
        />
        <div className='w3-display-middle w3-padding-large w3-border w3-wide w3-text-light-grey w3-center'>
          <h1 className='w3-hide-medium w3-hide-small w3-xxxlarge'>JANE DOE</h1>
          <h5 className='w3-hide-large' style='white-space:nowrap'>
            JANE DOE
          </h5>
          <h3 className='w3-hide-medium w3-hide-small'>PHOTOGRAPHER</h3>
        </div>

        <div
          className='w3-bar w3-light-grey w3-round w3-display-bottommiddle w3-hide-small'
          style='bottom:-16px'
        >
          <a href='#' className='w3-bar-item w3-button'>
            Home
          </a>
          <a href='#portfolio' className='w3-bar-item w3-button'>
            Portfolio
          </a>
          <a href='#contact' className='w3-bar-item w3-button'>
            Contact
          </a>
        </div>
      </header>
      <div className='w3-center w3-light-grey w3-padding-16 w3-hide-large w3-hide-medium'>
        <div className='w3-bar w3-light-grey'>
          <a href='#' className='w3-bar-item w3-button'>
            Home
          </a>
          <a href='#portfolio' className='w3-bar-item w3-button'>
            Portfolio
          </a>
          <a href='#contact' className='w3-bar-item w3-button'>
            Contact
          </a>
        </div>
      </div>
      <div className='w3-content w3-padding-large w3-margin-top' id='portfolio'>
        <img
          src='https://www.w3schools.com/w3images/ocean.jpg'
          alt='Falls'
          className='w3-image w3-margin-top'
        />

        <div
          className='w3-light-grey w3-padding-large w3-padding-32 w3-margin-top'
          id='contact'
        >
          <h3 className='w3-center'>Contact</h3>
          <hr />
          <p>
            Mauris neque quam, fermentum ut nisl vitae, convallis maximus nisl.
            Sed mattis nunc id lorem euismod placerat. Vivamus porttitor magna
            enim, ac accumsan tortor cursus at. Phasellus sed ultricies mi non
            congue ullam corper. Praesent tincidunt sed tellus.
          </p>

          <form action='/action_page.php' target='_blank'>
            <div className='w3-section'>
              <label>Name</label>
              <input
                className='w3-input w3-border'
                type='text'
                required
                name='Name'
              />
            </div>
            <div className='w3-section'>
              <label>Email</label>
              <input
                className='w3-input w3-border'
                type='text'
                required
                name='Email'
              />
            </div>
            <div className='w3-section'>
              <label>Message</label>
              <input className='w3-input w3-border' required name='Message' />
            </div>
            <button type='submit' className='w3-button w3-block w3-dark-grey'>
              Send
            </button>
          </form>
          <br />
          <p>
            Powered by{' '}
            <a
              href='https://www.w3schools.com/w3css/default.asp'
              target='_blank'
              className='w3-hover-text-green'
            >
              w3.css
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
