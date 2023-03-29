import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/Navbar';
import { CreateIssue } from './routes/issue/CreateIssue';
import { ViewIssue } from './routes/issue/ViewIssue';
import { Login } from './routes/login/Login';
import { CreateProject } from './routes/project/CreateProject';
import { Home } from './routes/project/Home';
import { ViewProject } from './routes/project/ViewProject';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/dashboard' element={<Home />} />
        <Route path='/create' element={<CreateProject />} />
        <Route path='/project/:id' element={<ViewProject />} />
        <Route path='project/:id/create-issue' element={<CreateIssue />} />
        <Route path='project/:id/issue/:issueId' element={<ViewIssue />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
