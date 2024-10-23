import React from 'react';
import './Card.css';

const Card = ({ ticket, user }) => {
  const getPriorityIcon = (priority) => {
    const icons = {
      4: '🔴', // Urgent
      3: '🟡', // High
      2: '🟢', // Medium
      1: '⚪', // Low
      0: '⚫'  // No priority
    };
    return icons[priority];
  };

  return (
    <div className="card">
      <div className="card-header">
        <span className="ticket-id">{ticket.id}</span>
        {user && (
          <div className="user-avatar">
            {user.name.charAt(0)}
          </div>
        )}
      </div>
      <div className="card-title">
        <span className="priority-icon">{getPriorityIcon(ticket.priority)}</span>
        <h3>{ticket.title}</h3>
      </div>
      <div className="card-tags">
        <span className="tag">
          {ticket.tag}
        </span>
      </div>
    </div>
  );
};

export default Card;