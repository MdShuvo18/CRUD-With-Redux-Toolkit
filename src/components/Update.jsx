import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateuser } from '../Reducer/userSlice';

const Update = () => {
    const { id } = useParams();
    const users = useSelector(state => state.users);
    const newUser = users.find(u => u.id == id);
    const { name, email } = newUser;
    const [uname, setName] = useState(name)
    const [uemail, setEmail] = useState(email)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateuser({
            id: id,
            name: uname,
            email: uemail,
        }))
        navigate('/')
    }
    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Update User</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-md max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={uname}
                        onChange={e => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter updated name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={uemail}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter updated email"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg w-full"
                >
                    Update
                </button>
            </form>
        </div>
    );
};

export default Update;