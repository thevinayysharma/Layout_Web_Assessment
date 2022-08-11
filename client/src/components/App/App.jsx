import React from "react";
import "./App.css";
import Friends from "../Friends/Friends";
import { useState, useEffect } from "react";

const API_KEY = `${process.env.REACT_APP_API_KEY}`;

export default function App() {
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [notes, setNotes] = useState("");
  const [friends, setFriends] = useState([]);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [addapiexecuted, setAddApiExecuted] = useState("");
  const [updapiexecuted, setUpdApiExecuted] = useState("");

  // get all entities - GET
  useEffect(() => {
    fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": API_KEY,
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

  // add entity - POST
  const create = (e) => {
    e.preventDefault();
    fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
      method: "POST",
      headers: {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": API_KEY,
        "content-type": "application/json",
        accept: "application/json",
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

  // update entity - PUT
  const update = (e) => {
    e.preventDefault();

    fetch("https://fairestdb.p.rapidapi.com/friend/friendModel", {
      method: "PUT",
      headers: {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": API_KEY,
        "content-type": "application/json",
        accept: "application/json",
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

  // delete entity - DELETE
  const deletex = (e) => {
    e.preventDefault();
    fetch(`https://fairestdb.p.rapidapi.com/friend/friendModel/_id/${id}`, {
      method: "DELETE",
      headers: {
        "x-rapidapi-host": "fairestdb.p.rapidapi.com",
        "x-rapidapi-key": API_KEY,
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

  // udpates "statistics" state for API Executed
  const handleAddAPITime = () => {
    setDate(date);
    setCount((count) => count + 1);
    setAddApiExecuted(date.toLocaleTimeString());
  };

  const handleUpdateAPITime = () => {
    setDate(date);
    setCount((count) => count + 1);
    setUpdApiExecuted(date.toLocaleTimeString());
  };

  return (
    <div>
      <div className="Upper__Draggable_Components">
        <div className="red__component">
          <div className="subred">
            <p>Try resizing boxes</p>
          </div>
        </div>
        <div className="yellow__component">
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
                onClick={function (e) {
                  create(e);
                  handleAddAPITime(e);
                }}
              >
                Add
              </button>

              <button
                className="btn btn-info"
                type="button"
                onClick={function (e) {
                  update(e);
                  handleUpdateAPITime(e);
                }}
              >
                Update
              </button>

              <button
                className="btn btn-danger"
                type="button"
                onClick={function (e) {
                  deletex(e);
                  setCount(count + 1);
                }}
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
