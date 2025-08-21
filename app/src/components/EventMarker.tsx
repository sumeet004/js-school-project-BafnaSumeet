// src/components/EventMarker.tsx
import React from 'react';
import type { TimelineEvent } from '../types/types';
import '../styles/EventMarker.css';

type EventMarkerProps = {
  event: TimelineEvent;
  onClick: (event: TimelineEvent) => void;
  theme: 'light' | 'dark';
};

const EventMarker: React.FC<EventMarkerProps> = ({ event, onClick, theme }) => {
  return (
    <div
      className={`event-marker ${theme}`}
      onClick={() => onClick(event)}
    >
      {event.year}
    </div>
  );
};

export default EventMarker;
