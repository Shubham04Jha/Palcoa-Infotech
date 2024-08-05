import React from 'react';
import { useLiveQuery } from 'dexie-react-hooks';
import { db } from '../database/dexie';

function TransactionList() {
    const products = useLiveQuery(() => db.products.toArray(), []);

    if (!products) {
        return <div>Loading...</div>;
    }

    return (
        <ul className=" shadow overflow-hidden sm:rounded-md max-w-5xl mx-auto mt-16 ">
            {products.length > 0 ? (
                products.map((product) => (
                    <li key={product.id} className="border-t border-gray-200 bg-white my-8 sm:rounded-md">
                        <div className="px-4 py-5 sm:px-6">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg leading-6 font-medium text-gray-900">{product.productName}</h3>
                                <p className="mt-1 max-w-2xl text-sm text-gray-500">{product.description}</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-500">Price: ${product.price}</p>
                                <p className="text-sm font-medium text-gray-500">Category: {product.category}</p>
                                <p className="text-sm font-medium text-gray-500">Stock: {product.stock}</p>
                                <p className="text-sm font-medium text-gray-500">Status: <span className={getStatusClass(product.failed)}>{getStatusText(product.failed)}</span></p>
                            </div>
                        </div>
                    </li>
                ))
            ) : (
                <li className="px-4 py-5 sm:px-6">No products available</li>
            )}
        </ul>
    );
}


const getStatusText = (failed) => {
    return failed ? 'Failed' : 'Remaining';
};

const getStatusClass = (failed) => {
    return failed ? 'text-red-600' : 'text-green-600';
};

export default TransactionList;
