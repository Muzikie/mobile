import {Themes} from '../../context/presetsContext/types';
import {
  boxes,
  colors,
  fontFamilies,
  fontSizes,
} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
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
    width: 150,
    height: 150,
  },
  title: {
    color: colors[theme].purple,
    textAlign: 'center',
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
  buttonContainer: {
    width: 80,
    height: 80,
    backgroundColor: colors[theme].white,
    borderRadius: boxes.boxBorderRadius,
    paddingLeft: 15,
    paddingRight: 5,
    paddingTop: 15,
  },
});

export default styles;
