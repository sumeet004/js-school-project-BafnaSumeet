// src/App.tsx
import { useState, useEffect } from 'react';
import type { TimelineEvent } from './types/types';
import { events } from './data/events';
import Header from './components/Header';
import Timeline from './components/Timeline';
import EventModal from './components/EventModal';
import './App.css';

export default function App() {
  const [eventList, setEventList] = useState<TimelineEvent[]>([]);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [selectedEvent, setSelectedEvent] = useState<TimelineEvent | null>(null);

  useEffect(() => {
    setEventList(events);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const handleEventClick = (event: TimelineEvent) => {
    setSelectedEvent(event);
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Timeline events={eventList} onEventClick={handleEventClick} theme={theme} />
      <EventModal event={selectedEvent} onClose={() => setSelectedEvent(null)} theme={theme} />
    </div>
  );
}
