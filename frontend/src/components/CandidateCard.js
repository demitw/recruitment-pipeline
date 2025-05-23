import React, { useState } from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { FiMoreVertical } from 'react-icons/fi';

const getInitials = (name) => {
  const parts = name.split(' ');
  return parts[0][0] + (parts[1] ? parts[1][0] : '');
};

const getColor = (name) => {
  const colors = ['#f87171', '#60a5fa', '#34d399', '#fbbf24', '#c084fc'];
  const index = name.charCodeAt(0) % colors.length;
  return colors[index];
};

const CandidateCard = ({ candidate, index, onDelete, onEdit }) => {
  const [showMenu, setShowMenu] = useState(false);
  const initials = getInitials(candidate.name);
  const avatarColor = getColor(candidate.name);

  const toggleMenu = () => setShowMenu(prev => !prev);

  return (
    <Draggable draggableId={candidate.id.toString()} index={index}>
      {(provided) => (
        <div
          className="card"
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          style={{ position: 'relative', ...provided.draggableProps.style }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', gap: '10px' }}>
              <div
                style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '50%',
                  backgroundColor: avatarColor,
                  color: '#fff',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontWeight: 'bold',
                  fontSize: '14px',
                }}
              >
                {initials}
              </div>
              <div>
                <strong>{candidate.name}</strong>
                <p style={{ fontSize: '12px', margin: 0, color: '#777' }}>
                  Applied: {candidate.applicationDate}
                </p>
              </div>
            </div>

            <div style={{ position: 'relative' }}>
              <FiMoreVertical
                onClick={toggleMenu}
                style={{ cursor: 'pointer' }}
              />
              {showMenu && (
                <div
                  style={{
                    position: 'absolute',
                    top: '24px',
                    right: 0,
                    background: 'white',
                    border: '1px solid #ddd',
                    borderRadius: '6px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
                    zIndex: 10,
                  }}
                >
                  <div
                    style={{
                      padding: '8px 12px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      color: '#2563eb'
                    }}
                    onClick={() => {
                      onEdit(candidate);
                      setShowMenu(false);
                    }}
                  >
                    Edit
                  </div>
                  <div
                    style={{
                      padding: '8px 12px',
                      fontSize: '14px',
                      cursor: 'pointer',
                      color: '#dc2626'
                    }}
                    onClick={() => {
                      onDelete(candidate.id);
                      setShowMenu(false);
                    }}
                  >
                    Delete
                  </div>
                </div>
              )}
            </div>
          </div>

          <p style={{ fontSize: '13px', marginTop: '6px' }}>
            ⭐ {candidate.score} Overall
          </p>

          {candidate.referred && (
            <span className="badge">Referred</span>
          )}
          {candidate.assessmentAdded ? (
            <button className="button" style={{ backgroundColor: '#d1fae5', color: '#065f46' }}>
                ✔ Assessment Added
            </button>
          ) : (
            <button className="button" disabled style={{ opacity: 0.6 }}>
                + Add Assessment
            </button>
          )}

        </div>
      )}
    </Draggable>
  );
};

export default CandidateCard;
