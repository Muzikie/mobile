import React from 'react';
import {useTheme} from '../../../hooks/useTheme';
import SectionHeader from '../../SectionHeader';
import themedStyles from './styles';

const HomeHeader = () => {
  const styles = useTheme(themedStyles);
  return (
    <SectionHeader title="Songs of the day" style={styles.sectionHeader} />
  );
};

export default HomeHeader;
