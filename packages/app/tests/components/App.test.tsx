import { render, screen } from '@testing-library/react'
import { expect } from 'chai'
import { App } from '../../src/components/App'


describe('<App />', () => {
	it('should have h1 element with correct inner text', () => {
		render(<App />)

		const actual = screen.getByDisplayValue('Here goes the sun.').tagName
		const expected = 'h1'

		expect(actual).to.be(expected)
	})
})
