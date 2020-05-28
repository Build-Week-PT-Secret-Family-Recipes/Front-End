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
        </section>
      ) : (
        <section className='private-nav'>
          <h2>Welcome to Secret Family Recipes</h2>
          <section className='links'>
            <a href='/recipes-home'>All Recipes</a>
            <a href='/addrecipe'>Add a recipe</a>
            <button onClick={logout}>Log Out</button>
          </section>
        </section>
      )}
    </div>
  );
}
export default Header;
