import {Themes} from '../../context/presetsContext/types';
import {boxes, colors} from '../../config/stylesGuides';

const styles = (theme: Themes) => ({
  container: {
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
  },
  rowNoWrap: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignItems: 'center',
  },
  titleWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
  },
  title: {
    fontWeight: 500,
  },
  state: {
    textAlign: 'right',
    paddingRight: boxes.elementPadding,
    color: colors[theme].darkGrey,
  },
  iconWrapper: {
    backgroundColor: colors[theme].paleGrey,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: boxes.thumbnailRadius,
  },
  icon: {},
});

export default styles;
