import React, { useState } from 'react';
import { PRE_FLIGHT_CHECKLIST } from '../data/travelData';

const PreFlight = () => {
  const [checkedItems, setCheckedItems] = useState([]);

  const toggleItem = (idx) => {
    if (checkedItems.includes(idx)) {
      setCheckedItems(checkedItems.filter(i => i !== idx));
    } else {
      setCheckedItems([...checkedItems, idx]);
    }
  };

  return (
    <div style={{margin: 'clamp(40px, 10vw, 80px) 0', background: 'var(--bg-card)', padding: 'clamp(20px, 5vw, 40px)', borderRadius: '16px', border: '1px solid var(--texas-red)', position: 'relative', overflow: 'hidden'}}>
      <div style={{position: 'absolute', top: 0, right: 0, opacity: 0.05, fontSize: 'clamp(8rem, 20vw, 15rem)', lineHeight: 0.8, pointerEvents: 'none'}} className="blackops">⚠️</div>
      
      <h2 className="blackops" style={{fontSize: 'clamp(2rem, 6vw, 2.5rem)', marginBottom: '10px', color: 'var(--texas-red)', letterSpacing: '2px'}}>PRE-FLIGHT PREP</h2>
      <p style={{color: 'var(--text-muted)', marginBottom: '30px', fontSize: 'clamp(1rem, 3vw, 1.2rem)'}}>Before you step on that plane, make sure you've handled the essentials.</p>

      <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
        {PRE_FLIGHT_CHECKLIST.map((item, idx) => {
          const isChecked = checkedItems.includes(idx);
          return (
            <div 
              key={idx} 
              onClick={() => toggleItem(idx)}
              style={{
                display: 'flex', 
                alignItems: 'center', 
                gap: '20px', 
                background: isChecked ? 'rgba(255, 30, 0, 0.1)' : 'rgba(255,255,255,0.03)', 
                padding: '20px 25px', 
                borderRadius: '8px', 
                cursor: 'pointer',
                transition: 'all 0.2s',
                border: isChecked ? '1px solid var(--texas-red)' : '1px solid transparent'
              }}
              className="interactive-card"
            >
              <div style={{
                width: '32px', height: '32px', 
                border: '3px solid', borderColor: isChecked ? 'var(--texas-red)' : 'var(--text-muted)', 
                borderRadius: '6px',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: 'var(--texas-red)', fontSize: '1.2rem', fontWeight: 'bold'
              }}>
                {isChecked ? '✓' : ''}
              </div>
              <div style={{
                fontWeight: 600, 
                fontSize: '1.1rem', 
                textDecoration: isChecked ? 'line-through' : 'none',
                opacity: isChecked ? 0.6 : 1
              }}>
                {item}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PreFlight;
