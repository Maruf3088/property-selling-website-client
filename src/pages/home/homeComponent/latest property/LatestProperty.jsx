import React from 'react';
import Title from '../../../../component/title/Title';
import LatestPropertyCard from './LatestPropertyCard';

const LatestProperty = () => {
    return (
        <div className="container mx-auto px-4 pb-10">

            {/* Title Section */}
            <Title 
                title="Latest Property"
                description="Elegant retreat in Coral Gables setting. This home provides entertaining spaces with kitchen opening"
            />

            {/* Cards Section */}
            <div className="
                grid 
                grid-cols-1 
                sm:grid-cols-2 
                lg:grid-cols-3 
                gap-6 
                mt-6
            ">
                <LatestPropertyCard />
                <LatestPropertyCard />
                <LatestPropertyCard />
            </div>
        </div>
    );
};

export default LatestProperty;
