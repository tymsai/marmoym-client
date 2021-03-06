import * as React from 'react';
import styled  from 'styled-components';

import { border } from '@universal/styles/styles';
import Color from '@universal/constants/Color';
import Facon from '@components/common/Facon/Facon.mobile';

const StyledUpper = styled.div`
  color: ${Color.GRAY1};
  display: flex;
  font-size: 13px;
  margin-bottom: 2px;
  width: 100%;
`;

const Term = styled.div`
  align-items: center;
  color: ${Color.BLACK2};
  cursor: pointer;
  display: flex;
  flex-grow: 1;
  font-size: 15px;
  font-weight: 600;
`;

const Meta = styled.div`
  margin-left: 7px;
`;

const Upper = ({
  definitionId,
  handleClickDefinition,
  termLabel,
  updatedTime,
  username,
}) => {
  return (
    <StyledUpper>
      <Term
        onClick={(e) => handleClickDefinition(e, definitionId)}>
        {termLabel}
      </Term>
      <Meta>
        {username}
      </Meta>
      <Meta>
        {updatedTime}
      </Meta>
    </StyledUpper>
  );
};

export default Upper;
