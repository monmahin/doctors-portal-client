import { Alert, Button, TextField } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../Hooks/useAuth';

const MakeAdmin = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const { token } = useAuth();
  const handleOnBlur = e => {
    setEmail(e.target.value);
}
  const handleAdminSubmit = e => {
    const user = { email };
    fetch('https://cryptic-badlands-02135.herokuapp.com/users/admin', {
        method: 'PUT',
        headers: {
          'authorization':`Bearer ${token}`,
            'content-type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount) {
              // console.log(data);
              setEmail('');
              setSuccess(true);
            }
        })

    e.preventDefault()
}
    return (
        <div>
        <h2>Add admin</h2>
        <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button sx={{float:'right'}} type="submit" variant="contained">Make Admin</Button>
        </form>
        {success && <Alert sx={{mt:2}}
          severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;