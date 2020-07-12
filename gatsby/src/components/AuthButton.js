import React from 'react'
import netlifyIdentity from 'netlify-identity-widget'

window.netlifyIdentity = netlifyIdentity;
netlifyIdentity.init();

const netlifyAuth = {
  isAuthenticated: false,
  user: null,
  authenticate(callback) {
    this.isAuthenticated = true;
    netlifyIdentity.open();
    netlifyIdentity.on('login', user => {
      this.user = user;
      callback(user);
    });
  },
  signout(callback) {
    this.isAuthenticated = false;
    netlifyIdentity.logout();
    netlifyIdentity.on('logout', () => {
      this.user = null;
      callback();
    });
  }
};

const AuthButton = () => {
  if (netlifyAuth.isAuthenticated) {
    return (
      <p>You are logged in.</p>
    )
  }

  const login = () => {
    netlifyAuth.authenticate(() => {
      console.log('Now you can go to the protected page.')
    })
  }

  return (
    <button onClick={login}>Login</button>
  )
}

export default AuthButton
