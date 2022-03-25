import { render } from '@testing-library/vue';
import * as Stories from './Button.stories';

const { Primary } = Stories

/**
 * @jest-environment jsdom
 */

test('test the story ', async () => {
  const { container } = render(Primary());
  await Stories.Primary.play?.({ canvasElement: container });
});
