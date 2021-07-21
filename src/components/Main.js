import { BrowserRouter, Route, Switch } from "react-router-dom";
import EventDetailsPage from "../screens/EventDetailsPage";
import HomePage from "../screens/HomePage";

export default function Main() {
  return (
    <main className='p-6'>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/events/:id' component={EventDetailsPage} />
        </Switch>
      </BrowserRouter>
    </main>
  );
}
