import "./App.css";
import { Card } from "./Card";

const users = [
  {
    name: 'Alex Chipre',
    twitterId: 'chipredev',
    isFollowing: true
  },
  {
    name: 'Freddy Vega',
    twitterId: 'freddier',
    isFollowing: false
  },
  {
    name: 'El Vago',
    twitterId: 'alexchipre',
    isFollowing: true
  },
  {
    name: 'Pato Donal',
    twitterId: 'patodonal',
    isFollowing: false
  }
]
export const App = () => {
  return (
    <section className="App">
      {users.map(({twitterId, isFollowing, name}) => (
      <Card key={twitterId} twitterId={twitterId} inicialIsFollowing={isFollowing}>
        {name}
      </Card>))}
    </section>
  );
};
