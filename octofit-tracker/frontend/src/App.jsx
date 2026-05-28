import { Routes, Route } from 'react-router-dom'
import './App.css'

function App() {
  return (
    <div className="container mt-5">
      <header className="mb-4">
        <h1 className="display-4">OctoFit Tracker</h1>
        <p className="lead">Track your fitness goals and compete with your team</p>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

function Home() {
  return (
    <div className="row">
      <div className="col-md-8">
        <h2>Welcome to OctoFit Tracker</h2>
        <p>Build an application with user authentication, activity logging, team management, and competitive leaderboards.</p>
      </div>
    </div>
  )
}

export default App
