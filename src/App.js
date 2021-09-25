import FriendList from './components/FriendList';
import SocialProfile from './components/SocialProfile';
import Statistics from './components/Statistics';
import TransactionHistory from './components/TransactionHistory';

import user from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friendsList from './data/friends.json';
import transactions from './data/transactions.json';

function App() {
  return (
    <div className="container">
      <SocialProfile obj={user} />
      <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
