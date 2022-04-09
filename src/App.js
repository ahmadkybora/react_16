import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
    const [articles, setArticles] = useState();
    useEffect(() => {
        fetch('http://localhost:5000/get', {
                'methods': 'GET',
                headers: {
                    'Content-Type': 'applications/json'
                }
            })
            .then(res => res.json())
            .then(res => setArticles(res))
            .catch(err => console.log(err))
    }, [])
    return (
      <div>
        <table>
          <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          </thead>
          <tbody>
            {articles && articles.map(a => (
            <tr>
              <td>{a.title}</td>
              <td>{a.description}</td>
              <td>{a.date}</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default App;