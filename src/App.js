import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Home, Programs, Sessions } from './routes'
import './App.css';
import Header from './layout/Header'
import Footer from './layout/Footer'



function App() {
  const [title, setTitle] = useState("Du More Fitness")
  return (
    <Router>
      <Header title={title} />
      <Route exact path="/" component={Home} />
      <Route path="/programs/:id" component={Programs} />
      <Route path="/exercises/:id" component={Sessions} />
      <Footer />
    </Router>
  );
}

export default App;
