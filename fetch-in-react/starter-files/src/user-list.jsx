import React from 'react';

function User({ user }) {
  const emailHref = `mailto:${user.email}`;
  return (
    <li>
      <h3>{ user.name }</h3>
      <h4>{ user.company.name }</h4>
      <p>
        Contact:
        { ' ' }
        <a target="_blank" rel="noopener noreferrer" href={emailHref}>
          { user.email }
        </a>
      </p>
    </li>
  );
}

function UserList({ users }) {
  return (
    <ul>
      {
        users.map((user) => {
          return <User key={user.id} user={user} />;
        })
      }
    </ul>
  );
}

export default UserList;
