import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';
import Friends from '../Friends/Friends';

const API_KEY =`${process.env.REACT_APP_API_KEY}`;
console.log(API_KEY);


export default function App() {
  const [date, setDate] = useState(new Date());
  const [count, setCount] = useState(0);
  const [addapiexecuted, setAddApiExecuted] = useState('');
  const [updapiexecuted, setUpdApiExecuted] = useState('');
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [notes, setNotes] = useState('');
  const [friends, setFriends] = useState([]);

  // get all entities - GET
  useEffect(() => {
    fetch('https://fairestdb.p.rapidapi.com/friend/friendModel', {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((repsonse) => {
        setFriends([]);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  const create = (e) => {
    // add entity - POST
    e.preventDefault();

    // creates entity
    fetch('https://fairestdb.p.rapidapi.com/friend/friendModel', {
      method: 'POST',
      headers: {
        'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        name: name,
        notes: notes,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const update = (e) => {
    // update entity - PUT
    e.preventDefault();

    // this will update entries with PUT
    fetch('https://fairestdb.p.rapidapi.com/friend/friendModel', {
      method: 'PUT',
      headers: {
        'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
        'content-type': 'application/json',
        accept: 'application/json',
      },
      body: JSON.stringify({
        _id: id,
        name: name,
        notes: notes,
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deletex = (e) => {
    // delete entity - DELETE
    e.preventDefault();
    // deletes entities
    fetch(`https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${id}`, {
      method: 'DELETE',
      headers: {
        'x-rapidapi-host': 'fairestdb.p.rapidapi.com',
        'x-rapidapi-key': API_KEY,
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleAddAPITime = () => {
    setAddApiExecuted(date.toLocaleTimeString());
    setDate(date);
    setCount((count) => count + 1);
  };

  const handleUpdateAPITime = () => {
    setUpdApiExecuted(date.toLocaleTimeString());
    setDate(date);
    setCount((count) => count + 1);
  };

  return (
    <div>
      <div className="both">
        <div className="red">
          <div className="subred">
            <p>Try resizing boxes</p>
          </div>
        </div>
        <div className="yellow">
          <div className="subyellow">
            <p>Stats:</p>
          </div>
          Times API Invoked: {count} <br />
          <span className="msg">Add API Last Executed: {addapiexecuted}</span>
          <br />
          <span className="msg">
            Update API Last Executed: {updapiexecuted}
          </span>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <form className="d-flex flex-column">
              <h5 className="text-center">Data Component</h5>
              <label className="label" htmlFor="name">
                Friend Name:
                <input
                  name="name"
                  id="name"
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </label>
              <label className="label" htmlFor="notes">
                Friend notes:
                <input
                  name="notes"
                  id="notes"
                  type="test"
                  className="form-control"
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  required
                />
              </label>
              <label htmlFor="id">
                Friend ID:
                <input
                  name="id"
                  id="id"
                  type="text"
                  className="form-control"
                  value={id}
                  onChange={(e) => setID(e.target.value)}
                />
              </label>
              <button
                className="btn btn-primary"
                type="button"
                onClick={function(e){ create(e); handleAddAPITime(e)}}
              >
                Add
              </button>

              <button
                className="btn btn-info"
                type="button"
                onClick={function(e){ update(e); handleUpdateAPITime(e);}}
              >
                Update
              </button>

              <button
                className="btn btn-danger"
                type="button"
                onClick={function(e){ deletex(e); setCount(count + 1);}}
              >
                Delete
              </button>
            </form>
            <Friends friends={friends} />
          </div>
        </div>
      </div>
    </div>
  );
}
