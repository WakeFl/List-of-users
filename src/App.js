import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation';
import PostsList from './components/Posts/PostsList';
import TodoList from './components/Todos/TodoList';
import UserList from './components/Users/UserList';
import NotFound from './components/NotFound';
import User from './components/Users/User';
import Post from './components/Posts/Post';
import PostAdd from './components/Posts/PostAdd';
import UserAdd from './components/Users/UserAdd';
import TodoAdd from './components/Todos/TodoAdd';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path='/' element={<Navigation />}>
            <Route path='posts' element={<PostsList />} />
            <Route path='posts/add' element={<PostAdd />} />
            <Route path="posts/:id" element={<Post />} />
            <Route path='users' element={<UserList />} />
            <Route path="users/add" element={<UserAdd />} />
            <Route path="users/:id" element={<User />} />
            <Route path='todos' element={<TodoList />} />
            <Route path="todos/add" element={<TodoAdd />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
