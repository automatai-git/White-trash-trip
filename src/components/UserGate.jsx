import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';

const UserGate = ({ onLogin }) => {
  const [existingUsers, setExistingUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState('');
  const [newUser, setNewUser] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers();
    const saved = localStorage.getItem('redneckPlayerName');
    if (saved) {
      setSelectedUser(saved);
    }
  }, []);

  const fetchUsers = async () => {
    const { data } = await supabase.from('redneck_scoreboard').select('player_name');
    if (data) {
      setExistingUsers(data.map(d => d.player_name));
    }
    setLoading(false);
  };

  const handleLogin = (name) => {
    if (!name.trim()) return;
    localStorage.setItem('redneckPlayerName', name.trim());
    onLogin(name.trim());
  };

  if (loading) return <div style={{textAlign: 'center', marginTop: '100px', color: 'var(--text-muted)'}} className="blackops">IDENTIFYING OPERATORS...</div>;

  return (
    <div style={{minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px'}}>
      <div style={{maxWidth: '600px', width: '100%', background: 'var(--bg-card)', padding: '40px', borderRadius: '16px', border: '1px solid var(--texas-red)', textAlign: 'center'}}>
        <h1 className="blackops" style={{fontSize: 'clamp(2rem, 5vw, 3rem)', color: 'var(--texas-red)', marginBottom: '20px', letterSpacing: '2px'}}>SELECT OPERATOR</h1>
        <p style={{color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.2rem'}}>Identify yourself to access the itinerary and scoreboard.</p>
        
        {existingUsers.length > 0 && (
          <div style={{marginBottom: '40px'}}>
            <h3 className="blackops" style={{color: 'white', marginBottom: '20px', fontSize: '1.5rem'}}>EXISTING SQUAD</h3>
            <div style={{display: 'flex', flexWrap: 'wrap', gap: '15px', justifyContent: 'center'}}>
              {existingUsers.map(u => (
                <button
                  key={u}
                  onClick={() => handleLogin(u)}
                  className="interactive-card"
                  style={{
                    padding: '12px 25px', background: selectedUser === u ? 'var(--accent)' : 'rgba(255,255,255,0.05)',
                    color: selectedUser === u ? 'black' : 'white', border: '1px solid',
                    borderColor: selectedUser === u ? 'var(--accent)' : 'rgba(255,255,255,0.1)',
                    borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1.1rem'
                  }}
                >
                  {u}
                </button>
              ))}
            </div>
          </div>
        )}

        <div style={{borderTop: '1px solid var(--border-light)', paddingTop: '40px'}}>
          <h3 className="blackops" style={{color: 'white', marginBottom: '20px', fontSize: '1.5rem'}}>NEW OPERATOR</h3>
          <div style={{display: 'flex', gap: '10px', flexWrap: 'wrap'}}>
            <input 
              type="text" 
              placeholder="Enter your name" 
              value={newUser}
              onChange={(e) => setNewUser(e.target.value)}
              style={{flex: '1 1 200px', padding: '15px', background: 'rgba(0,0,0,0.5)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '8px', fontFamily: 'Outfit', fontSize: '1.1rem'}}
            />
            <button 
              onClick={() => handleLogin(newUser)}
              className="blackops"
              style={{padding: '15px 30px', background: 'var(--texas-red)', border: 'none', color: 'white', borderRadius: '8px', cursor: 'pointer', letterSpacing: '2px', fontSize: '1.2rem'}}
            >
              JOIN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserGate;
