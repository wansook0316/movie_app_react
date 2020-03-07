import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    isLoading: true,
    movies: []
  };
  getMovies = async () => {
    const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
  };

  componentWillMount() {
    this.getMovies();
  }
  render() {
    // this.state 객체 안에 있는 멤버변수 isLoading을 찾아서 그것의 값을 자바스크립트 변수 isLoading 안에 넣어라
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "we are ready"}</div>;
  }
}

export default App;
