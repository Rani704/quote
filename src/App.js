import React, { useState, useEffect } from 'react';
import axios from 'axios';
import QuoteCard from './components/QuotesCard';
import SavedQuotes from './components/SavedQuotes';
import './App.css';


function App() {
  const [quote, setQuote] = useState('');
  const [savedQuotes, setSavedQuotes] = useState([]);

  
  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
      setQuote(response.data[0]);
    } catch (error) {
      console.error('Error fetching the quote:', error);
    }
  };

  
  useEffect(() => {
    fetchQuote();
  }, []);

  
  const saveQuote = (newQuote) => {
    if (!savedQuotes.includes(newQuote)) {
      setSavedQuotes([...savedQuotes, newQuote]);
    }
  };
 

  return (
    <div className="app ">
 

      <h1>Ron Swanson Quotes</h1>
      <QuoteCard quote={quote} onSave={saveQuote} />
      <button onClick={fetchQuote}>Get Another Quote</button>
      <SavedQuotes savedQuotes={savedQuotes} />
    </div>
  );
}

export default App;
