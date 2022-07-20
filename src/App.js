import axios from 'axios';
import React, { useState, useEffect } from 'react'
import './App.css';
import Posts from './Posts';
import Paginators from './Pagination'
function App() {
  const url = 'https://api.github.com/users';
  const [posts, setposts] = useState([]);
  const [currentPage, setcurrentPage] = useState(1);
  const [postperPage] = useState(6);
  const [loading, setloading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setloading(true);
      await axios.get(url).then(response => {
        setposts(response.data);
        setloading(false);
      })
    }
    fetchData();

  }, [])
  const paginate = (no) => {
    setcurrentPage(no);
  }
  // get some data 
  let indexOfLast = currentPage * postperPage;
  let indexOfFirst = indexOfLast - postperPage;
  let currentPosts = posts.slice(indexOfFirst, indexOfLast);

  return (
    <div className="App container mt-5">
      <div className="mb-5" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '40px' }}>

        {
          currentPosts.map((p) => {
            return <Posts key={p.id} posts={p.avatar_url} loading={loading} />
          })
        }
      </div>
      <div  style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', flexWrap: 'wrap', gap: '40px' }}>
        <Paginators postsperPage={postperPage} totalPosts={posts.length} paginate={paginate} />
      </div>
    </div>
  );
}

export default App;
