import Users from "@/components/Users";
import React from "react";

async function fetchUsers() {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  console.log(data.data);
  return data.data;
}

async function IndexPage() {
  const users = await fetchUsers();

  return (
    <div>
      <Users users={users} />
    </div>
  );
}

export default IndexPage;
