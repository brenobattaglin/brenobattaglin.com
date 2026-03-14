import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { useIntersectionObserver } from './useIntersectionObserver';

describe('useIntersectionObserver', () => {
  it('should return isVisible as true when intersecting and cleanup correctly', () => {
    let callback: (entries: any[]) => void = () => {};
    const unobserve = vi.fn();
    const observe = vi.fn();

    // Mock IntersectionObserver as a class
    class MockObserver {
      observe = observe;
      unobserve = unobserve;
      disconnect = vi.fn();
      constructor(cb: (entries: any[]) => void) {
        callback = cb;
      }
    }

    vi.stubGlobal('IntersectionObserver', MockObserver);

    const { result, unmount, rerender } = renderHook(
      ({ options }) => useIntersectionObserver(options),
      {
        initialProps: { options: { threshold: 0.1 } },
      },
    );

    // Create a dummy element and assign it to the ref
    const div = document.createElement('div');
    // @ts-ignore
    result.current.elementRef.current = div;

    // Rerender to trigger effect with the now-populated ref
    rerender({ options: { threshold: 0.2 } });

    expect(observe).toHaveBeenCalledWith(div);

    // Initially isVisible should be false
    expect(result.current.isVisible).toBe(false);

    // Simulate intersection
    act(() => {
      callback([{ isIntersecting: true }]);
    });

    expect(result.current.isVisible).toBe(true);
    // Should unobserve once visible
    expect(unobserve).toHaveBeenCalledWith(div);

    // Test non-intersecting
    const { result: result2 } = renderHook(() => useIntersectionObserver());
    act(() => {
      callback([{ isIntersecting: false }]);
    });
    expect(result2.current.isVisible).toBe(false);

    // Unmount to test cleanup
    unmount();
    // Should unobserve on unmount
    expect(unobserve).toHaveBeenCalled();
  });
});
