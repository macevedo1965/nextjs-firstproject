import { useParams } from "next/navigation";

import React from "react";

async function getUser(id) {
  const res = await fetch(`https://reqres.in/api/users/${id}`);
  const data = await res.json();
  return data.data;
}

async function UserDetails({ params }) {
  const user = await getUser(params.id);
  console.log(user);

  return (
    <div className="row">
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img
              src={user.avatar}
              alt={user.email}
              style={{ borderRadius: "50%" }}
            />
          </div>
          <div className="card-body text-center">
            <div>
              <h3>
                {user.id} {user.first_name} {user.last_name}
              </h3>
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
