import React from 'react';

const CollapsedItem = ({name, content, productName}) => {
    return (
        <div className={"flex justify-between"}>
            <p>{name}</p>
            <p>{productName}</p>
            <p style={{width: '50%'}}>{content}</p>
        </div>
    );
};
export default CollapsedItem;