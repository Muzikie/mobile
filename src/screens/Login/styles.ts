import {Themes} from '../../context/presetsContext/types';
import {boxes, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  screenContainer: {
    height: '100%',
    width: '100%',
  },
  loginScreen: {
    backgroundColor: colors[theme].beige,
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logos: {
    width: 180,
    paddingBottom: boxes.boxPadding * 3,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  muzikieLogoWrapper: {
    flex: 1,
  },
  muzikieLogo: {
    width: 68,
    height: 72,
  },
  otherLogos: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
  },
  appleMusicLogo: {
    width: 47,
    height: 47,
    marginBottom: boxes.boxPadding,
  },
  spotifyLogo: {
    width: 43,
    height: 43,
  },
  info: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    paddingTop: boxes.boxPadding * 2,
    paddingBottom: boxes.boxPadding * 2,
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'nowrap',
    justifyContent: 'space-between',
    alignItems: 'space-between',
    width: '100%',
    height: 140,
    paddingRight: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
  },
});

export default styles;
