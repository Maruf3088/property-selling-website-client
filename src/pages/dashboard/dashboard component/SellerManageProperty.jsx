import React, { useContext, useState } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { usePropertyByEmail } from "../../../hooks/usePropertyByEmail";

const ITEMS_PER_PAGE = 5;

const SellerManageProperty = () => {
  const { user } = useContext(AuthContext);
  const email = user?.email;
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: properties = [],
    isLoading,
    isError,
  } = usePropertyByEmail(email, { enabled: !!email });

  const totalPages = Math.ceil(properties.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentData = properties.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handleUpdate = (id) => {
    console.log("Update:", id);
  };

  const handleDelete = (id) => {
    console.log("Delete:", id);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center mt-10">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <p className="text-center text-error mt-10">
        Failed to load properties
      </p>
    );
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">
        My Properties ({properties.length})
      </h2>

      <div className="overflow-x-auto rounded-lg shadow">
        <table className="table table-zebra">
          <thead className="bg-base-200">
            <tr>
              <th>SL</th>
              <th>Property Name</th>
              <th>Type</th>
              <th>Location</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {currentData.map((property, index) => (
              <tr key={property._id}>
                <td>{startIndex + index + 1}</td>
                <td className="font-medium">{property.propertyName}
                </td>
                <td>
                  <span className="badge badge-info badge-outline">
                    {property.propertyType}
                  </span>
                </td>
                <td>
                  {property.location?.city},{" "}
                  {property.location?.area}
                </td>
                <td className="font-semibold">
                  $ {property.price}
                </td>
                <td>
                  <div className="flex gap-2 justify-center">
                      <button
                      className="btn btn-xs btn-success"
                      onClick={() => handleDelete(property._id)}
                    >
                      Details
                    </button>
                    <button
                      className="btn btn-xs btn-warning"
                      onClick={() => handleUpdate(property._id)}
                    >
                      Update
                    </button>
                    <button
                      className="btn btn-xs btn-error"
                      onClick={() => handleDelete(property._id)}
                    >
                      Delete
                    </button>
                  
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6">
        <div className="join">
          <button
            className="join-item btn btn-sm"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage(currentPage - 1)}
          >
            «
          </button>

          {[...Array(totalPages).keys()].map((page) => (
            <button
              key={page}
              className={`join-item btn btn-sm ${
                currentPage === page + 1 ? "btn-active" : ""
              }`}
              onClick={() => setCurrentPage(page + 1)}
            >
              {page + 1}
            </button>
          ))}

          <button
            className="join-item btn btn-sm"
            disabled={currentPage === totalPages}
            onClick={() => setCurrentPage(currentPage + 1)}
          >
            »
          </button>
        </div>
      </div>
    </div>
  );
};

export default SellerManageProperty;
