import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import ServiceTeaser from './ServiceTeaser';

it('renders ServiceTeaser snapshot', () => {
  const tree = renderer
    .create(
      <ServiceTeaser title="Haus" href="#" image="https://unsplash.it/300/200?image=957">
        Für einen hübschen Garten und gesunde Pflanzen.
      </ServiceTeaser>
    )
    .toJSON();
  expect(tree).toMatchStyledComponentsSnapshot();
});
