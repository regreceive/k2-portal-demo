import { FC } from 'react';
import { portal, Widget } from 'k2-portal';

const Portal: FC = () => {  
  return (
    <Widget
      src="/entry"
      style={{ height: '100%' }}
    />
  );
};

export default Portal;
