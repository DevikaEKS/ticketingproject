// //               <div className='d-flex justify-content-center'>
// //                 <div className='mx-5'>
// //                   <label htmlFor="actual-btn" className={`btn btn-primary p-2 ${errors.attachment ? 'is-invalid' : ''}`}>Attach files</label>
// //                   <input
// //                     className="btn btn-warning text-dark form-control"
// //                     id="actual-btn"
// //                     type="file"
// //                     accept=".jpg,.jpeg"
// //                     hidden
// //                     onChange={handleFileChange}
// //                   />
// //                   {errors.attachment && <div className="invalid-feedback">Please attach a file.</div>}
// //                   {fileName && <div className="file-name">{fileName}</div>}
// //                 </div>
// //                 <div className="mx-5">
// //                   <input type="submit" className="btn btn-primary" value="Create Ticket" />
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default TicketBooking;

// // /lastmodified

// // import React, { useEffect, useState } from 'react';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import './Ticketbooking.css';
// // import axios from 'axios';
// // import { useParams } from 'react-router-dom';

// // function TicketBooking() {
// //   const [subject, setSubject] = useState('');
// //   const [project, setProject] = useState('');

// //   const [ticketBody, setTicketBody] = useState('');
// //   const [attachment, setAttachment] = useState(null);
// //   const [priority,setPriority]=useState('');
// //   const [errors, setErrors] = useState({ subject: false, project: false, ticketBody: false, attachment: false });
// //   const [fileName, setFileName] = useState('');

// //   const { id, com, cshort } = useParams();
// //   const client_id = atob(id);
// //   const company_name = atob(com);
// //   const company_short_name = atob(cshort);

// //   useEffect(() => {
// //     axios
// //       .get(`http://192.168.252.177:5002/api/serve/${client_id}/services`)
// //       .then((res) => {
// //         const allSubdivisions = res.data.flatMap(
// //           (service) => service.subdivisions
// //         );
// //         setProject(allSubdivisions);
// //       });
// //   }, [client_id]);

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     const newErrors = {
// //       subject: subject === '',
// //       project: project === '',
// //       ticketBody: ticketBody === '',
// //       attachment: attachment === null,
// //     };

// //     setErrors(newErrors);

// //     if (Object.values(newErrors).some(error => error)) {
// //       return;
// //     }

// //     console.log(subject,project,ticketBody,client_id,priority,attachment);
// //     alert("success")

// //     try {
// //       const response = await axios.post(
// //         `http://192.168.252.177:5002/api/tickets/create/${company_name}/${company_short_name}`, {subject,ticket_body:ticketBody,client_id,subdivision_id:project},
// //         {
// //           headers: {
// //             "Content-Type": "multipart/form-data",
// //           },
// //           withCredentials: true,
// //         }
// //       );
// //       console.log("Ticket created successfully:", response.data);
// //       if (response.data.message === "Ticket created successfully and emails sent.") {
// //         alert("Ticket Created Successfully. Check your mail");
// //       } else if (response.data === "Ticket created, but failed to send email to account manager") {
// //         alert("Ticket created, but failed to send email to account manager");
// //       } else if (response.data === "Ticket created, but failed to send email to client.") {
// //         alert("Ticket created, but failed to send email to client.");
// //       }
// //     } catch (error) {
// //       console.error("Error creating ticket:", error);
// //       if (error.response) {
// //         console.error("Server responded with:", error.response.data);
// //       }
// //     }
// //   };

// //   const handleFileChange = (e) => {
// //     const file = e.target.files[0];
// //     setAttachment(file);
// //     setFileName(file ? file.name : '');
// //   };

// //   return (
// //     <div className="container-fluid">
// //       <div className='rounded-4'>
// //         <h1 className='text-center my-4'>CREATE YOUR TICKET</h1>
// //         <div className='d-flex flex-column justify-content-center align-items-center px-5'>
// //           <div className='card p-3 shadowcard my-3'>
// //             <form onSubmit={handleSubmit}>
// //               <div className='row mb-3'>
// //                 <div className="col-md-6">
// //                   <label htmlFor="subject">SUBJECT</label>
// //                   <input
// //                     type="text"
// //                     className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
// //                     id="subject"
// //                     value={subject}
// //                     onChange={(e) => setSubject(e.target.value)}
// //                   />
// //                   {errors.subject && <div className="invalid-feedback">Please fill in the subject.</div>}
// //                 </div>
// //                 <div className="col-md-6">
// //                   <label htmlFor="project">PROJECT</label>
// //                   <select
// //                     className={`form-select ${errors.project ? 'is-invalid' : ''}`}
// //                     id="project"
// //                     value={project}
// //                     onChange={(e) => setProject(e.target.value)}>
// //                     <option value="">Select Project</option>
// //                     <option value="SAP Business One">SAP Business One</option>
// //                     <option value="project2">Project 2</option>
// //                     <option value="project3">Project 3</option>
// //                   </select>
// //                   {errors.project && <div className="invalid-feedback">Please select a project.</div>}
// //                 </div>
// //               </div>
// //               <div className='row mb-3'>
// //                 <div className="col-md-12">
// //                   <label htmlFor="ticketBody" className="form-label">TICKET BODY</label>
// //                   <textarea
// //                     className={`form-control ${errors.ticketBody ? 'is-invalid' : ''}`}
// //                     id="ticketBody"
// //                     rows="3"
// //                     value={ticketBody}
// //                     onChange={(e) => setTicketBody(e.target.value)}></textarea>
// //                   {errors.ticketBody && <div className="invalid-feedback">Please fill in the ticket body.</div>}
// //                 </div>
// //               </div>

// //               <div className="col-md-6">
// //                 <label htmlFor="priority">PRIORITY</label>
// //                 <select
// //                   className={`form-select ${errors.project ? 'is-invalid' : ''}`}
// //                   id="priority"
// //                   value={project}
// //                   onChange={(e) => setPriority(e.target.value)}>
// //                   <option value="">Select Priority</option>
// //                   <option value={3}>High</option>
// //                   <option value={2}>Medium</option>
// //                   <option value={1}>Low</option>
// //                 </select>
// //                 {errors.project && <div className="invalid-feedback">Please select a priority.</div>}
// //               </div>

// //               <div className='d-flex justify-content-center'>
// //                 <div className='mx-5'>
// //                   <label htmlFor="actual-btn" className={`btn btn-primary p-2 ${errors.attachment ? 'is-invalid' : ''}`}>Attach files</label>
// //                   <input
// //                     className="btn btn-warning text-dark form-control"
// //                     id="actual-btn"
// //                     type="file"
// //                     accept=".jpg,.jpeg"
// //                     hidden
// //                     onChange={handleFileChange}
// //                   />
// //                   {errors.attachment && <div className="invalid-feedback">Please attach a file.</div>}
// //                   {fileName && <div className="file-name">{fileName}</div>}
// //                 </div>
// //                 <div className="mx-5">
// //                   <input type="submit" className="btn btn-primary" value="Create Ticket" />
// //                 </div>
// //               </div>
// //             </form>
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default TicketBooking;

// import React, { useEffect, useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './Ticketbooking.css';
// import axios from 'axios';
// import { useParams } from 'react-router-dom';

// function TicketBooking() {
//   const [formData, setFormData] = useState({
//     subject: '',
//     project: '',
//     ticketBody: '',
//     attachment: null,
//     priority: '',
//   });
//   const [errors, setErrors] = useState({ subject: false, project: false, ticketBody: false, attachment: false });
//   const [fileName, setFileName] = useState('');

//   const { id, com, cshort } = useParams();
//   const client_id = atob(id);
//   const company_name = atob(com);
//   const company_short_name = atob(cshort);

//   useEffect(() => {
//     axios
//       .get(`http://192.168.252.177:5002/api/serve/${client_id}/services`)
//       .then((res) => {
//         const allSubdivisions = res.data.flatMap(
//           (service) => service.subdivisions
//         );
//         setFormData((prevData) => ({
//           ...prevData,
//           project: allSubdivisions,
//         }));
//       });
//   }, [client_id]);

//   const handleChange = (e) => {
//     const { id, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [id]: value,
//     }));
//   };

//   const handleFileChange = (e) => {
//     const file = e.target.files[0];
//     setFormData((prevData) => ({
//       ...prevData,
//       attachment: file,
//     }));
//     setFileName(file ? file.name : '');
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const { subject, project, ticketBody, attachment, priority } = formData;

//     const newErrors = {
//       subject: subject === '',
//       project: project === '',
//       ticketBody: ticketBody === '',
//       attachment: attachment === null,
//     };

//     setErrors(newErrors);

//     if (Object.values(newErrors).some((error) => error)) {
//       return;
//     }

//     const formDataToSend = new FormData();
//     formDataToSend.append('subject', subject);
//     formDataToSend.append('ticket_body', ticketBody);
//     formDataToSend.append('client_id', client_id);
//     formDataToSend.append('subdivision_id', project);
//     formDataToSend.append('priority', priority);
//     formDataToSend.append('attachment', attachment);

//     console.log(formDataToSend);

//     // try {
//     //   const response = await axios.post(
//     //     `http://192.168.252.177:5002/api/tickets/create/${company_name}/${company_short_name}`,
//     //     formDataToSend,
//     //     {
//     //       headers: {
//     //         'Content-Type': 'multipart/form-data',
//     //       },
//     //       withCredentials: true,
//     //     }
//     //   );
//     //   console.log('Ticket created successfully:', response.data);
//     //   if (response.data.message === 'Ticket created successfully and emails sent.') {
//     //     alert('Ticket Created Successfully. Check your mail');
//     //   } else if (response.data === 'Ticket created, but failed to send email to account manager') {
//     //     alert('Ticket created, but failed to send email to account manager');
//     //   } else if (response.data === 'Ticket created, but failed to send email to client.') {
//     //     alert('Ticket created, but failed to send email to client.');
//     //   }
//     // } catch (error) {
//     //   console.error('Error creating ticket:', error);
//     //   if (error.response) {
//     //     console.error('Server responded with:', error.response.data);
//     //   }
//     // }
//   };

//   return (
//     <div className="container-fluid">
//       <div className="rounded-4">
//         <h1 className="text-center my-4">CREATE YOUR TICKET</h1>
//         <div className="d-flex flex-column justify-content-center align-items-center px-5">
//           <div className="card p-3 shadowcard my-3">
//             <form onSubmit={handleSubmit}>
//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label htmlFor="subject">SUBJECT</label>
//                   <input
//                     type="text"
//                     className={`form-control ${errors.subject ? 'is-invalid' : ''}`}
//                     id="subject"
//                     value={formData.subject}
//                     onChange={handleChange}
//                   />
//                   {errors.subject && <div className="invalid-feedback">Please fill in the subject.</div>}
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="project">PROJECT</label>
//                   <select
//                     className={`form-select ${errors.project ? 'is-invalid' : ''}`}
//                     id="project"
//                     value={formData.project}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Project</option>
//                     <option value="SAP Business One">SAP Business One</option>
//                     <option value="project2">Project 2</option>
//                     <option value="project3">Project 3</option>
//                   </select>
//                   {errors.project && <div className="invalid-feedback">Please select a project.</div>}
//                 </div>
//               </div>
//               <div className="row mb-3">
//                 <div className="col-md-12">
//                   <label htmlFor="ticketBody" className="form-label">TICKET BODY</label>
//                   <textarea
//                     className={`form-control ${errors.ticketBody ? 'is-invalid' : ''}`}
//                     id="ticketBody"
//                     rows="3"
//                     value={formData.ticketBody}
//                     onChange={handleChange}
//                   ></textarea>
//                   {errors.ticketBody && <div className="invalid-feedback">Please fill in the ticket body.</div>}
//                 </div>
//               </div>

//               <div className="row mb-3">
//                 <div className="col-md-6">
//                   <label htmlFor="priority">PRIORITY</label>
//                   <select
//                     className={`form-select ${errors.priority ? 'is-invalid' : ''}`}
//                     id="priority"
//                     value={formData.priority}
//                     onChange={handleChange}
//                   >
//                     <option value="">Select Priority</option>
//                     <option value="High">High</option>
//                     <option value="Medium">Medium</option>
//                     <option value="Low">Low</option>
//                   </select>
//                   {errors.priority && <div className="invalid-feedback">Please select a priority.</div>}
//                 </div>
//                 <div className="col-md-6">
//                   <label htmlFor="actual-btn" className={`btn btn-primary p-2 ${errors.attachment ? 'is-invalid' : ''}`}>Attach files</label>
//                   <input
//                     className="btn btn-warning text-dark form-control"
//                     id="actual-btn"
//                     type="file"
//                     accept=".jpg,.jpeg"
//                     hidden
//                     onChange={handleFileChange}
//                   />
//                   {errors.attachment && <div className="invalid-feedback">Please attach a file.</div>}
//                   {fileName && <div className="file-name">{fileName}</div>}
//                 </div>
//               </div>

//               <div className="d-flex justify-content-center">
//                 <div className="mx-5">
//                   <input type="submit" className="btn btn-primary" value="Create Ticket" />
//                 </div>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default TicketBooking;

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import ReactLoading from "react-loading";
import styles from "./Ticketbooking.css"; // Import the CSS module

const TicketForm = () => {
  const { id, com, cshort } = useParams();
  const client_id = atob(id);
  const company_name = atob(com);
  const company_short_name = atob(cshort);

  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    subject: "",
    ticket_body: "",
    client_id: client_id,
    priority_id: "1",
    subdivision_id: "",
    screenshot: null,
  });

  useEffect(() => {
    axios
      .get(`http://192.168.253.177:5002/api/serve/${client_id}/services`)
      .then((res) => {
        const allSubdivisions = res.data.flatMap(
          (service) => service.subdivisions
        );
        setServices(allSubdivisions);
      });
  }, [client_id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, screenshot: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formDataToSend = new FormData();
    formDataToSend.append("subject", formData.subject);
    formDataToSend.append("ticket_body", formData.ticket_body);
    formDataToSend.append("client_id", formData.client_id);
    formDataToSend.append("priority_id", formData.priority_id);
    formDataToSend.append("subdivision_id", formData.subdivision_id);
    formDataToSend.append("screenshot", formData.screenshot);

    try {
      const response = await axios.post(
        `http://192.168.253.177:5002/api/tickets/create/${company_name}/${company_short_name}`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );
      console.log("Ticket created successfully:", response.data);
      if (
        response.data.message === "Ticket created successfully and emails sent."
      ) {
        alert("Ticket Created Successfully. Check your mail");
      } else if (
        response.data ===
        "Ticket created, but failed to send email to account manager"
      ) {
        alert("Ticket created, but failed to send email to account manager");
      } else if (
        response.data === "Ticket created, but failed to send email to client."
      ) {
        alert("Ticket created, but failed to send email to client.");
      }
      setLoading(false);
    } catch (error) {
      console.error("Error creating ticket:", error);
      if (error.response) {
        console.error("Server responded with:", error.response.data);
      }
      setLoading(false);
    }
  };

  return (
    <div className="">
     
        <h1 className="text-center my-4">CREATE YOUR TICKET</h1>
        <div className="d-flex flex-column justify-content-center align-items-center px-5">
          <div className={styles.ticketFormContainer}>
            {loading && (
              <div className={styles.loadingOverlay}>
                <ReactLoading
                  type="spin"
                  color="#000"
                  height={100}
                  width={100}
                />
              </div>
            )}
            <div className="card p-3 shadowcard">
              <form onSubmit={handleSubmit}>
                <div >
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label>Ticket Body</label>
                  <textarea
                    name="ticket_body"
                    value={formData.ticket_body}
                    onChange={handleChange}
                    className="form-control"
                    required
                  ></textarea>
                </div>
                <div>
                  <label>Priority</label>
                  <select
                    name="priority_id"
                    value={formData.priority_id}
                    onChange={handleChange}
                    className="form-control"
                  >
                    <option value="1">Low</option>
                    <option value="2">Medium</option>
                    <option value="3">High</option>
                  </select>
                </div>
                <div>
                  <label>Project</label>
                  <select
                    name="subdivision_id"
                    value={formData.subdivision_id}
                    onChange={handleChange}
                    className="form-control"
                    required
                  >
                    <option value="">Select a Subdivision</option>
                    {services.map((subdivision) => (
                      <option
                        key={subdivision.subdivision_id}
                        value={subdivision.subdivision_id}
                      >
                        {subdivision.subdivision_name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label>Screenshot</label>
                  <input
                    type="file"
                    name="screenshot"
                    onChange={handleFileChange}
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="mt-2 btn btn-primary"
                >
                  Create Ticket
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
  
  );
};

export default TicketForm;
