import React from 'react';
import Column from './Column';
import './Board.css';

const Board = ({ tickets, users, grouping, sorting }) => {
  const getPriorityLabel = (priority) => {
    const labels = {
      4: 'Urgent',
      3: 'High',
      2: 'Medium',
      1: 'Low',
      0: 'No priority'
    };
    return labels[priority];
  };

  const groupTickets = () => {
    let groupedTickets = {};

    if (grouping === 'status') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const status = ticket.status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'user') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const user = users.find(u => u.id === ticket.userId);
        const userName = user ? user.name : 'Unassigned';
        if (!acc[userName]) acc[userName] = [];
        acc[userName].push(ticket);
        return acc;
      }, {});
    } else if (grouping === 'priority') {
      groupedTickets = tickets.reduce((acc, ticket) => {
        const priority = getPriorityLabel(ticket.priority);
        if (!acc[priority]) acc[priority] = [];
        acc[priority].push(ticket);
        return acc;
      }, {});
    }

    // Sort tickets within each group
    Object.keys(groupedTickets).forEach(key => {
      groupedTickets[key].sort((a, b) => {
        if (sorting === 'priority') {
          return b.priority - a.priority;
        } else {
          return a.title.localeCompare(b.title);
        }
      });
    });

    return groupedTickets;
  };

  const groupedTickets = groupTickets();

  return (
    <div className="board">
      {Object.entries(groupedTickets).map(([groupName, tickets]) => (
        <Column 
          key={groupName}
          title={groupName}
          tickets={tickets}
          users={users}
        />
      ))}
    </div>
  );
};

export default Board;