import React from 'react';
import { render } from '@testing-library/react';
import renderer from 'react-test-renderer';

import Projects from '../src/Projects.js';
import MazeGame from '../src/MazeGame.js';
import MySkills from '../src/MySkills.js';


describe('components render correctly', () => {
    test('projects', () => {
        const component = renderer.create(<Projects />);
        const tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });
});
