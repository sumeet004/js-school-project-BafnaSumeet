// src/components/EventModal.tsx
import React from 'react';
import type { TimelineEvent } from '../types/types';
import '../styles/EventModal.css'; // import the CSS

type EventModalProps = {
  event: TimelineEvent | null;
  onClose: () => void;
};

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  if (!event) return null;

  return (
    <div className="event-modal-overlay" onClick={onClose}>
      <div className="event-modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>{event.title} ({event.year})</h2>
        {event.image && <img src={event.image} alt={event.title} />}
        {event.description && <p>{event.description}</p>}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default EventModal;
