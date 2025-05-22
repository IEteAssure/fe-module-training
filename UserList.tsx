import React, { Component } from 'react';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      loading: true,
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) =>
        this.setState({
          users: data,
          loading: false,
        })
      );
  }

  render() {
    const { users, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    return (
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    );
  }
}

export default UserList;
