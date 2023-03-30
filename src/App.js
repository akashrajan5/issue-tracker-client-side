import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { Protected } from './components/Protected';
import { useAuth } from './customHooks/useAuth';
import { CreateIssue } from './routes/issue/CreateIssue';
import { ViewIssue } from './routes/issue/ViewIssue';
import { Login } from './routes/login/Login';
import { CreateProject } from './routes/project/CreateProject';
import { Home } from './routes/project/Home';
import { ViewProject } from './routes/project/ViewProject';

function App() {
  const auth = useAuth();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={
          <Protected>
            <Home />
          </Protected>
        } />
        <Route path='/create' element={
          <Protected>
            <CreateProject />
          </Protected>
        } />
        <Route path='/project/:id' element={
          <Protected>
            <ViewProject />
          </Protected>
        } />
        <Route path='project/:id/create-issue' element={
          <Protected>
            <CreateIssue />
          </Protected>
        } />
        <Route path='project/:id/issue/:issueId' element={
          <Protected>
            <ViewIssue />
          </Protected>
        } />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
