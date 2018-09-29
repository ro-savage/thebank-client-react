import React from 'react'
import Login from './pages/Login';
import Home from './pages/Home';
import Balance from './pages/Balance';
import Blocks from './pages/Blocks';
import Block from './pages/Block';

const routes = [
  {
    path: '/',
    render: () => <Login key="loginpage" />,
  },
  {
    path: '/home',
    render: () => <Home key="homepage" />,
  },
  {
    path: '/balance',
    render: () => <Balance key="balancepage" />,
  },
  {
    path: '/blocks',
    render: () => <Blocks key="blockspage" />,
  },
  {
    path: '/block/:blockId',
    render: (routing) => <Block key="blockpage" blockId={routing.params.blockId} />,
  },
  {
    path: '*',
    render: () => <div>Not Found</div>,
  },
];

export default routes