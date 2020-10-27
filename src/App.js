import React from 'react';
import './App.css';
import Header from './components/header/header.component';
import EditorPage from './pages/editorpage/editorpage.component'
function App() {
  return (
    <div>
      <Header/>
      <main>
        <EditorPage/>
      </main>
    </div>
  );
}

export default App;
