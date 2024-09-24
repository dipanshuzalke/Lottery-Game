import './App.css';
import TodoList from './TodoList';
import TicketNum from './TicketNum';
import { sum } from './helper';
import Lottery from './LotteryTicket';

function App() {

  let winCondition = (ticket) => {
    // return sum(ticket) === 15;
    // return ticket.every((num) => num === ticket[0]);
    return ticket[0] === 0;
  };

  return (
    <>
      {/* <TodoList /> */}
      {/* <LotteryTicket /> */}
      {/* <TicketNum /> */}
      <Lottery n={3} winCondition={winCondition}/>
    </>
  );
}

export default App;
