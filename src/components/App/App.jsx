import React from 'react'

function App({ name, isLoading,getNameRequest }) {
    return (
      <div className="App">
  
        <h1>Name :{name}</h1>

        <button
          onClick={() => {
            getNameRequest();
          }}
        >
          Change Name
        </button>
      </div>
    );
  }

export default App
