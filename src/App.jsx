import React, { useState, useEffect } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import io from 'socket.io-client';

// Events
import { USER_CONNECTED, LOGOUT } from './events';

//  Layout
import Layout from './components/Layout';

//  Views
import { LoginView } from './views';

// URL
const socketUrl = 'http://localhost:3231';

const App = () => {
  const [socket, setSocket] = useState(null);
  const [user, setUser] = useState(null);

  const initSocket = () => {
    const newSocket = io(socketUrl);
    newSocket.on('connect', () => {
      console.log('Connected');
    });
    setSocket(newSocket);
  };

  const handleUser = userData => {
    socket.emit(USER_CONNECTED, userData);
    setUser(userData);
  };

  const handleLogout = userData => {
    socket.emit(LOGOUT);
    setUser(null);
  };

  useEffect(() => {
    initSocket();
  }, []);

  return (
    <BrowserRouter>
      <Layout />
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <LoginView {...props} socket={socket} handleUser={handleUser} />
          )}
        />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
