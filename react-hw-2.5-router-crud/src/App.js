import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PostReviewCard from './components/PostReviewCard';
import HomePage from './components/HomePage';
import NewPost from './components/NewPost';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className='Wrapper'>
//         <Switch>
//           <Route path='/posts/new' component={NewPost} />
//           <Route path='/posts/:id' component={PostReviewCard} />
//           <Route path='/' component={HomePage} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

function App() {
  return (
    <Router>
      <div className='Wrapper'>
        <Switch>
          <Route path='/posts/new' component={NewPost} />
          <Route path='/posts/:id' component={PostReviewCard} />
          <Route path='/' component={HomePage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
