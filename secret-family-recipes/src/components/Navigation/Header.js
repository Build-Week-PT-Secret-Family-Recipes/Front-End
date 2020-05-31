import React from 'react';

function Header() {
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('token');
    window.location.reload(false);
  };

  return (
    <div className='nav-bar'>
      {localStorage.getItem('token') === null ? (
        <section className='public-nav'>
          <h2>Welcome to Secret Family Recipes</h2>
          <a href='https://infallible-pike-57b6fe.netlify.app/index.html'>
            Home Page
          </a>
        </section>
      ) : (
        <section className='private-nav'>
          <h2>Welcome to Secret Family Recipes</h2>
          <section className='links'>
            <a href='/recipes-home'>All Recipes</a>
            <a href='https://infallible-pike-57b6fe.netlify.app/index.html'>
              Home Page
            </a>
            <button onClick={logout}>Log Out</button>
          </section>
        </section>
      )}
    </div>
  );
}
export default Header;
