import React from "react";

const App = () => {
  return (
    <div className="form-control">
      <label className="label">
        <span className="label-text">Your Email</span>
      </label>
      <label className="input-group">
        <span>Email</span>
        <input
          type="text"
          placeholder="info@site.com"
          className="input input-bordered"
        />
      </label>
      <div className="form-control">
  <label className="label">
    <span className="label-text">Enter amount</span>
  </label>
  <label className="input-group">
    <input type="text" placeholder="0.01" className="input input-bordered" />
    <span>BTC</span>
  </label>
</div>
    </div>
  );
};

export default App;
