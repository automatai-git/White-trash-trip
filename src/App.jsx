import React, { useEffect, useState } from 'react';
import { TRIP_META, ITINERARY } from './data/travelData';
import { MapPin, CalendarDays, Users, Flame } from 'lucide-react';
import PreFlight from './components/PreFlight';
import Scoreboard from './components/Scoreboard';
import UserGate from './components/UserGate';
import Participation from './components/Participation';

function App() {
  const [scrollY, setScrollY] = useState(0);
  const [activePlayer, setActivePlayer] = useState(null);

  useEffect(() => {
    const handleScroll = () => requestAnimationFrame(() => setScrollY(window.scrollY));
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!activePlayer) {
    return <UserGate onLogin={setActivePlayer} />;
  }

  return (
    <>
      <header className="hero-section">
        <div 
          className="hero-bg"
          style={{ 
            backgroundImage: `url(${TRIP_META.heroImage})`,
            transform: `translateY(${scrollY * 0.4}px)`
          }}
        />
        <div className="vignette"></div>
        <div className="hero-content animate-slide">
          <div className="hero-badge blackops">TOP SECRET ITINERARY</div>
          <h1 className="hero-title blackops">{TRIP_META.title}</h1>
          <p className="hero-subtitle">{TRIP_META.subtitle}</p>
        </div>
      </header>

      <main className="container">
        
        <div className="stats-grid animate-slide" style={{animationDelay: '0.2s'}}>
          <div className="stat-box">
            <CalendarDays size={36} color="var(--accent)" style={{margin:'0 auto 15px'}} />
            <div className="stat-value">{TRIP_META.dates}</div>
            <div className="stat-label">Dates</div>
          </div>
          <div className="stat-box">
            <MapPin size={36} color="var(--accent)" style={{margin:'0 auto 15px'}} />
            <div className="stat-value">Fort Worth</div>
            <div className="stat-label">Location</div>
          </div>
          <div className="stat-box">
            <Flame size={36} color="var(--texas-red)" style={{margin:'0 auto 15px'}} />
            <div className="stat-value" style={{fontSize: '1.4rem'}}>{TRIP_META.weather}</div>
            <div className="stat-label">Weather</div>
          </div>
        </div>

        <PreFlight />
        <Participation playerName={activePlayer} />

        <div style={{margin: '100px 0'}}>
          {ITINERARY.map((day, idx) => (
            <div 
              key={day.id} 
              className="day-card animate-slide" 
              style={{animationDelay: `${0.1 * idx}s`}}
            >
              <div className="day-header" style={{borderBottomColor: day.color}}>
                <div className="day-number blackops" style={{color: day.color}}>{day.day}</div>
                <h3 className="day-theme blackops">{day.theme}</h3>
                <div className="day-date">{day.date}</div>
              </div>

              <div className="events-list">
                {day.events.map((event, i) => (
                  <div key={i} className="event-visual-card interactive-card">
                    {event.image && (
                      <img src={event.image} alt={event.title} className="event-visual-bg" />
                    )}
                    <div className="event-visual-overlay"></div>
                    <div className="event-content">
                      <div className="event-time blackops" style={{backgroundColor: day.color || 'var(--texas-red)'}}>
                         {event.time}
                      </div>
                      <h4 className="event-title blackops">{event.title}</h4>
                      <p className="event-desc">{event.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Scoreboard playerName={activePlayer} />

      </main>
      
      <footer style={{textAlign: 'center', padding: '40px', borderTop: '1px solid var(--border-light)', color: 'var(--text-muted)', fontSize: '0.9rem', letterSpacing: '2px'}} className="blackops">
        TEXAS REDNECK WEEK V1.0 - CONFIDENTIAL
      </footer>
    </>
  );
}

export default App;
