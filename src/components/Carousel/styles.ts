import {Themes} from '../../context/presetsContext/types';
import {boxes, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  wrapper: {
    width: '100%',
    height: '100%',
  },
  contentWrapper: {
    flex: 1,
  },
  navigation: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 10,
    bottom: boxes.doublePadding,
    left: 0,
    paddingHorizontal: boxes.doublePadding,
  },
  animatedView: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    backgroundColor: colors[theme].fadeBeige,
    borderRadius: boxes.thumbnailRadius,
    width: 40,
    height: 40,
  },
  dotsWrapper: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  dot: {
    width: 14,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  dotActive: {
    height: 20,
    backgroundColor: colors[theme].purple,
  },
  dotInactive: {
    height: 14,
    backgroundColor: colors[theme].fadeBeige,
  },
});

export default styles;
