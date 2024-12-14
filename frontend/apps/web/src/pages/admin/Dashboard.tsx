import React, { useEffect, useState } from 'react';

interface User {
  _id: string;
  username: string;
  email: string;
  level: string;
  isAdmin: boolean;
  stripeSessionId: string;
  // Add other properties based on your user model
}

const Dashboard = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/auth/user/allUsers'); // Update with your actual backend API endpoint
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        
        const data = await response.json();
        console.log(data)

        setUsers(data); // Store the fetched users in state
      } catch (error) {
        setError('Error fetching users data');
        console.error('Error fetching users:', error);
      }
    };
  
    fetchUsers();
  }, []); // Run this once when the component mounts

  return (
    <div>
      <div className='flex text-bold text-2xl my-5 justify-center'>User Manage Page</div>
      {error && <p>{error}</p>}

      <table className='w-[90%] bg-white  mx-auto border'>
        <thead>
          <tr className='bg-gray-200'>
            <th className='border px-4 py-2'>No</th>
            <th className='border px-4 py-2'>Username</th>
            <th className='border px-4 py-2'>Email</th>
            <th className='border px-4 py-2'>Level</th>
            <th className='border px-4 py-2'>Admin</th>
            <th className='border px-4 py-2'>stripeSessionId</th>
            
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td className='border px-4 py-2'>{index + 1}</td>
              <td className='border px-4 py-2'>{user.username}</td>
              <td className='border px-4 py-2'>{user.email}</td>
              <td className='border px-4 py-2'>{user.level}</td>
              <td className='border px-4 py-2'>{user.isAdmin ? 'Yes' : 'No'}</td>
              <td className='border px-4 py-2'>{user.stripeSessionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
