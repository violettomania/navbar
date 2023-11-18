import React from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from '../data';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <main>
      <nav>
        <div className='nav-center'>
          <div className='nav-header'>
            <img src='/assets/logo.svg' className='logo' alt='logo' />
            <button
              className='nav-toggle'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
          <div
            className='links-container'
            style={{ height: isMenuOpen ? '160px' : '0px' }}
          >
            <ul className='links'>
              {links.map(({ id, url, text }) => (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              ))}
            </ul>
          </div>
          <ul className='social-icons'>
            {social.map(({ id, url, icon }) => (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </main>
  );
}
