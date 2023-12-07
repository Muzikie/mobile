import {boxes} from '../../config/stylesGuides';

const styles = () => ({
  container: {
    width: '100%',
    height: boxes.badgeSize,
    marginTop: boxes.boxPadding,
    paddingLeft: boxes.boxPadding,
    paddingRight: boxes.boxPadding,
  },
  row: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
  },
  badge: {
    marginRight: boxes.boxPadding,
  },
  info: {
    flex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  title: {
    width: '100%',
  },
  count: {
    width: '100%',
  },
});

export default styles;
