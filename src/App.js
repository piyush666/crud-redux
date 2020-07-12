import React from 'react';
import { ContainerAllPost } from './Containers/ContainerAllPost';
import { ContainerPostForm } from './Containers/ContainerPostForm';

function App() {
  return (
    <div className="App">
      <ContainerPostForm />
      <ContainerAllPost />
    </div>
  );
}

export default App;
