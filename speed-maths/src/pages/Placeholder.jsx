import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

function Placeholder({ name }) {
  const location = useLocation();
  
  const getPageTitle = () => {
    if (name) return name;
    const path = location.pathname.slice(1);
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  // Only show Navbar if not inside dashboard (dashboard has its own layout)
  const isDashboard = location.pathname.startsWith('/dashboard');

  return (
    <>
      {!isDashboard && <Navbar />}
      <div style={{
        padding: '4rem 1rem',
        textAlign: 'center',
        minHeight: isDashboard ? 'auto' : 'calc(100vh - 64px)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 700,
          marginBottom: '1rem',
          color: 'var(--text)'
        }}>
          {getPageTitle()}
        </h1>
        <p style={{
          fontSize: '1.25rem',
          color: 'var(--muted)'
        }}>
          Coming soon
        </p>
      </div>
    </>
  );
}

export default Placeholder;
