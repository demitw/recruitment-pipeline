
import React from 'react';
import { Droppable } from '@hello-pangea/dnd';
import CandidateCard from './CandidateCard';

const stageColors = {
  'Applying Period': '#f97316',
  'Screening': '#a855f7',
  'Interview': '#0ea5e9',
  'Test': '#10b981'
};

const Column = ({ stage, candidates, onDelete, onEdit }) => {
  return (
    <div className="column">
      <h3
        className="column-title"
        style={{ color: stageColors[stage] || '#333' }}
      >
        {stage}
      </h3>

      <Droppable droppableId={stage}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              padding: 8,
              minHeight: 400,
              backgroundColor: snapshot.isDraggingOver ? '#e0f7fa' : '#f1f1f1',
              borderRadius: '8px',
              transition: 'background-color 0.2s ease'
            }}
          >
            {candidates.map((candidate, index) => (
              <CandidateCard
                key={candidate.id}
                candidate={candidate}
                index={index}
                onDelete={onDelete}
                onEdit={onEdit}
              />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </div>
  );
};

export default Column;
