import React from 'react';
import { Home } from './Home';

import renderer from 'react-test-renderer';

describe('Home', () => {
  it('renders properly', () => {
    const rendered = renderer.create(<Home />).toJSON();
    expect(rendered).toBeTruthy();
  });
});
