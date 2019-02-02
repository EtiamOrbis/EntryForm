// @flow
import React from 'react';
import { Provider } from 'react-redux';
import EntryForm from './screen/EntryForm';
import store from './resourses/reduxConfig';

export default function App() {
  return (
    <Provider store={store}>
      <EntryForm />
    </Provider>
  );
}
