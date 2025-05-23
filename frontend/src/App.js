import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';

import Sidebar from './layout/Sidebar';
import TopNavbar from './layout/TopNavbar';
import Headerbar from './layout/HeaderBar';
import FilterBar from './layout/FilterBar';
import Rightbar from './layout/Rightbar';

import KanbanBoard from './components/KanbanBoard';
import AddCandidateForm from './components/AddCandidateForm';
import { DragDropContext } from '@hello-pangea/dnd';

function App() {
  const [candidates, setCandidates] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [candidateToEdit, setCandidateToEdit] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/candidates')
      .then(res => setCandidates(res.data))
      .catch(err => console.error('Failed to fetch candidates', err));
  }, []);

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination || source.droppableId === destination.droppableId) return;

    const updated = candidates.map(c =>
      c.id.toString() === draggableId
        ? { ...c, stage: destination.droppableId }
        : c
    );
    setCandidates(updated);

    const movedCandidate = updated.find(c => c.id.toString() === draggableId);
    axios.put(`http://localhost:5000/api/candidates/${draggableId}`, movedCandidate)
      .catch(err => console.error('Failed to update candidate', err));
  };

  const handleAddCandidate = (newCandidate) => {
    axios.post('http://localhost:5000/api/candidates', newCandidate)
      .then(res => {
        setCandidates([...candidates, res.data]);
        setShowAddForm(false);
      })
      .catch(err => {
        console.error('Failed to add candidate', err);
        alert('Error adding candidate');
      });
  };

  const handleDeleteCandidate = (id) => {
    axios.delete(`http://localhost:5000/api/candidates/${id}`)
      .then(() => setCandidates(prev => prev.filter(c => c.id !== id)))
      .catch(err => console.error('Failed to delete candidate', err));
  };

  const handleEditCandidate = (candidate) => {
    setCandidateToEdit(candidate);
    setShowAddForm(true);
  };

  const handleUpdateCandidate = (updatedCandidate) => {
    axios.put(`http://localhost:5000/api/candidates/${updatedCandidate.id}`, updatedCandidate)
      .then(() => {
        setCandidates(prev =>
          prev.map(c => (c.id === updatedCandidate.id ? updatedCandidate : c))
        );
        setCandidateToEdit(null);
        setShowAddForm(false);
      })
      .catch(err => {
        console.error('Failed to update candidate', err);
        alert('Error updating candidate');
      });
  };

  return (
    <div className="app-outer">
      <TopNavbar setShowAddForm={setShowAddForm} />
      <div className="app-main">
        <Sidebar />
        <div className="kanban-content">
          <Headerbar />
          <FilterBar />

          {showAddForm && (
            <AddCandidateForm
              onAdd={handleAddCandidate}
              onUpdate={handleUpdateCandidate}
              candidateToEdit={candidateToEdit}
              setShowAddForm={setShowAddForm}
            />
          )}

          <DragDropContext onDragEnd={onDragEnd}>
            <KanbanBoard
              candidates={candidates}
              onDelete={handleDeleteCandidate}
              onEdit={handleEditCandidate}
            />
          </DragDropContext>
        </div>
        <Rightbar />
      </div>
    </div>
  );
}

export default App;
