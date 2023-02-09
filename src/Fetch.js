import React, { useEffect, useState } from "react";

function App() { 
  const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("https://content.newtonschool.co/v1/pr/63b86a1d735f93791e09cb11/flights")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <main>
      <h1>User List</h1>
      <ul>
        {user && user.length > 0 && user.map((userObj, index) => (
            <li key={userObj.id}>{userObj.name}</li>
          ))}
      </ul>
    </main>
  );
}

export default App;