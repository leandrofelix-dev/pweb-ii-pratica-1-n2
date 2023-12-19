import { useEffect, useState } from 'react';

const fetchGitHubData = async () => {
  const response = await fetch('https://api.github.com/users/leandrofelix-dev');
  const data = await response.json();
  return data;
};

const App = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchGitHubData();
      setUserData(data);
    };

    fetchData();
  }, []);

  const containerStyle = {
    fontFamily: 'Inter, sans-serif',
    minHeight: '100vh',
    backgroundColor: '#121212',
    color: 'white',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const cardStyle = {
    position: 'relative',
    maxWidth: '300px',
    padding: '16px',
    borderRadius: '12px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.2)',
    backdropFilter: 'blur(8px)',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    textAlign: 'center',
  };

  const imageStyle = {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    margin: 'auto',
    marginBottom: '12px',
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    marginBottom: '8px',
  };

  const bioStyle = {
    fontSize: '0.875rem',
    marginBottom: '12px',
  };

  const infoStyle = {
    fontSize: '0.75rem',
    opacity: '0.8',
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        {userData ? (
          <>
            <img
              src={userData.avatar_url}
              alt="Leandro Felix Avatar"
              style={imageStyle}
            />
            <h2 style={nameStyle}>{userData.name}</h2>
            <p style={bioStyle}>{userData.bio}</p>
            <div style={infoStyle}>
              <p>
                <strong>Followers:</strong> {userData.followers}
              </p>
              <p>
                <strong>Following:</strong> {userData.following}
              </p>
              <p>
                <strong>Public Repos:</strong> {userData.public_repos}
              </p>
            </div>
          </>
        ) : (
          <p style={{ textAlign: 'center' }}>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default App;
