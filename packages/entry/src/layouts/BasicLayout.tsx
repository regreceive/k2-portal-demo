import React from 'react';
import styles from './BasicLayout.less';

const BasicLayout: React.FC = (props) => {
  return <div className={styles.entryContainer}>{props.children}</div>;
};

export default BasicLayout;
