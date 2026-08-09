import { useContext } from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeContext, ThemeProvider } from './themeconstext'

function Consumer() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return <button onClick={toggleTheme}>{theme}</button>
}

describe('ThemeProvider', () => {
  it('toggles between light and dark', () => {
    render(
      <ThemeProvider>
        <Consumer />
      </ThemeProvider>
    )

    const button = screen.getByRole('button')

    expect(button).toHaveTextContent('light')
    fireEvent.click(button)
    expect(button).toHaveTextContent('dark')
    fireEvent.click(button)
    expect(button).toHaveTextContent('light')
  })
})
