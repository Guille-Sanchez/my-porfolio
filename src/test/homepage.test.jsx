import { cleanup, render, screen } from '@testing-library/react'
import { afterEach, describe, it } from 'vitest'
import App from '../App'

describe('Homepage', () => {
  afterEach(() => cleanup())
  it('should render', () => {
    render(<App />)
  })

  it('should have 2 elements in primary nav', () => {
    render(<App />)
    screen.getByText('Projects')
  })

  it('should render title correctly', () => {
    render(<App />)

    screen.getAllByText('Welcome to my porfolio!')
  })
})
