import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import { CHECKLIST } from '../data/travelData';

const Scoreboard = () => {
  const [playerName, setPlayerName] = useState('');
  const [hasJoined, setHasJoined] = useState(false);
  const [playerData, setPlayerData] = useState(null);
  const [scoreboard, setScoreboard] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load user from local storage logic (simple honor system persistence)
  useEffect(() => {
    const savedName = localStorage.getItem('redneckPlayerName');
    if (savedName) {
      setPlayerName(savedName);
      checkAndCreateUser(savedName);
    } else {
      fetchScoreboard();
    }
  }, []);

  const fetchScoreboard = async () => {
    const { data: boardData, error } = await supabase
      .from('redneck_scoreboard')
      .select('*')
      .order('created_at', { ascending: true }); // We'll sort via JS by count
    
    if (!error && boardData) {
      // Sort by length of completed items
      const sorted = boardData.sort((a, b) => b.completed_items.length - a.completed_items.length);
      setScoreboard(sorted);
    }
    setLoading(false);
  };

  const checkAndCreateUser = async (name) => {
    setLoading(true);
    // Find the user
    let { data, error } = await supabase
      .from('redneck_scoreboard')
      .select('*')
      .eq('player_name', name)
      .single();

    if (!data) {
      // Create user
      const { data: newUserData, error: insertError } = await supabase
        .from('redneck_scoreboard')
        .insert([{ player_name: name, completed_items: [] }])
        .select()
        .single();
      
      if (!insertError && newUserData) {
        setPlayerData(newUserData);
      }
    } else {
      setPlayerData(data);
    }
    
    setHasJoined(true);
    fetchScoreboard();
  };

  const joinSquad = (e) => {
    e.preventDefault();
    if (!playerName.trim()) return;
    localStorage.setItem('redneckPlayerName', playerName.trim());
    checkAndCreateUser(playerName.trim());
  };

  const toggleChecklist = async (item) => {
    if (!playerData) return;
    
    let newCompleted = [...playerData.completed_items];
    if (newCompleted.includes(item)) {
      newCompleted = newCompleted.filter(i => i !== item);
    } else {
      newCompleted.push(item);
    }

    // Optimistic update
    setPlayerData({ ...playerData, completed_items: newCompleted });

    await supabase
      .from('redneck_scoreboard')
      .update({ completed_items: newCompleted })
      .eq('id', playerData.id);
      
    fetchScoreboard(); // Refresh the rest of the board
  };

  return (
    <div style={{margin: '80px 0', border: '1px solid var(--border-light)', borderRadius: '16px', padding: '40px', background: 'rgba(0,0,0,0.4)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)'}}>
      <h2 className="blackops" style={{fontSize: '3rem', marginBottom: '20px', textAlign: 'center', letterSpacing: '4px', color: 'var(--accent)'}}>
        SQUAD SCOREBOARD
      </h2>
      <p style={{textAlign: 'center', color: 'var(--text-muted)', marginBottom: '40px', fontSize: '1.2rem'}}>Complete the ultimate Texas bucket list. Enter the arena to track your legacy.</p>

      {!hasJoined ? (
        <div style={{maxWidth: '400px', margin: '0 auto', textAlign: 'center'}}>
          <form onSubmit={joinSquad}>
            <input 
              type="text" 
              placeholder="ENTER YOUR NAME" 
              value={playerName}
              onChange={(e) => setPlayerName(e.target.value)}
              style={{
                width: '100%', padding: '15px 20px', background: 'var(--bg-card)', border: '2px solid var(--border-light)', 
                color: 'white', fontSize: '1.2rem', borderRadius: '8px', marginBottom: '20px', textAlign: 'center', fontFamily: 'Outfit'
              }}
              required
            />
            <button 
              type="submit" 
              className="blackops"
              style={{
                width: '100%', padding: '15px', background: 'var(--texas-red)', border: 'none', color: 'white', 
                fontSize: '1.5rem', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '2px'
              }}
            >
              JOIN THE SQUAD
            </button>
          </form>
        </div>
      ) : (
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
          {/* Active Player Checklist */}
          <div style={{flex: '1 1 400px'}}>
            <h3 className="blackops" style={{fontSize: '1.8rem', color: 'white', marginBottom: '20px'}}>YOUR CHECKLIST</h3>
            <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
              {CHECKLIST.map((item, idx) => {
                const isChecked = playerData?.completed_items?.includes(item);
                return (
                  <div 
                    key={idx} 
                    onClick={() => toggleChecklist(item)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '15px',
                      background: isChecked ? 'rgba(255, 184, 0, 0.15)' : 'rgba(255,255,255,0.03)',
                      padding: '15px 20px', borderRadius: '8px', cursor: 'pointer',
                      border: isChecked ? '1px solid var(--accent)' : '1px solid transparent',
                      transition: 'all 0.2s'
                    }}
                  >
                    <div style={{
                      width: '24px', height: '24px', border: '2px solid', borderColor: isChecked ? 'var(--accent)' : 'var(--text-muted)',
                      borderRadius: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent)', fontWeight: 'bold'
                    }}>
                      {isChecked ? '✓' : ''}
                    </div>
                    <div style={{fontWeight: 600, color: isChecked ? 'white' : 'var(--text-muted)'}}>{item}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Leaderboard */}
          <div style={{flex: '1 1 300px', background: 'var(--bg-card)', padding: '30px', borderRadius: '12px', border: '1px solid var(--border-light)'}}>
            <h3 className="blackops" style={{fontSize: '1.8rem', color: 'var(--texas-red)', marginBottom: '20px', textAlign: 'center'}}>GLOBAL LEADERBOARD</h3>
            {loading ? (
              <div style={{textAlign: 'center', color: 'var(--text-muted)'}}>Loading intel...</div>
            ) : (
              <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
                {scoreboard.map((p, idx) => (
                  <div key={p.id} style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'rgba(255,255,255,0.05)', padding: '15px', borderRadius: '8px', borderLeft: idx === 0 ? '4px solid var(--accent)' : 'none'}}>
                    <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                      <div className="blackops" style={{fontSize: '1.2rem', color: idx === 0 ? 'var(--accent)' : 'var(--text-muted)'}}>#{idx + 1}</div>
                      <div style={{fontWeight: 'bold', fontSize: '1.1rem'}}>{p.player_name}</div>
                    </div>
                    <div className="blackops" style={{fontSize: '1.5rem', color: 'var(--texas-red)'}}>
                      {p.completed_items.length} <span style={{fontSize: '1rem', color: 'var(--text-muted)'}}>/ {CHECKLIST.length}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Scoreboard;
