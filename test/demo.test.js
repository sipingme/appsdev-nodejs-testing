import 'jsdom-global/register';
import React from 'react';
import { mount } from 'enzyme';
import sinon from 'sinon';
import Demo from '../src/demo';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe('UI test #demo', () => {
  it('should have title', () => {
    const wrapper = mount(<Demo />);
    const title = wrapper.find('h3');
    expect(title).toHaveLength(1);
    expect(title.text()).toBe('This is a demo')
  });

  it('should add 1 when click button', () => {
    const wrapper = mount(<Demo />);
    const counter = wrapper.find('.counter');
    const v1 = parseInt(counter.text());
    wrapper.find('button').simulate('click');
    const v2 = parseInt(counter.text());
    expect(v2).toBe(v1 + 1);
  });

  it('should change when input number', () => {
    const wrapper = mount(<Demo />);
    const counter = wrapper.find('.counter');
    wrapper.find('input').simulate('change', {
      target: {
        value: '5'
      }
    });
    expect(counter.text()).toBe('5');
  });

  it('should change when props change', () => {
    const wrapper = mount(<Demo title="Demo" />);
    sinon.spy(Demo.prototype, 'UNSAFE_componentWillReceiveProps');
    const title = wrapper.find('h3');
    wrapper.setProps({
      title: 'Demo2'
    });
    expect(title.text()).toBe('Demo2');
    const callCount = Demo.prototype.UNSAFE_componentWillReceiveProps.callCount;
    expect(callCount).toBe(1);
  });
});
