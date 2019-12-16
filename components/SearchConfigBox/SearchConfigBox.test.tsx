import React from 'react';
import { shallow } from 'enzyme';
import SearchConfigBox from './SearchConfigBox';

import { Query } from '../UsersList/UsersList';

import Button from './Button';
import Input from './Input';
import Select from './Select';

describe('SearchConfigBox', () => {
  it('calls onSearch with query on Button click', () => {
    const someOnSearchHandler = jest.fn();
    const someQuery: string = 'gaearon';

    const wrapper = shallow(<SearchConfigBox onSearch={someOnSearchHandler} />);

    const select = wrapper.find(Select);
    const onSelectChangeHandler: (mode: string) => any = select.prop(
      'onChange'
    );
    onSelectChangeHandler('login');

    const input = wrapper.find(Input);
    const onInputChangeHandler: (value: string) => any = input.prop('onChange');
    onInputChangeHandler(someQuery);

    const button = wrapper.find(Button);
    const onButtonClickHandler: (...args: any[]) => any = button.prop(
      'onClick'
    );
    onButtonClickHandler();

    const expectedQuery: Query = { key: someQuery, type: 'login' };
    expect(someOnSearchHandler).toHaveBeenCalledWith(expectedQuery);
  });

  it('disables the Input when mode is not selected (null)', () => {
    const wrapper = shallow(<SearchConfigBox onSearch={jest.fn()} />);

    const select = wrapper.find(Select);
    const initialMode: string = select.prop('value');
    expect(initialMode).toBe(null);

    const input = wrapper.find(Input);
    const isInputDisabled: boolean = input.prop('disabled');

    expect(isInputDisabled).toBe(true);
  });

  it('enables the Input when some mode is selected', () => {
    const wrapper = shallow(<SearchConfigBox onSearch={jest.fn()} />);

    const select = wrapper.find(Select);
    const onSelectChangeHandler: (mode: string) => any = select.prop(
      'onChange'
    );
    onSelectChangeHandler('email');

    const input = wrapper.find(Input);
    const isInputDisabled: boolean = input.prop('disabled');

    expect(isInputDisabled).not.toBe(true);
  });

  it('passes typeEmail prop to the Input when is in "email" mode', () => {
    const wrapper = shallow(<SearchConfigBox onSearch={jest.fn()} />);

    const select = wrapper.find(Select);
    const onSelectChangeHandler: (mode: string) => any = select.prop(
      'onChange'
    );
    onSelectChangeHandler('email');

    const input = wrapper.find(Input);
    const isInputDisabled: boolean = input.prop('typeEmail');

    expect(isInputDisabled).toBe(true);
  });

  it('passes falsy typeEmail prop to the Input when is not in "email" mode', () => {
    const wrapper = shallow(<SearchConfigBox onSearch={jest.fn()} />);

    const select = wrapper.find(Select);
    const onSelectChangeHandler: (mode: string) => any = select.prop(
      'onChange'
    );
    onSelectChangeHandler('login');

    const input = wrapper.find(Input);
    const isInputDisabled: boolean = input.prop('typeEmail');

    expect(isInputDisabled).toBe(false);
  });
});