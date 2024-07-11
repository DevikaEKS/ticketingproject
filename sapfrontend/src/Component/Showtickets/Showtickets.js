// import React, { useEffect, useState } from 'react'
// import { useParams, Link } from 'react-router-dom'
// import axios from 'axios'

// function TicketsCount() {

//     const { id } = useParams()
//     const decodedId = atob(id)
//     console.log(decodedId);

//     const [tickets, setTickets] = useState([])

//     useEffect(() => {
//         axios.get(`http://localhost:5000/api/tickets/count/${decodedId}`)
//             .then(res => {
//                 console.log(res.data);
//                 setTickets(res.data)
//             })
//     }, [])
//     return (
//         <div className='container-fluid'>
//             <table className='dynamictable'>
//                 <thead>
//                     <th>Company Name</th>
//                     <th>Total Number of Tickets</th>
//                 </thead>
//                 <tbody>
//                 {
//                 tickets.map(e => (
//                     <Link to={`/manger/showtickets/${id}`} className='card text-decoration-none d-flex justify-content-around'>
//                         <tr>
//                             <td>{e.company_name}</td>
//                             <td>{e.ticket_count}</td>
//                         </tr>
                        
//                     </Link>
//                 ))
//             }
//                 </tbody>
           
//             </table>
           
//         </div>
//     )
// }

// export default TicketsCount





import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import "./Showtickets.css";

function TicketsCount() {
    const { id } = useParams();
    const decodedId = atob(id);

    const [tickets, setTickets] = useState([]);

    useEffect(() => {
        axios.get(`http://192.168.253.177:5002/api/tickets/count/${decodedId}`)
            .then(res => {
                console.log(res.data)
                setTickets(res.data);
            })
            .catch(error => {
                console.error('Error fetching tickets:', error);
            });
    }, [decodedId]);

    return (
        <div className='container-fluid cardtables text-dark text-center'>
            <div className='d-flex flex-column justify-content-center align-items-center'>
            <table className='tickettable mt-5'>
                <thead>
                    <tr className='headrow'>
                        <th className='p-3'>Company Name</th>
                        <th className='p-3'>Total Number of Tickets</th>
                    </tr>  
                </thead>
                
                <tbody>
                    {tickets.map(ticket => (
                        <tr key={ticket.company_name}>
                            <td className='p-3'>
                                <Link to={`/manager/showtickets/${id}`} className='text-decoration-none font-weight-bold'>
                                    {ticket.company_name}
                                </Link>
                            </td>
                            <td className='p-3'>{ticket.ticket_count}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </div>
    );
}

export default TicketsCount;
