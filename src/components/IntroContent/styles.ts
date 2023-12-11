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
    backgroundColor: colors[theme].seeThroughWhite,
    borderRadius: boxes.avatarRadius,
    marginTop: boxes.boxPadding,
  },
  image: {
    width: '80%',
    height: '80%',
  },
  descriptionContainer: {
    width: '100%',
    flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    color: colors[theme].primaryStrong,
    textAlign: 'center',
    paddingHorizontal: boxes.boxPadding,
    fontFamily: fontFamilies.poppinsRegular,
    fontSize: fontSizes.h2,
  },
});

export default styles;
