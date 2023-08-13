import React, { useState } from "react";

function Day9() {
  const [username, setUsername] = useState("");
  const [user, setUserData] = useState(null);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    if (username.trim() === "") {
      setError("Please enter a username");
      return;
    }

    try {
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (response.ok) {
        const data = await response.json();
        setUserData(data);
        setError(null);
      } else {
        setUserData(null);
        setError("User not found");
      }
    } catch (err) {
      setUserData(null);
      setError("An error occurred while fetching data");
    }
  };

  const clearData = () => {
    setUsername("");
    setUserData(null);
    setError(null);
  };

  return (
    <div>
      <div
        className={`input-group w-50 m-auto ${
          error ? "has-error" : user ? "has-success" : ""
        }`}
      >
        <input
          type="search"
          className={`form-control rounded ${
            error ? "is-invalid" : user ? "is-valid" : ""
          }`}
          placeholder="Search"
          aria-label="Search"
          aria-describedby="search-addon"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button
          type="button"
          onClick={fetchUserData}
          className="btn btn-outline-primary mx-1"
        >
          Search
        </button>
        <button
          type="button"
          onClick={clearData}
          className="btn btn-outline-danger mx-1"
        >
          Clear
        </button>
      </div>

      {error ? (
        <div className="text-danger">{error}</div>
      ) : (
        user && (
          <div className="card m-3 mx-auto " style={{ maxWidth: 540 }}>
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={user.avatar_url}
                  alt="Trendy Pants and Shoes"
                  className="img-fluid rounded-start"
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{user.name}</h5>
                  <p className="card-text">{user.bio}</p>
                  <div className="d-flex">
                    <p className="card-text me-2">
                      <small className="text-muted">
                        followers : {user.followers}
                      </small>
                    </p>
                    <p className="card-text mx-2">
                      <small className="text-muted">
                        following : {user.following}
                      </small>
                    </p>
                    <p className="card-text mx-2">
                      <small className="text-muted">
                        repos : {user.public_repos}
                      </small>
                    </p>
                  </div>
                  <a href={user.html_url} target="_blank">
                    Repos
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default Day9;
