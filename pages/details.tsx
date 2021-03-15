import React from "react";
import Link from "next/link";
import { NextPage } from "next";

interface Props {
  users?: Users[];
}

interface Users {
  id: number;
  name: string;
  username: string;
  email: string;
}

const Details: NextPage<Props> = ({ users }) => {
  return (
    <div>
      {users?.map((user) => (
        <div style={{ color: "blue" }} key={user.id}>
          <Link href={`users/${user.id}`}>
            {`${user.username}: ${user.email}`}
          </Link>
        </div>
      ))}
    </div>
  );
};

Details.getInitialProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  return { users };
};

export default Details;
