import {useContext} from 'react';
import './App.css';
import {Header,Footer,Posts} from './Components';
import {MainPage,Login,Register,PostPage,About,Contact,CreatePost,AccountSettings,Search,NotFound} from './Pages/index';
import {BrowserRouter as Router,Routes,Route,Navigate,Outlet} from "react-router-dom";
import {Context} from './context/Context';


function App() {

  const {user} = useContext(Context);

  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/posts/:category" element={<Posts out={true}/>} />
        <Route path="/posts" element={<Posts out={true}/>} />
        <Route path='/posts/post/:id' element={<PostPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/createpost' element={<CreatePost />} />
        <Route path='/accountsettings' element={<AccountSettings />} />
        {
          user?.user &&
          <Route path='/users/posts/:username' element={<Posts />} />
        }
          <Route path='/posts/search/:searchTerm' element={<Search />}/>
          <Route path='*' element={<NotFound />}/>

        </Routes>
        <Footer />
      </div>
      </Router>
  );
}

export default App;
