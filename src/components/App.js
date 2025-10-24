import React from "react";

const App = () => {
  return (
    <div>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>

      <section id="home">
        <h1>Welcome Home</h1>
        <p>This is the home section.</p>
      </section>

      <section id="about">
        <h2>About Us</h2>
        <p>This is the about section.</p>
      </section>
    </div>
  );
};

export default App;

