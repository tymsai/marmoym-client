import axios from 'axios';

import * as URL from './ServerSideApiURL';
import { getPayload } from '../apiUtils';

export function getTranslate(locale) {
  return axios.get(`${URL.GET_LOCALE}/${locale}`)
  .then(getPayload)
  .catch(err => {
    return err;
  });
}