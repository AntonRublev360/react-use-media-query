import React from 'react';
import { mount } from 'enzyme';

export default function createTestHook(useHook) {
  function TestHook({ paramsArray, renderSpy }) {
    const formField = useHook(...paramsArray);
    renderSpy(formField);
    return null;
  }
  return function testHook(paramsArray, renderSpy) {
    mount(<TestHook paramsArray={paramsArray} renderSpy={renderSpy} />);
  };
}
