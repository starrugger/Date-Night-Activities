import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function Icon({ color, children }) {
  return <StyledIcon background={color}>{children}</StyledIcon>;
}

const StyledIcon = styled.div`
  height: 3.5rem;
  width: 3.5rem;
  background: ${(props) => props.background};
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4rem;
  color: white;
  cursor: pointer;
  svg {
    height: 1.5rem;
  }
`;

Icon.propTypes = {
  color: PropTypes.instanceOf(Array).isRequired,
  children: PropTypes.func.isRequired,
};

export default Icon;
