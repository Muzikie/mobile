import {Themes} from '../../context/presetsContext/types';
import {colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  splashContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors[theme].beige,
  },
  splashImageContainer: {
    height: 75,
    width: 262,
  },
  splashLogo: {
    height: '100%',
    width: '100%',
  },
});

export default styles;
