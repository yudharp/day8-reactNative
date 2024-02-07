const deleteUser = async (userId) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/users/${userId}`, {
            method: 'DELETE'
        });

        if (response.ok) {
            console.log('User Deleted Successfully');
        } else {
            console.log('Failed to delete user');
        }
    } catch (error) {
        console.error('Error deleting user:', error);
    }
};