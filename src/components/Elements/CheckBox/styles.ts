import {Themes} from '../../../context/presetsContext/types';
import {boxes, colors} from '../../../config/stylesGuides';

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
  title: {
    fontWeight: 500,
    height: 40,
    lineHeight: 40,
  },
  box: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: boxes.thumbnailRadius,
    borderColor: colors[theme].paleGrey,
    borderWidth: 8,
  },
  selected: {
    backgroundColor: colors[theme].fadeSuccess,
    borderColor: colors[theme].fadeSuccess,
  },
});

export default styles;
