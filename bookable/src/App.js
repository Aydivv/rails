import './App.css';
import Axios from "axios";
import Books from './components/Books';
import axios from 'axios';
import { useEffect, useState } from 'react';

const API_URL = "http://127.0.0.1:3000/api/v1/books";

function getAPIData() {
  return axios.get(API_URL).then((response) => response.data);
}

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    let mounted = true;
    getAPIData().then((items) => {
      if(mounted) {
        setBooks(items);
        console.log(items);
      }
    });

    return () => (mounted = false)
  }, []);
  

  return (
    <div className="App">
      <h1>Hello world</h1>
      <Books books={books} />
    </div>
  );
}

export default App;
