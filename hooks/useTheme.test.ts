import { renderHook, act } from '@testing-library/react';
import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useTheme } from './useTheme';

describe('useTheme', () => {
  const localStorageMock = (() => {
    let store: Record<string, string> = {};
    return {
      getItem: (key: string) => store[key] || null,
      setItem: (key: string, value: string) => {
        store[key] = value.toString();
      },
      clear: () => {
        store = {};
      },
      removeItem: (key: string) => {
        delete store[key];
      },
    };
  })();

  Object.defineProperty(window, 'localStorage', {
    value: localStorageMock,
  });

  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
    // Ensure document.documentElement classes are cleared
    document.documentElement.classList.remove('light', 'dark');
  });

  it('should default to dark theme', () => {
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('dark');
  });

  it('should toggle theme from dark to light', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(result.current.theme).toBe('light');
  });

  it('should persist theme to localStorage', () => {
    const setItemSpy = vi.spyOn(localStorage, 'setItem');
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme();
    });
    expect(setItemSpy).toHaveBeenCalledWith('theme-preference', 'light');
  });

  it('should initialize theme from localStorage', () => {
    localStorage.setItem('theme-preference', 'light');
    const { result } = renderHook(() => useTheme());
    expect(result.current.theme).toBe('light');
  });

  it('should toggle theme from light back to dark', () => {
    const { result } = renderHook(() => useTheme());
    act(() => {
      result.current.toggleTheme(); // dark to light
      result.current.toggleTheme(); // light to dark
    });
    expect(result.current.theme).toBe('dark');
  });

  it('should apply theme class to document.documentElement', () => {
    const { result } = renderHook(() => useTheme());
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    act(() => {
      result.current.toggleTheme();
    });
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
