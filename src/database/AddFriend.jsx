import React, { useState } from "react";
import { db } from "./dexie";

export function AddFriendForm({ defaultAge = 21 }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState(defaultAge);
  const [status, setStatus] = useState("");

  async function addFriend() {
    try {
      const id = await db.friends.add({ name, age });
      setStatus(`Friend ${name} successfully added. Got id ${id}`);
      setName("");
      setAge(defaultAge);
    } catch (error) {
      setStatus(`Failed to add ${name}: ${error}`);
    }
  }

  return (
    <div>
      <p>{status}</p>
      <div className="flex">
        <div>
          <label>
            Name:
            <input
              type="text"
              value={name}
              onChange={(ev) => setName(ev.target.value)}
            />
          </label>
        </div>
        <div>
          <label>
            Age:
            <input
              type="number"
              value={age}
              onChange={(ev) => setAge(Number(ev.target.value))}
            />
          </label>
        </div>
        <button onClick={addFriend}>Add</button>
      </div>
    </div>
  );
}
