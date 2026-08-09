import { truncateString } from './utils'

describe('truncateString', () => {
  it('does not truncate when string is shorter than max', () => {
    expect(truncateString('hello', 20)).toBe('hello')
  })

  it('truncates and adds ellipsis when string is longer than max', () => {
    const input = 'a'.repeat(30)
    expect(truncateString(input, 20)).toBe('a'.repeat(19) + '...')
  })

  it('uses default max length of 20', () => {
    const input = 'a'.repeat(25)
    expect(truncateString(input)).toBe('a'.repeat(19) + '...')
  })

  it('returns short string unchanged at exact max length', () => {
    const input = 'a'.repeat(20)
    expect(truncateString(input, 20)).toBe(input)
  })

  it('returns empty string for empty input', () => {
    expect(truncateString('', 20)).toBe('')
  })
})
