import { render } from '@testing-library/vue';
import { composeStories } from '@storybook/testing-vue3';
import * as Stories from './Button.stories';

const { Primary/*, Secondary, Tertiary */ } = composeStories(Stories)

describe( 'Basic Functionality', () => {
  test('Run the tests in the `.stories` file ', async () => {
    const { container } = render(Primary());
    await Stories.Primary.play?.({ canvasElement: container });
    // repeat for each story
  });
  // if you need to leave a note to remind you of something when the tests run:
  test.todo('boom')
})

