import React, { useState, useEffect } from 'react';
import { supabase } from '../services/supabase';
import GanttChart from './GanttChart';
import { CalendarDays, Plane } from 'lucide-react';

const Participation = ({ playerName }) => {
  const [participants, setParticipants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [viewGantt, setViewGantt] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  // Form State
  const [arrDate, setArrDate] = useState('');
  const [arrTrans, setArrTrans] = useState('');
  const [depDate, setDepDate] = useState('');
  const [depTrans, setDepTrans] = useState('');

  useEffect(() => {
    fetchParticipants();
  }, [playerName]);

  const fetchParticipants = async () => {
    const { data } = await supabase.from('trip_participants').select('*');
    if (data) {
      setParticipants(data);
      // Pre-fill if current user exists
      const me = data.find(d => d.player_name === playerName);
      if (me) {
        setArrDate(me.arrival_date || '');
        setArrTrans(me.arrival_transport || '');
        setDepDate(me.departure_date || '');
        setDepTrans(me.departure_transport || '');
      }
    }
    setLoading(false);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setSaveStatus('Saving...');
    let hasError = false;

    const me = participants.find(d => d.player_name === playerName);
    
    if (me) {
      // Update
      const { error } = await supabase
        .from('trip_participants')
        .update({
          arrival_date: arrDate || null,
          arrival_transport: arrTrans,
          departure_date: depDate || null,
          departure_transport: depTrans
        })
        .eq('player_name', playerName);
      if (error) {
        console.error("Update error:", error);
        hasError = true;
      }
    } else {
      // Insert
      const { error } = await supabase
        .from('trip_participants')
        .insert([{
          player_name: playerName,
          arrival_date: arrDate || null,
          arrival_transport: arrTrans,
          departure_date: depDate || null,
          departure_transport: depTrans
        }]);
      if (error) {
        console.error("Insert error:", error);
        hasError = true;
      }
    }

    if (!hasError) {
      setSaveStatus('SAVED SUCCESSFULLY!');
      setTimeout(() => setSaveStatus(''), 3000);
    } else {
      setSaveStatus('ERROR: DB MISSING OR ACCESS DENIED.');
    }
    fetchParticipants();
  };

  return (
    <div style={{margin: 'clamp(40px, 10vw, 80px) 0', background: 'var(--bg-card)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '16px', border: '1px solid var(--border-light)'}}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px', flexWrap: 'wrap', gap: '20px'}}>
        <div>
          <h2 className="blackops" style={{fontSize: 'clamp(2rem, 6vw, 2.5rem)', color: 'var(--accent)', letterSpacing: '2px', marginBottom: '5px'}}>ROLL CALL & LOGISTICS</h2>
          <p style={{color: 'var(--text-muted)'}}>Log your travel timeline and view squad deployment.</p>
        </div>
        <button 
          onClick={() => setViewGantt(!viewGantt)}
          className="blackops"
          style={{padding: '10px 20px', background: 'transparent', border: '1px solid var(--texas-red)', color: 'var(--texas-red)', borderRadius: '8px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '10px', transition: 'all 0.2s', ...(viewGantt ? {background: 'rgba(255, 30, 0, 0.1)'} : {})}}
        >
          <CalendarDays size={20} />
          {viewGantt ? 'HIDE TIMELINE' : 'VIEW TIMELINE'}
        </button>
      </div>

      {viewGantt ? (
        <GanttChart participants={participants} />
      ) : (
        <div style={{display: 'flex', gap: '40px', flexWrap: 'wrap'}}>
          {/* Form */}
          <div style={{flex: '1 1 300px'}}>
             <form onSubmit={handleSave} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                <div style={{background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
                  <h4 style={{color: 'var(--accent)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}} className="blackops"><Plane size={18} /> ARRIVAL</h4>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <div>
                      <label style={{display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Date</label>
                      <input type="date" value={arrDate} onChange={e => setArrDate(e.target.value)} style={{width: '100%', padding: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px', fontFamily: 'Outfit'}} required />
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Transport (Flight # / Driving)</label>
                      <input type="text" value={arrTrans} onChange={e => setArrTrans(e.target.value)} placeholder="e.g. UA123 or F150" style={{width: '100%', padding: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px', fontFamily: 'Outfit'}} />
                    </div>
                  </div>
                </div>

                <div style={{background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
                  <h4 style={{color: 'var(--texas-red)', marginBottom: '15px', display: 'flex', alignItems: 'center', gap: '10px'}} className="blackops"><Plane size={18} style={{transform: 'rotate(90deg)'}} /> DEPARTURE</h4>
                  <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
                    <div>
                      <label style={{display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Date</label>
                      <input type="date" value={depDate} onChange={e => setDepDate(e.target.value)} style={{width: '100%', padding: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px', fontFamily: 'Outfit'}} required />
                    </div>
                    <div>
                      <label style={{display: 'block', marginBottom: '5px', color: 'var(--text-muted)', fontSize: '0.9rem'}}>Transport</label>
                      <input type="text" value={depTrans} onChange={e => setDepTrans(e.target.value)} placeholder="e.g. AA456" style={{width: '100%', padding: '12px', background: 'var(--bg-card)', border: '1px solid var(--border-light)', color: 'white', borderRadius: '4px', fontFamily: 'Outfit'}} />
                    </div>
                  </div>
                </div>
                
                <div style={{display: 'flex', alignItems: 'center', gap: '15px'}}>
                  <button type="submit" className="blackops" style={{padding: '15px', background: 'var(--accent)', border: 'none', color: 'black', fontSize: '1.2rem', borderRadius: '8px', cursor: 'pointer', transition: 'all 0.2s', letterSpacing: '1px'}}>SAVE LOGISTICS</button>
                  {saveStatus && (
                    <div style={{color: saveStatus.includes('ERROR') ? 'var(--texas-red)' : 'var(--accent)', fontWeight: 'bold'}} className="blackops">
                      {saveStatus}
                    </div>
                  )}
                </div>
             </form>
          </div>

          {/* Table */}
          <div style={{flex: '1 1 400px', overflowX: 'auto'}}>
             <table style={{width: '100%', borderCollapse: 'collapse', textAlign: 'left', background: 'rgba(0,0,0,0.2)', borderRadius: '8px', overflow: 'hidden'}}>
               <thead style={{background: 'rgba(255,255,255,0.05)'}}>
                 <tr>
                   <th style={{padding: '15px', color: 'white'}} className="blackops">OPERATOR</th>
                   <th style={{padding: '15px', color: 'white'}} className="blackops">ARRIVAL</th>
                   <th style={{padding: '15px', color: 'white'}} className="blackops">DEPARTURE</th>
                 </tr>
               </thead>
               <tbody>
                  {loading && <tr><td colSpan="3" style={{padding: '20px', textAlign: 'center'}}>Loading data...</td></tr>}
                  {!loading && participants.length === 0 && <tr><td colSpan="3" style={{padding: '20px', textAlign: 'center', color: 'var(--text-muted)'}}>No logistics data yet.</td></tr>}
                  {participants.map(p => (
                    <tr key={p.id} style={{borderBottom: '1px solid rgba(255,255,255,0.05)', background: p.player_name === playerName ? 'rgba(255, 184, 0, 0.05)' : 'transparent'}}>
                      <td style={{padding: '15px', fontWeight: 'bold'}}>{p.player_name}{p.player_name === playerName ? ' (You)' : ''}</td>
                      <td style={{padding: '15px'}}>
                        <div style={{color: 'var(--accent)', fontWeight: 'bold'}}>{p.arrival_date || '--'}</div>
                        <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>{p.arrival_transport}</div>
                      </td>
                      <td style={{padding: '15px'}}>
                        <div style={{color: 'var(--texas-red)', fontWeight: 'bold'}}>{p.departure_date || '--'}</div>
                        <div style={{fontSize: '0.85rem', color: 'var(--text-muted)'}}>{p.departure_transport}</div>
                      </td>
                    </tr>
                  ))}
               </tbody>
             </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Participation;
