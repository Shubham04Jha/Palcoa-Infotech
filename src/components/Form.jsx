import { Spinner } from "flowbite-react";
import React, { useEffect, useState } from 'react';
import useAddData from '../hooks/useAddData';
import { useSelector } from 'react-redux';
import useGetPublicKey from "../hooks/useGetPublicKey";

function Form() {
    const { handleSubmit } = useAddData();
    const { handleGetPublicKey } = useGetPublicKey();
    const { loading } = useSelector((state) => state.user);

    const [formData, setFormData] = useState({
        productName: "",
        price: "",
        description: "",
        category: "",
        stock: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        await handleSubmit(formData); 
        setFormData({
            productName: "",
            price: "",
            description: "",
            category: "",
            stock: "",
        });
    };

    useEffect(() => {
        if (!sessionStorage.getItem('public_key')) {
          handleGetPublicKey();
        }
    }, []);

    return (
        <div className="max-w-lg mx-auto p-4">
            <form className="space-y-4" onSubmit={onSubmit}>
                <div className="mb-5">
                    <label htmlFor="productName" className="block mb-2 text-sm font-medium ">Enter Product Name</label>
                    <input
                        id="productName"
                        type="text"
                        value={formData.productName}
                        onChange={handleChange}
                        className="text-black shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Product Name"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="price" className="block mb-2 text-sm font-medium ">Enter Product Price</label>
                    <input
                        id="price"
                        type="number"
                        value={formData.price}
                        onChange={handleChange}
                        className="text-black shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Price"
                        required
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="description" className="block mb-2 text-sm font-medium ">Enter Product Description</label>
                    <textarea
                        id="description"
                        value={formData.description}
                        onChange={handleChange}
                        className="text-black shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Description"
                        rows="4"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="category" className="block mb-2 text-sm font-medium ">Enter Product Category</label>
                    <input
                        id="category"
                        type="text"
                        value={formData.category}
                        onChange={handleChange}
                        className="text-black shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Category"
                    />
                </div>
                <div className="mb-5">
                    <label htmlFor="stock" className="block mb-2 text-sm font-medium ">Enter Product Stock</label>
                    <input
                        id="stock"
                        type="number"
                        value={formData.stock}
                        onChange={handleChange}
                        className="text-black shadow-sm bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                        placeholder="Stock"
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 border border-blue-500 rounded w-full flex items-center justify-center"
                    disabled={loading}
                >
                    {loading ? (
                        <div className="flex items-center">
                            <Spinner aria-label="Loading spinner" />
                            <span className="pl-3">Loading...</span>
                        </div>
                    ) : (
                        "Add Product"
                    )}
                </button>
            </form>
        </div>
    );
}

export default Form;
