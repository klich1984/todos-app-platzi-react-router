import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TodoForm.css';

function TodoForm({ title, buttonEvent, subEvent }) {
  const navigate = useNavigate()
  const [newTodoValue, setNewTodoValue] = React.useState('');

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    navigate('/')
  };
  const onSubmit = (event) => {
    event.preventDefault();
    subEvent(newTodoValue);
    navigate('/')
  };

  return (
    <form onSubmit={onSubmit}>
      <h2>{title}</h2>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla oara el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          {buttonEvent}
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
