/**
 * React Starter Kit for Firebase
 * https://github.com/kriasoft/react-firebase-starter
 * Copyright (c) 2015-present Kriasoft | MIT License
 */

/* @flow */

import firebase from 'firebase-admin';
import { https, config } from 'firebase-functions';

import api from './graphql';
import ssr from './ssr';

if (!firebase.apps.length) {
  // https://firebase.google.com/docs/admin/setup
  firebase.initializeApp({
    credential: firebase.credential.cert(config().key),
  });
}

export const graphql = https.onRequest(api);
export default https.onRequest(ssr);
