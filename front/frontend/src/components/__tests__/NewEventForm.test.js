import { fireEvent,render, screen  } from '@testing-library/react';
import NewEventForm from '../NewEventForm';



test('evant name maxlength', () => {
    const eventForm = render(<NewEventForm />)
    const input = eventForm.getByTestId('event-1')
    
    fireEvent.input(input, { target: { value: 'jeu de quille' }})
    expect(input.value).toBe('jeu de quille')
    expect(input.maxLength).toBe(32)
})