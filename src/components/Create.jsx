import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../Reducer/userSlice';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const users = useSelector(state => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("click submit");
        const newId = users[users.length - 1].id + 1;
        dispatch(addUser({ id: newId, name, email }));
        navigate('/')
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-2xl font-bold text-center mb-4">Create New User</h1>
            <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-md max-w-md mx-auto">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your name"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Enter your email"
                        required
                    />
                </div>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md shadow-lg w-full"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default Create;
