import * as React from 'react';
import styled, { StyledFunction } from 'styled-components';
import { connect } from 'react-redux';

import { selectLocale } from '@selectors/localeSelector';

const mapStateToProps = (state) => {
  return {
    locale: selectLocale(state)
  };
};

const Locale = connect(mapStateToProps)((props) => {
  // console.log("translate", props.label, props.trans);
  const label = props.locale[props.label];

  return (
    <span className={props.className}>
      {label}
    </span>
  );
});

export default Locale;