// src/components/Timeline.tsx
import React from 'react';
import type { TimelineEvent } from '../types/types';
import EventMarker from './EventMarker';
import '../styles/Timeline.css';

type TimelineProps = {
  events: TimelineEvent[];
  onEventClick: (event: TimelineEvent) => void;
  theme: 'light' | 'dark';
};

const Timeline: React.FC<TimelineProps> = ({ events, onEventClick, theme }) => {
  return (
    <div className={`timeline ${theme}`}>
      {events.map((event) => (
        <EventMarker
          key={event.id}
          event={event}
          onClick={onEventClick}
          theme={theme}
        />
      ))}
    </div>
  );
};

export default Timeline;
