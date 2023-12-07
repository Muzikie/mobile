import {Themes} from '../../context/presetsContext/types';
import {boxes, fonts, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  pageTitle: {
    ...fonts.h2,
    paddingTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
  profileScreen: {
    backgroundColor: colors[theme].beige,
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    flexWrap: 'nowrap',
    paddingTop: boxes.boxPadding,
  },
  label: {
    paddingTop: boxes.elementPadding,
    color: colors[theme].grey,
  },
  name: {
    fontFamily: fonts.body,
  },
  username: {
    width: 230,
    letterSpacing: 0.5,
    textAlign: 'center',
  },
});

export default styles;
