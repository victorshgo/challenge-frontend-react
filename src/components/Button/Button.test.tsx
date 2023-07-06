import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import { act } from 'react-dom/test-utils';

/* Components */
import { Button } from './';

describe('Globals Components - Button', () => {
  const handleClick = vi.fn();

  it('Should match snapshot', () => {
    const component = render(<Button>Render Button</Button>);
    expect(component).toMatchSnapshot();
  });

  it('Should be able to see the button name on screen', () => {
    const { getByText } = render(<Button>Render Button</Button>);
    expect(getByText('Render Button')).toBeInTheDocument();
  });

  it('Should be able to click button on screen', () => {
    const { getByText } = render(<Button onClick={handleClick}>Render Button</Button>);

    act(() => {
      const components = getByText('Render Button');
      fireEvent.click(components);
    });

    expect(handleClick).toBeCalled();
  });
});
