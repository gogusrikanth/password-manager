import React from 'react'
import './PasswordItem.css'

const PasswordItem = ({password, showPasswords, onDelete}) => (
  <li className="password-item">
    <p>{password.website}</p>
    <p>{password.username}</p>
    <p>
      {showPasswords ? (
        password.password
      ) : (
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
          alt="stars"
        />
      )}
    </p>
    <button data-testid="delete" onClick={() => onDelete(password.id)}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        alt="delete"
      />
    </button>
  </li>
)

export default PasswordItem
