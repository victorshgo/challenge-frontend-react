import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

/* Components */
import { Modal } from '.';

describe('Globals Components - Modal', () => {
  const handleClose = vi.fn();

  it('Should match snapshot', () => {
    const component = render(
      <Modal open={true} title='Lorem Ipsum' onClose={handleClose}>
        Render Modal
      </Modal>,
    );
    expect(component).toMatchSnapshot();
  });
});
