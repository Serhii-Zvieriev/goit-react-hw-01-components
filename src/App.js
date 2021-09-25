import FriendList from './components/FriendList';
import SocialProfile from './components/SocialProfile';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';

import user from './user.json';
import statisticalData from './statistical-data.json';

function App() {
  return (
    <div className="container">
      <SocialProfile obj={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList />
      <TransactionHistory />
    </div>
  );
}

export default App;
