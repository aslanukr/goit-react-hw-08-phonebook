import { FilterInput, InfoMessage } from 'components/Styles.styled';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filter/filterSlice';
import { selectContacts, selectFilter } from 'redux/selectors';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const filterHandler = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <>
      <InfoMessage>{contacts.length} contacts</InfoMessage>
      <FilterInput
        type="text"
        name="filter"
        placeholder="Search contacts by name"
        value={filter}
        onChange={filterHandler}
      />
    </>
  );
};
