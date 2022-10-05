import React from 'react'
import { useEffect, useState } from 'react'
import "./Popup.css"
import axios from 'axios'

function Popup({ pop, setPop }) {
    const [start, setStart] = useState('');
    const [end, setEnd] = useState('');
    const [date,setDate] = useState('');
    const [time , setTime] = useState('')
    const [dur,setDur] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [totusers,setTotUsers] = useState([]);
    const [users,setUsers] = useState([])

    const clearInputs = () => {
        setStart('');
        setEnd('');

    }

    const Submit = () => {
        const dateObj = new Date(date);
        dateObj.setHours(0,0,0,0);
        const hours = parseInt(time.split(":")[0]);
        const minutes = parseInt(time.split(":")[1]);
        let startTime = new Date(date);
        startTime.setHours(0,0,0,0);
        startTime.setTime(startTime.getTime() + (hours * 60 + minutes) * 60 * 1000);
        let endTime = new Date(date);
        endTime.setHours(0,0,0,0);
        endTime.setTime(startTime.getTime() + dur * 60 * 1000);

        const req = {
            start_time:startTime,
            end_time:endTime,
            users
        }

        axios.post("http://localhost:8080/createinterview",req).then((res)=>{
            console.log(res.data)
            if(res.data.success) alert(res.data.message)
            else alert(res.data.error)
        })

    }

    const clearMsg = () => {
        setMessage('');
        setError('');
    }


    useEffect(()=>{
        axios.get("http://localhost:8080/getuser").then((res)=>{
            setTotUsers(res.data.users)
        })
    })
    const onCheckboxChange = (e) =>{
        if(e.target.checked){
            setUsers([...users,e.target.value])
        }
    }





    return (pop) ? (
        <div className="popup">
            <div className="input-container">
                <h1>Add Interview</h1>
                <input
                    type="date"
                    placeholder="Start Date and Time"
                    autoFocus
                    required
                    value={date}
                    onChange={(e) => { clearMsg(); setDate(e.target.value) }}
                />
                <input
                    type="time"
                    placeholder="End Date and Time"
                    autoFocus
                    required
                    value={time}
                    onChange={(e) => { clearMsg(); setTime(e.target.value) }}
                />
                 <input
                    type="number"
                    placeholder="Duration"
                    autoFocus
                    required
                    value={dur}
                    onChange={(e) => { clearMsg(); setDur(e.target.value) }}
                />
                    {
                        totusers && totusers.map(user=>
                            (
                        <div className='check'>
                            <input
                                type="checkbox"
                                autoFocus
                                required
                                onChange={(e)=>onCheckboxChange(e)}
                            />
                            <p>{user.email}</p>
                        </div>
                    ))
                    }

                <button onClick={() => {
                    setPop(false);
                    Submit();
                }}>Add</button>
                <button onClick={() => {
                    setPop(false);
                }}>Cancel</button>
                <p className="Msg">{message}</p>
                <p className="Error">{error}</p>

            </div>

        </div>
    ) : "";
}

export default Popup