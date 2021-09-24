import FriendList from './components/FriendList';
import SocialProfile from './components/SocialProfile';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';

import user from './user.json';

function App() {
  return (
    <>
      <SocialProfile obj={user} />
      <FriendList />
      <Statistics />
      <TransactionHistory />
    </>
  );
}

export default App;
