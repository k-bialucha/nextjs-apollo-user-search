import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';
import { AppTitleText } from './Header.styled';

describe('Header', () => {
  it('should display provided title', () => {
    const someTitle: string = 'some fancy title';

    const wrapper = shallow(<Header title={someTitle} />);

    const titleText = wrapper.find(AppTitleText);

    expect(titleText.text()).toMatch(someTitle);
  });
});
