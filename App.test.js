import React from 'react';
import App from './App';

import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders properly', () => {
    const rendered = renderer.create(<App />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
