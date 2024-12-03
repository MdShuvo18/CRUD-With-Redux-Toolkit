import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Home = () => {
    const users = useSelector(state => state.users);
    console.log(users);

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-4 text-center">
                CRUD Operation with Redux-Toolkit
            </h2>
            <button>
                <Link to='/create'
                    type="button"
                    className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded shadow-lg mb-6"
                >
                    Create +
                </Link>
            </button>
            <table className="table-auto w-full border-collapse border border-gray-300 shadow-lg rounded-md">
                <thead className="bg-gray-200 text-gray-700 font-semibold">
                    <tr>
                        <th className="border border-gray-300 px-4 py-2">ID</th>
                        <th className="border border-gray-300 px-4 py-2">Name</th>
                        <th className="border border-gray-300 px-4 py-2">Email</th>
                        <th className="border border-gray-300 px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => (
                            <tr key={index}>
                                <td className="border border-gray-300 px-4 py-2">{user.id}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.name}</td>
                                <td className="border border-gray-300 px-4 py-2">{user.email}</td>
                                <td className="border border-gray-300 px-4 py-2">
                                    <button>
                                        <Link to={`/update/${user.id}`} className="btn bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded shadow-lg">Update</Link>
                                    </button>
                                    <button>
                                        <Link to={`/delete/${user.id}`} className="ml-5 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded shadow-lg">Delete</Link>
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
};

export default Home;
