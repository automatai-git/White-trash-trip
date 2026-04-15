import React, { useEffect, useState } from 'react';
import { TRIP_META, ITINERARY, CHECKLIST } from './data/travelData';
import { MapPin, CalendarDays, Users, Flame } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className="hero-section">
        <div 
          className="hero-bg"
          style={{ 
            backgroundImage: `url(${TRIP_META.heroImage})`,
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        />
        <div className="vignette"></div>
        <div className="hero-content animate-slide">
          <div className="hero-badge blackops">TOP SECRET / CLEARANCE REQUIRED</div>
          <h1 className="hero-title blackops">{TRIP_META.title}</h1>
          <p className="hero-subtitle">{TRIP_META.subtitle}</p>
        </div>
      </header>

      <main className="container">
        
        <div className="stats-grid animate-slide" style={{animationDelay: '0.2s'}}>
          <div className="stat-box">
            <CalendarDays size={32} color="var(--texas-red)" style={{margin:'0 auto 10px'}} />
            <div className="stat-value">{TRIP_META.dates}</div>
            <div className="stat-label">Dates</div>
          </div>
          <div className="stat-box">
            <MapPin size={32} color="var(--texas-red)" style={{margin:'0 auto 10px'}} />
            <div className="stat-value">Fort Worth</div>
            <div className="stat-label">Location (Basecamp)</div>
          </div>
          <div className="stat-box">
            <Users size={32} color="var(--texas-red)" style={{margin:'0 auto 10px'}} />
            <div className="stat-value">{TRIP_META.group}</div>
            <div className="stat-label">Squad</div>
          </div>
          <div className="stat-box">
            <Flame size={32} color="var(--texas-red)" style={{margin:'0 auto 10px'}} />
            <div className="stat-value" style={{fontSize: '1.2rem'}}>{TRIP_META.weather}</div>
            <div className="stat-label">Weather</div>
          </div>
        </div>

        <div style={{margin: '60px 0'}}>
          <h2 className="blackops" style={{fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', letterSpacing: '2px', color: 'var(--accent)'}}>
            THE ITINERARY
          </h2>

          <div className="itinerary-list">
            {ITINERARY.map((day, idx) => (
              <div 
                key={day.id} 
                className="day-card interactive-card animate-slide" 
                style={{animationDelay: `${0.1 * idx}s`}}
              >
                <div className="day-header" style={{borderBottom: `3px solid ${day.color}`}}>
                  {day.image && (
                    <img src={day.image} alt={day.theme} className="day-header-bg" />
                  )}
                  <div className="day-header-content">
                    <div className="day-title-wrap">
                      <div className="day-number blackops" style={{color: day.color}}>{day.day}</div>
                      <h3 className="day-theme blackops">{day.theme}</h3>
                      <div className="day-date">{day.date}</div>
                    </div>
                  </div>
                </div>

                <div className="events-list">
                  {day.events.map((event, i) => (
                    <div key={i} className="event-row">
                      <div className="event-time">{event.time}</div>
                      <div className="event-details">
                        <div className="event-title">
                          <span className="event-icon">{event.icon}</span>
                          {event.title}
                        </div>
                        <p className="event-desc">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div style={{margin: '80px 0 60px'}}>
           <h2 className="blackops" style={{fontSize: '2.5rem', marginBottom: '30px', textAlign: 'center', letterSpacing: '2px', color: 'var(--accent)'}}>
            ESSENTIAL REDNECK CHECKLIST
          </h2>
          <div className="checklist-grid">
            {CHECKLIST.map((item, idx) => (
              <div key={idx} className="check-item interactive-card">
                <div className="check-box"></div>
                <div style={{fontWeight: 600}}>{item}</div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </>
  );
}

export default App;
