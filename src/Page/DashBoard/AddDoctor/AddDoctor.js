
import { Alert, Button, Input, TextField } from '@mui/material';
import React, { useState } from 'react';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState('');
    const [success,setSuccess]=useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
//https://cryptic-badlands-02135.herokuapp.com
        fetch('https://cryptic-badlands-02135.herokuapp.com/doctors', {
  method: 'POST',
  body: formData
})
.then(res => res.json())
.then(data => {
    if (data.insertedId) {
      setSuccess('doctor added successfully')
      console.log('doctor added successfully')
  };
})
.catch(error => {
  console.error('Error:', error);
});

   }
    return (
        <div>
           <h2>Add Doctor</h2> 
           <form onSubmit={handleSubmit} >
                <TextField
                    sx={{ width: '50%' }}
                    label="Name"
                    required
                    onChange={e=> setName(e.target.value)}
                    variant="standard" />
                <br />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    required
                    onChange={e=> setEmail(e.target.value)}
                    variant="standard" />
                <br />
                <br />
                <Input
                    accept="image/*"
                    type="file"
                    onChange={e=>setImage(e.target.files[0])}
                />
                <br />
                <br />
                <Button variant="contained"  type="submit">
                    Add Doctor
                </Button>
            </form>
            {
                success && <Alert severity="success">{success}!</Alert>
            }
        </div>
    );
};

export default AddDoctor;