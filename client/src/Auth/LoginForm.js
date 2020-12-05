import React from 'react'

export const LoginForm = () => {
    return (
    <React.Fragment>
      <label htmlFor="username">USERNAME</label>
      <input type="text" id="username" />
      <label htmlFor="password">PASSWORD</label>
      <input type="text" id="password" />
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}
