import React, { useState } from 'react';
import './styles.scss';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [note, setNote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="listing__container">
      <div className="layout__max">
        <form onSubmit={e => handleSubmit(e)}>
          <label htmlFor="name">
            Name
            <input
              required
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </label>
          <label htmlFor="phone">
            Phone
            <input
              required
              id="phone"
              type="phone"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </label>
          <label htmlFor="email">
            Email
            <input
              required
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="note">
            Note
            <input
              required
              id="note"
              value={note}
              onChange={e => setNote(e.target.value)}
            />
          </label>
          <button type="submit">submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
