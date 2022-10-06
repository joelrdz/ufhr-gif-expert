import { render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests: <GifItem />', () => {
  const title = 'Vegeta';
  const url = 'https://dragon-ball.com/vegeta.jpg';

  test('should match snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url } /> );
    expect( container ).toMatchSnapshot();
  });
});
