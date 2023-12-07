import {Themes} from '../../context/presetsContext/types';
import {boxes, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  container: {
    width: '100%',
    marginTop: boxes.boxPadding * 2,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    backgroundColor: colors[theme].fadeBeige,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    borderWidth: 1,
    borderColor: colors[theme].fadeBeige,
    paddingBottom: boxes.boxPadding,
    borderRadius: boxes.thumbnailRadius,
  },
  info: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors[theme].fadeBeige,
    height: 85 + boxes.boxPadding,
  },
  awardDate: {
    paddingTop: boxes.boxPadding / 3,
    paddingBottom: 0,
  },
  action: {
    width: 120,
    height: 85,
  },
  grey: {
    color: colors[theme].grey,
  },
  badge: {
    marginTop: -1 * boxes.boxPadding,
    marginBottom: boxes.boxPadding / 2,
  },
  title: {
    fontWeight: 500,
  },
  claim: {
    padding: 0,
  },
  prizeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    paddingTop: boxes.boxPadding,
    justifyContent: 'flex-end',
  },
  prizeTitle: {
    paddingRight: 5,
  },
  buttonWrapper: {
    width: 120,
    paddingLeft: 40,
  },
});

export default styles;
