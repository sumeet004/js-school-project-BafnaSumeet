import React from 'react';
import type { TimelineEvent } from '../types/types';
import '../styles/EventMarker.css';

type EventMarkerProps = {
  event: TimelineEvent;
  onClick: (event: TimelineEvent) => void;
  theme: 'light' | 'dark';
};

const EventMarker: React.FC<EventMarkerProps> = ({ event, onClick, theme }) => {
  const isLight = theme === 'light';
  return (
    <div
      className="event-marker"
      onClick={() => onClick(event)}
      title={event.title}
      style={{
        color: isLight ? '#000' : '#fff', // text color
        backgroundColor: isLight ? '#fff' : '#444', // background for visibility
        border: `2px solid ${isLight ? '#4a90e2' : '#88c0ff'}`, // border adapts to theme
      }}
    >
      {event.year}
    </div>
  );
};

export default EventMarker;
