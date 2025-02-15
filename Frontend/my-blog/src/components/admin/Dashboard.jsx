import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('https://localhost:7027/api/posts', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('adminToken')}`
        }
      });
      
      if (response.status === 401) {
        localStorage.removeItem('adminToken');
        navigate('/admin/login');
        return;
      }
      
      const data = await response.json();
      setPosts(data);
    } catch (error) {
      console.error('Błąd pobierania postów:', error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Panel Administracyjny</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-black"
        >
          Wyloguj
        </button>
      </div>
      <button className="text-3xl rounded text-white bg-green-500 px-4 py-2 block hover:bg-black">Dodaj nowy post</button>
      <div className="space-y-4">
        {posts.map(post => (
          <div key={post.id} className="p-4 bg-white shadow rounded">
            <h2 className="text-xl font-bold">{post.title}</h2>
            <p className="mt-2">{post.content}</p>
            <button className="bg-yellow-500 text-white px-4 py-2 mb-4 rounded ml-auto block w-max hover:bg-black">Edytuj</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded ml-auto block w-max hover:bg-black">Usun</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;