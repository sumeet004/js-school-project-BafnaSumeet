// src/components/EventModal.tsx
import React from 'react';
import type { TimelineEvent } from '../types/types';
import '../styles/EventModal.css';

type EventModalProps = {
  event: TimelineEvent | null;
  onClose: () => void;
  theme: 'light' | 'dark';
};

const EventModal: React.FC<EventModalProps> = ({ event, onClose, theme }) => {
  if (!event) return null;

  return (
    <div
      className={`event-modal-overlay ${theme}`}
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        backgroundColor: theme === 'dark' ? 'rgba(0,0,0,0.8)' : 'rgba(0,0,0,0.6)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
      }}
    >
      <div
        className={`event-modal-content ${theme}`}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>{event.title} ({event.year})</h2>
        {event.image && <img src={event.image} alt={event.title} />}
        {event.description && <p>{event.description}</p>}
        <button onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EventModal;
