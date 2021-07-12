import { Route, Switch } from 'react-router-dom';
import FormCategory from './FormCategory';
import ListCategory from './ListCategory';



const Categories = () => {
  return (

    <div>
      <Switch>
      <Route path="/admin/categories" exact>
          <ListCategory />
        </Route>

        <Route path="/admin/categories/:categoryId">
          <FormCategory/>
        </Route>

      </Switch>
    </div>

  );
}

export default Categories