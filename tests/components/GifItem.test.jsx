import { screen, render } from '@testing-library/react';
import { GifItem } from '../../src/components/GifItem';

describe('Tests: <GifItem />', () => {
  const title = 'Vegeta';
  const url = 'https://dragon-ball.com/vegeta.jpg';

  test('should match snapshot', () => {
    const { container } = render( <GifItem title={ title } url={ url } /> );
    expect( container ).toMatchSnapshot();
  });

  test('should show image with correct URL and ALT props', () => {
    render( <GifItem title={ title } url={ url } /> );
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    const{ src, alt } = screen.getByRole('img');

    expect( src ).toBe( url );
    expect( alt ).toBe( title );
  });

  test('should show title in component', () => {
    render( <GifItem title={ title } url={ url } /> );
    expect( screen.getByText( title ) ).toBeTruthy();
  });

});
