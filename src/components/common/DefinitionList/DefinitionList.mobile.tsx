import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';

import { border } from '../../../styles/debug';
import Definition from './Definition/Definition';

const renderDefinitions = (definitions) => {
  if (!definitions) {
    return null;
  }

  return definitions.map((definition, i) => (
    <Definition
      key={i}
      term={definition.get('term')}
      label={definition.get('label')}
      usage={definition.get('usage')}
      pos={definition.get('pos')}
      media={definition.get('media')}
      origin={definition.get('origin')}/>
  ));
}

const StyledDefinitionList = styled.div`
  ${border('black')}
`;

const DefinitionList = (props) => (
  <StyledDefinitionList>
    {renderDefinitions(props.definitions)}
  </StyledDefinitionList>
);

export default DefinitionList;