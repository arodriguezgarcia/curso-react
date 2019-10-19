import React from 'react';

const APIContainer = (Component, url) => {
  return class extends React.Component {
    state = {
      data: []
    }

    async componentDidMount() {
      let response = await fetch(url)
      let data = await response.json()
      this.setState({ data })
    }

    render() {
      return(
        <Component data={this.state.data} />
      )
    }

  }
}

const PostList = props =>
  <>
    <h2>Post list</h2>
    <ul>
      {props.data.slice(0, 10).map((el, key) => (
        <li key={key}>{el.id}. {el.title}</li>
      ))}
    </ul>
  </>

const PostDetail = props =>
    <div>
          <h2 >Post Detail<br />{props.data.title}</h2>
          <div>{props.data.body}</div>
    </div>

const MyPostList = APIContainer(PostList, 'https://jsonplaceholder.typicode.com/posts')
const MyPostDetail = APIContainer(PostDetail, 'https://jsonplaceholder.typicode.com/posts/1')

class Ejercicio13 extends React.Component {
    
    render() {
      return (
        <>
          <h1 className="ejercicio">13. Componentes HOC</h1>
          <MyPostList />
          <MyPostDetail />
        </>
      );
    }
} 

export default Ejercicio13;
