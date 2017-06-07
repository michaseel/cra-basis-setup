import React from 'react';
import renderer from 'react-test-renderer';
import Headline from './Headline';

it('renders snapshot', () => {
    const tree = renderer.create(
        <Headline>Test</Headline>
    ).toJSON();
    expect(tree).toMatchSnapshot();
});
