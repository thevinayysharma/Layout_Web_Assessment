import React from "react";
import "./Friends.css";

export default function Friends({ friends }) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Since</th>
        </tr>
      </thead>
      <tbody>
        {friends &&
          friends.map((friend) => {
            return (
              <tr key={friend._id}>
                <td>{friend._id}</td>
                <td>{friend.name}</td>
                <td>{friend.since}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
