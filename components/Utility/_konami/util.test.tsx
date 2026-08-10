import { renderHook, act } from '@testing-library/react'
import useKonamiCode from './util'

const KONAMI = [
  'ArrowUp',
  'ArrowUp',
  'ArrowDown',
  'ArrowDown',
  'ArrowLeft',
  'ArrowRight',
  'ArrowLeft',
  'ArrowRight',
  'Enter',
]

describe('useKonamiCode', () => {
  afterEach(() => {
    jest.useRealTimers()
  })

  it('calls the callback when the konami code is entered', () => {
    const callback = jest.fn()
    jest.useFakeTimers()

    renderHook(() => useKonamiCode(callback, 0))

    act(() => {
      KONAMI.forEach((key) => {
        window.dispatchEvent(new KeyboardEvent('keydown', { key }))
      })
    })

    act(() => {
      jest.runAllTimers()
    })

    expect(callback).toHaveBeenCalled()
  })

  it('does not call the callback for an incorrect sequence', () => {
    const callback = jest.fn()
    renderHook(() => useKonamiCode(callback, 0))

    act(() => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'b' }))
    })

    expect(callback).not.toHaveBeenCalled()
  })
})
