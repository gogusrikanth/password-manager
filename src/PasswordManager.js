import React, {useState} from 'react'
import PasswordItem from './PasswordItem'
import NoPasswordsView from './NoPasswordsView'
import './PasswordManager.css'

const PasswordManager = () => {
  const [website, setWebsite] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [search, setSearch] = useState('')
  const [passwords, setPasswords] = useState([])
  const [showPasswords, setShowPasswords] = useState(false)

  const handleAddPassword = e => {
    e.preventDefault()
    if (website && username && password) {
      const newPassword = {
        id: Date.now(),
        website,
        username,
        password,
      }
      setPasswords([...passwords, newPassword])
      setWebsite('')
      setUsername('')
      setPassword('')
    }
  }

  const handleDeletePassword = id => {
    setPasswords(passwords.filter(password => password.id !== id))
  }

  const filteredPasswords = passwords.filter(password =>
    password.website.toLowerCase().includes(search.toLowerCase()),
  )

  return (
    <div className="password-manager">
      <img
        src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
        alt="app logo"
      />
      <h1>Add New Password</h1>
      <form onSubmit={handleAddPassword}>
        <div className="input-container">
          <div className="input-group">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
              alt="website"
            />
            <input
              type="text"
              placeholder="Enter Website"
              value={website}
              onChange={e => setWebsite(e.target.value)}
            />
          </div>
          <div className="input-group">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
              alt="username"
            />
            <input
              type="text"
              placeholder="Enter Username"
              value={username}
              onChange={e => setUsername(e.target.value)}
            />
          </div>
          <div className="input-group">
            <img
              src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
              alt="password"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Add</button>
        </div>
      </form>
      <h1>Your Passwords</h1>
      <p>{filteredPasswords.length}</p>
      <div className="search-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
          alt="search"
        />
        <input
          type="search"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
        <label>
          <input
            type="checkbox"
            checked={showPasswords}
            onChange={() => setShowPasswords(!showPasswords)}
          />
          Show passwords
        </label>
      </div>
      <ul className="passwords-list">
        {filteredPasswords.length > 0 ? (
          filteredPasswords.map(password => (
            <PasswordItem
              key={password.id}
              password={password}
              showPasswords={showPasswords}
              onDelete={handleDeletePassword}
            />
          ))
        ) : (
          <NoPasswordsView />
        )}
      </ul>
    </div>
  )
}

export default PasswordManager
