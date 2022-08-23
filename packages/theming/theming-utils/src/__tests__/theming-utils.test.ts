import { getCurrentAppearance } from '../';

const fallBackAppearance = 'light';

beforeAll(() => {
  jest.mock('react-native/Libraries/Utilities/Appearance', () => ({
    getColorScheme: () => 'dark',
  }));
});

describe('getCurrentAppearance tests', () => {
  it('getCurrentAppearance undefined appearance', () => {
    const currentAppearance = getCurrentAppearance(undefined, fallBackAppearance);
    expect(currentAppearance).toBe(fallBackAppearance);
  });

  it('getCurrentAppearance appearance', () => {
    const currentAppearance = getCurrentAppearance('highContrast', fallBackAppearance);
    expect(currentAppearance).toBe('highContrast');
  });

  it('getCurrentAppearance dynamic appearance', () => {
    const currentAppearance = getCurrentAppearance('dynamic', fallBackAppearance);
    expect(currentAppearance).toBe('dark');
  });
});
