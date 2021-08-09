import React from 'react';
import DATA from './data';

import CollectionPreview from '../../components/CollectionPreview/CollectionPreview';

class Shop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: DATA
  }
  }
  render() {
    const { collections } = this.state
    return (
      <div className>
        {collections.map(({ id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
      );
  }
}

export default Shop;