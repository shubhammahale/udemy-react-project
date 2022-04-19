import React from "react";
import UsersList from "../../user/components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Shubham",
      image:
        "https://thumbs.dreamstime.com/b/pet-cat-green-cats-eyes-gray-big-102425920.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
