import React from 'react';

const DATES = [
  { label: 'Jun 15', val: '2026-06-15' },
  { label: 'Jun 16', val: '2026-06-16' },
  { label: 'Jun 17', val: '2026-06-17' },
  { label: 'Jun 18', val: '2026-06-18' },
  { label: 'Jun 19', val: '2026-06-19' },
  { label: 'Jun 20', val: '2026-06-20' },
  { label: 'Jun 21', val: '2026-06-21' },
  { label: 'Jun 22', val: '2026-06-22' }
];

const GanttChart = ({ participants }) => {
  const isPresent = (arr, dep, current) => {
    if (!arr || !dep) return false;
    return current >= arr && current <= dep;
  };

  return (
    <div style={{overflowX: 'auto', background: 'rgba(0,0,0,0.3)', padding: '20px', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)'}}>
      <div style={{display: 'flex', borderBottom: '1px solid var(--border-light)', paddingBottom: '10px', marginBottom: '15px'}}>
        <div style={{width: '150px', flexShrink: 0, fontWeight: 'bold', color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '1px'}} className="blackops">OPERATOR</div>
        {DATES.map(d => (
          <div key={d.val} style={{flex: 1, textAlign: 'center', fontSize: '0.85rem', color: 'var(--text-muted)', minWidth: '70px', fontWeight: 'bold'}}>
            {d.label}
          </div>
        ))}
      </div>

      <div style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
        {participants.map((p) => (
          <div key={p.id} style={{display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.02)', borderRadius: '6px', padding: '10px 0', border: '1px solid rgba(255,255,255,0.02)'}}>
            <div style={{width: '150px', flexShrink: 0, fontSize: '1rem', fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', padding: '0 15px', borderRight: '1px solid rgba(255,255,255,0.05)'}}>
              {p.player_name}
            </div>
            <div style={{display: 'flex', flex: 1, position: 'relative', height: '24px'}}>
              {DATES.map((d, index) => {
                const present = isPresent(p.arrival_date, p.departure_date, d.val);
                const prevPresent = index > 0 && isPresent(p.arrival_date, p.departure_date, DATES[index - 1].val);
                const nextPresent = index < DATES.length - 1 && isPresent(p.arrival_date, p.departure_date, DATES[index + 1].val);
                
                return (
                  <div key={d.val} style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative'}}>
                    {/* Vertical grid line */}
                    <div style={{position: 'absolute', top: '-15px', bottom: '-15px', width: '1px', background: 'rgba(255,255,255,0.03)', zIndex: 0}} />
                    
                    {present && (
                      <div style={{
                        height: '18px', 
                        width: '100%', 
                        background: 'linear-gradient(90deg, var(--texas-red), #ff5555)',
                        borderRadius: `${!prevPresent ? '6px' : '0'} ${!nextPresent ? '6px' : '0'} ${!nextPresent ? '6px' : '0'} ${!prevPresent ? '6px' : '0'}`,
                        margin: '0 -1px', 
                        zIndex: 1,
                        boxShadow: '0 2px 10px rgba(255, 30, 0, 0.2)'
                      }} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
      
      {participants.length === 0 && (
        <div style={{textAlign: 'center', color: 'var(--text-muted)', padding: '40px 20px'}}>No logistics data available.</div>
      )}
    </div>
  );
};

export default GanttChart;
