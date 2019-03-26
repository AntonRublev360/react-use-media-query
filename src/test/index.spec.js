import { act } from 'react-dom/test-utils';
import createTestHook from './testHook';
import useMedaiQuery from '../index';

describe('useMedaiQuery', () => {
  const testHook = createTestHook(useMedaiQuery);
  let originalMatchMedia;

  beforeAll(() => {
    originalMatchMedia = window.matchMedia;
    window.matchMedia = jest.fn();
  });

  afterAll(() => {
    window.matchMedia = originalMatchMedia;
  });

  describe('when media query matches', () => {
    const outputSpy = jest.fn();
    const unsubscribeMock = jest.fn();
    let passedListener;
    const mockMathcResult = {
      matches: true,
      addListener: jest.fn().mockImplementation(listener => {
        passedListener = listener;
        return unsubscribeMock;
      })
    };

    beforeEach(() => {
      window.matchMedia.mockReturnValue(mockMathcResult);
      testHook(['(max-width: 400px)'], outputSpy);
    });

    it('returns true', () => {
      expect(outputSpy).toHaveBeenCalledWith(true);
    });

    it('subscribes for media query change', () => {
      expect(mockMathcResult.addListener).toHaveBeenCalled();
    });

    it('returns false if media quey match changes to no match', () => {
      act(() => {
        passedListener({
          matches: false
        });
      });
      expect(outputSpy).toHaveBeenCalledWith(false);
    });
  });

  describe('when media query does not match', () => {
    const outputSpy = jest.fn();
    const unsubscribeMock = jest.fn();
    let passedListener;
    const mockMathcResult = {
      matches: false,
      addListener: jest.fn().mockImplementation(listener => {
        passedListener = listener;
        return unsubscribeMock;
      })
    };

    beforeEach(() => {
      window.matchMedia.mockReturnValue(mockMathcResult);
      testHook(['(max-width: 400px)'], outputSpy);
    });

    it('returns false', () => {
      expect(outputSpy).toHaveBeenCalledWith(false);
    });

    it('returns true if media quey match changes to match', () => {
      act(() => {
        passedListener({
          matches: true
        });
      });
      expect(outputSpy).toHaveBeenCalledWith(true);
    });
  });
});
