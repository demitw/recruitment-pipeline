
import React from 'react';
import Column from './Column';

const stages = ['Applying Period', 'Screening', 'Interview', 'Test'];

const KanbanBoard = ({ candidates, onDelete, onEdit }) => {
  const grouped = stages.reduce((acc, stage) => {
    acc[stage] = candidates.filter(c => c.stage === stage);
    return acc;
  }, {});

  return (
    <div className="app-container">
      {stages.map(stage => (
        <Column
          key={stage}
          stage={stage}
          candidates={grouped[stage] || []}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  );
};

export default KanbanBoard;
