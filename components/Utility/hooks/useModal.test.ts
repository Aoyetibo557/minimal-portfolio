import { renderHook, act } from '@testing-library/react'
import { useModal } from './useModal'

describe('useModal', () => {
  it('starts closed and toggles open/closed', () => {
    const { result } = renderHook(() => useModal())

    expect(result.current.isOpen).toBe(false)

    act(() => result.current.toggle())
    expect(result.current.isOpen).toBe(true)

    act(() => result.current.toggle())
    expect(result.current.isOpen).toBe(false)
  })
})
