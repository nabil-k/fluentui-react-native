import { getCurrentAppearance } from '../';

test('Test getCurrentAppearance undefined behavior', () => {
  const fallBackAppearance = 'light';
  const currentAppearance = getCurrentAppearance(undefined, fallBackAppearance);
  expect(currentAppearance).toBe(fallBackAppearance);
});

test('Test getCurrentAppearance undefined behavior', () => {
  const fallBackAppearance = 'light';
  const currentAppearance = getCurrentAppearance(undefined, fallBackAppearance);
  expect(currentAppearance).toBe(fallBackAppearance);
});
