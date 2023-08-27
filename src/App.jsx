import "./App.css";
import { Card } from "./Card";

const users = [
  {
    name: 'Alex Chipre',
    twitterId: 'chipredev',
    isFollowing: true
  },
  {
    name: 'Sophie Alpert',
    twitterId: 'sophiebits',
    isFollowing: false
  },
  {
    name: 'Andrew Clark',
    twitterId: 'acdlite',
    isFollowing: true
  },
  {
    name: 'Dan Abramov',
    twitterId: 'dan_abramov',
    isFollowing: false
  }
]
export const App = () => {
  return (
    <>
      <h1 style={{textAlign: 'center'}}>Follow Card</h1>
      <section className="App">
        {users.map(({twitterId, isFollowing, name}) => (
        <Card key={twitterId} twitterId={twitterId} inicialIsFollowing={isFollowing}>
          {name}
        </Card>))}
      </section>
    </>
  );
};
