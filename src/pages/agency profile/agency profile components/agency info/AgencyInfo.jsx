import React from "react";


const AgencyInfo = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-8 items-start gap-2">
        {/* Agency listing */}
        <div className="lg:col-span-6">
          <div className="flex w-full bg-white rounded-lg p-3">
            <div className="w-1/2">
              <img src="" alt="" />
            </div>
            <div className="w-1/2"></div>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="hidden lg:block lg:col-span-2"></aside>
      </div>
    </div>
  );
};

export default AgencyInfo;
