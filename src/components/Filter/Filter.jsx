import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/contactReducer';
import css from "./Filter.module.css";


const Filter = () => {
  const filter = useSelector(state => state.contacts.filter);
  const dispatch = useDispatch();

  const filterChange = e => {
    const { value } = e.target;
    dispatch(setFilter(value));
  };

  return (
      <input className={css.filterinput} onChange={filterChange} value={filter} type="text" name="filter" placeholder="Пошук" />
  );
};

export default Filter;
