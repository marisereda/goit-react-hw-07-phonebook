import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { ImCheckmark, ImBin } from 'react-icons/im';
import { removeContact } from 'redux/contactsSlice';
import { Box } from 'components/Box';
import { theme } from 'constants';
import { Item, Button } from './Contact.styled';

export const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  return (
    <Item>
      <Box display="flex" alignItems="center" gridGap={3} minWidth="nameBox">
        <ImCheckmark size={theme.sizes.iconS} />
        {name}:
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        gridGap={3}
        minWidth="numberBox"
      >
        <span>{number}</span>
        <Button
          name={id}
          type="button"
          onClick={() => dispatch(removeContact(id))}
          aria-label="Remove contact"
        >
          <ImBin size={theme.sizes.iconM} />
        </Button>
      </Box>
    </Item>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
