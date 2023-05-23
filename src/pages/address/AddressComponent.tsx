import React, { useEffect, useState } from 'react'
import './addresscomponent.scss'
import { Button, Card, CardActions, CardContent, TextField, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const AddressComponent = () => {
    const [address, setaddress] = useState({
        city: '',
        state: '',
        pin: ''
    })
    const [addressArray, setaddressArray] = useState<any>([])
    const [trigger, settrigger] = useState<any>(false)
    const navigate = useNavigate()

    useEffect(() => {

        let savedArray = localStorage.getItem('addressArray')
        setaddressArray(savedArray ? JSON.parse(savedArray) : []);
    }, [trigger])
    const handleChange = (e: any) => {
        setaddress({
            ...address,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = () => {
        if (address.city != '' && address.state != '' && address.pin != '') {
            setaddressArray((prevArray: any) => [...prevArray, address])


        }

        setaddress({
            city: '',
            state: '',
            pin: ''
        })

    }
    const handleDeleteAddress = (ele: any) => {

        const indexToDelete = addressArray.findIndex((item: any) => item.pin === ele.pin);

        if (indexToDelete != -1) {

            addressArray.splice(indexToDelete, 1);
            localStorage.setItem('addressArray', JSON.stringify(addressArray));
            settrigger(!trigger)
        }

    }
    const handleProceed = () => {
        localStorage.setItem('addressArray', JSON.stringify(addressArray))
        navigate('/ordersuccess')
    }
    return (
        <div className='rootAddresscontainer'>
            <div className="address-container">
                {
                    addressArray.length ? addressArray.map((address: any) => {
                        return (<Card sx={{ minWidth: 275 }} className='address-card' key={address.pin}>
                            <CardContent>
                                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                    {address.state}
                                </Typography>

                                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                    {address.city}
                                </Typography>
                                <Typography variant="body2">
                                    {address.pin}

                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color='success' onClick={() => { handleProceed() }}>Proceed</Button>
                                <Button size="small" color='warning' onClick={() => { handleDeleteAddress(address) }}>Delete</Button>
                            </CardActions>
                        </Card>)
                    }) : <></>
                }
                <div className="address-form">
                    <TextField className='form-input'
                        id="outlined-controlled"
                        label="City"
                        value={address.city}
                        name='city'
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleChange(event)
                        }}
                    />
                    <TextField className='form-input'
                        id="outlined-controlled"
                        label="state"
                        name='state'
                        value={address.state}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleChange(event)
                        }}
                    />
                    <TextField className='form-input'
                        id="outlined-controlled"
                        label="pin"
                        name='pin'
                        value={address.pin}
                        onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                            handleChange(event)
                        }}
                    />
                    <Button size="small" style={{ marginTop: '5px' }} color='success' onClick={handleSubmit}>Save Address</Button>
                </div>
            </div>

        </div>
    )
}

export default AddressComponent
