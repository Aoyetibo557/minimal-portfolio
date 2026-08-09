import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Modal from './modal'

describe('Modal', () => {
  it('renders when open and calls toggle when the overlay is clicked', async () => {
    const toggle = jest.fn()
    const { container } = render(
      <Modal title="Hello" isOpen={true} toggle={toggle}>
        Body
      </Modal>
    )

    expect(screen.getByText('Hello')).toBeInTheDocument()
    expect(screen.getByText('Body')).toBeInTheDocument()

    const overlay = container.querySelector('.fixed')
    if (!overlay) throw new Error('Overlay not found')

    await userEvent.click(overlay)
    expect(toggle).toHaveBeenCalled()
  })

  it('renders nothing when closed', () => {
    const toggle = jest.fn()
    const { queryByText } = render(
      <Modal title="Hello" isOpen={false} toggle={toggle}>
        Body
      </Modal>
    )

    expect(queryByText('Hello')).not.toBeInTheDocument()
    expect(queryByText('Body')).not.toBeInTheDocument()
  })
})
