import {Themes} from '../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  stepContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    textAlign: 'center',
    paddingBottom: 50,
    paddingHorizontal: boxes.boxPadding,
    paddingVertical: boxes.doublePadding,
  },
  imageContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors[theme].opaqueWhite,
    borderRadius: boxes.avatarRadius,
  },
  titleContainer: {
    width: '100%',
    flexShrink: 1,
    paddingBottom: 80,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  subtitle: {
    color: colors[theme].purple,
    textAlign: 'center',
    paddingTop: boxes.boxPadding,
    paddingRight: boxes.doublePadding,
    paddingLeft: boxes.doublePadding,
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h2,
  },
});

export default styles;
