// // import React, { useState } from 'react';
// // import axios from 'axios';
// // import emailjs from 'emailjs-com';

// // const Payment = () => {
// //   const [paymentDetails, setPaymentDetails] = useState({
// //     customerId: '',
// //     bookingId: '',
// //     amount: '',
// //     paymentMode: ''
// //   });
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState('');
// //   const [success, setSuccess] = useState(false);

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setPaymentDetails({ ...paymentDetails, [name]: value });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     setLoading(true);
// //     setError('');
// //     setSuccess(false);

// //     // Validate payment details
// //     if (!paymentDetails.customerId || !paymentDetails.bookingId || !paymentDetails.amount || !paymentDetails.paymentMode) {
// //       setError('Please fill in all payment details');
// //       setLoading(false);
// //       return;
// //     }

// //     try {
// //       // Send payment details to backend
// //       const response = await axios.post('http://localhost:8080/payment', paymentDetails);

// //       if (response.data.success) {
// //         // Send email notification
// //         await sendEmailNotification(paymentDetails.customerId, paymentDetails.bookingId);
// //         setSuccess(true);
// //       } else {
// //         throw new Error('Payment failed');
// //       }
// //     } catch (error) {
// //       console.error('Error:', error);
// //       setError('Failed to process payment');
// //     } finally {
// //       setLoading(false);
// //     }
// //   };

// //   const sendEmailNotification = (customerId, bookingId) => {
// //     return new Promise((resolve, reject) => {
// //       emailjs.send('service_id', 'template_id', {
// //         to_email: 'customer-email@example.com', // Replace with actual customer email
// //         subject: 'Booking Confirmation',
// //         message: `Your booking with ID ${bookingId} has been confirmed. Thank you for choosing our service!`
// //       }, 'user_id') // Replace with your EmailJS user ID
// //         .then((response) => {
// //           console.log('Email sent successfully:', response);
// //           resolve(response);
// //         })
// //         .catch((error) => {
// //           console.error('Error sending email notification:', error);
// //           reject(error);
// //         });
// //     });
// //   };

// //   return (
// //     <div>
// //       <h2>Payment</h2>
// //       <form onSubmit={handleSubmit}>
// //         <div>
// //           <label htmlFor="customerId">Customer ID:</label>
// //           <input
// //             type="text"
// //             id="customerId"
// //             name="customerId"
// //             value={paymentDetails.customerId}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="bookingId">Booking ID:</label>
// //           <input
// //             type="text"
// //             id="bookingId"
// //             name="bookingId"
// //             value={paymentDetails.bookingId}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="amount">Amount:</label>
// //           <input
// //             type="number"
// //             id="amount"
// //             name="amount"
// //             value={paymentDetails.amount}
// //             onChange={handleChange}
// //             required
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="paymentMode">Payment Mode:</label>
// //           <select
// //             id="paymentMode"
// //             name="paymentMode"
// //             value={paymentDetails.paymentMode}
// //             onChange={handleChange}
// //             required
// //           >
// //             <option value="">Select Payment Mode</option>
// //             <option value="CREDIT_CARD">Credit Card</option>
// //             <option value="DEBIT_CARD">Debit Card</option>
// //             <option value="PAYPAL">PayPal</option>
// //             {/* Add other payment modes if necessary */}
// //           </select>
// //         </div>
// //         <button type="submit" disabled={loading}>Submit Payment</button>
// //         {loading && <p>Processing payment...</p>}
// //         {error && <p style={{ color: 'red' }}>{error}</p>}
// //         {success && <p style={{ color: 'green' }}>Payment processed successfully!</p>}
// //       </form>
// //     </div>
// //   );
// // };

// // export default Payment;


// import React, { useState } from 'react';
// import axios from 'axios';
// import emailjs from 'emailjs-com';

// const Payment = () => {
//   const [paymentDetails, setPaymentDetails] = useState({
//     customerId: '',
//     bookingId: '',
//     amount: '',
//     paymentMode: ''
//   });
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setPaymentDetails({ ...paymentDetails, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError('');
//     setSuccess(false);

//     // Validate payment details
//     if (!paymentDetails.customerId || !paymentDetails.bookingId || !paymentDetails.amount || !paymentDetails.paymentMode) {
//       setError('Please fill in all payment details');
//       setLoading(false);
//       return;
//     }

//     // Send payment details to backend
//     axios.post('http://localhost:8080/payment', paymentDetails)
//       .then((response) => {
//         if (response.data.success) {
//           // Send email notification
//           sendEmailNotification(paymentDetails.customerId, paymentDetails.bookingId)
//             .then(() => {
//               setSuccess(true);
//             })
//             .catch((emailError) => {
//               console.error('Error sending email:', emailError);
//               setError('Payment succeeded, but email notification failed');
//             });
//         } else {
//           throw new Error('Payment failed');
//         }
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         setError('Failed to process payment');
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   };

//   const sendEmailNotification = (customerId, bookingId) => {
//     return emailjs.send('service_id', 'template_id', {
//       to_email: 'customer-email@example.com', // Replace with actual customer email
//       subject: 'Booking Confirmation',
//       message: `Your booking with ID ${bookingId} has been confirmed. Thank you for choosing our service!`
//     }, 'user_id') // Replace with your EmailJS user ID
//       .then((response) => {
//         console.log('Email sent successfully:', response);
//         return response;
//       })
//       .catch((error) => {
//         console.error('Error sending email notification:', error);
//         throw error;
//       });
//   };

//   return (
//     <div>
//       <h2>Payment</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label htmlFor="customerId">Customer ID:</label>
//           <input
//             type="text"
//             id="customerId"
//             name="customerId"
//             value={paymentDetails.customerId}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="bookingId">Booking ID:</label>
//           <input
//             type="text"
//             id="bookingId"
//             name="bookingId"
//             value={paymentDetails.bookingId}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="amount">Amount:</label>
//           <input
//             type="number"
//             id="amount"
//             name="amount"
//             value={paymentDetails.amount}
//             onChange={handleChange}
//             required
//           />
//         </div>
//         <div>
//           <label htmlFor="paymentMode">Payment Mode:</label>
//           <select
//             id="paymentMode"
//             name="paymentMode"
//             value={paymentDetails.paymentMode}
//             onChange={handleChange}
//             required
//           >
//             <option value="">Select Payment Mode</option>
//             <option value="CREDIT_CARD">Credit Card</option>
//             <option value="DEBIT_CARD">Debit Card</option>
//             <option value="PAYPAL">PayPal</option>
//             {/* Add other payment modes if necessary */}
//           </select>
//         </div>
//         <button type="submit" disabled={loading}>Submit Payment</button>
//         {loading && <p>Processing payment...</p>}
//         {error && <p style={{ color: 'red' }}>{error}</p>}
//         {success && <p style={{ color: 'green' }}>Payment processed successfully!</p>}
//       </form>
//     </div>
//   );
// };

// export default Payment;


import React, { useState } from 'react';
import axios from 'axios';
import emailjs from 'emailjs-com';
import './css/Payment.css';

const Payment = () => {
  const [paymentDetails, setPaymentDetails] = useState({
    customerId: '',
    bookingId: '',
    amount: '',
    paymentMode: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    // Validate payment details
    if (!paymentDetails.customerId || !paymentDetails.bookingId || !paymentDetails.amount || !paymentDetails.paymentMode) {
      setError('Please fill in all payment details');
      setLoading(false);
      return;
    }

    // Send payment details to backend
    axios.post('http://localhost:8080/payment', paymentDetails)
      .then((response) => {
        if (response.data.success) {
          // Replace 'customer-email@example.com' with the actual customer email if available
          const customerEmail = 'customer-email@example.com';
          sendEmailNotification(customerEmail, paymentDetails.bookingId)
            .then(() => {
              setSuccess(true);
            })
            .catch((emailError) => {
              console.error('Error sending email:', emailError);
              setError('Payment succeeded, but email notification failed');
            });
        } else {
          throw new Error('Payment failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        setError('Failed to process payment');
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const sendEmailNotification = (toEmail, bookingId) => {
    return emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      {
        to_email: toEmail,
        subject: 'Booking Confirmation',
        message: `Your booking with ID ${bookingId} has been confirmed. Thank you for choosing our service!`
      },
      process.env.REACT_APP_EMAILJS_USER_ID
      
    )
    .then((response) => {
      console.log('Email sent successfully:', response);
      return response;
    })
    .catch((error) => {
      console.error('Error sending email notification:', error);
      throw error;
    });
  };

  return (
    <div>
      <h2>Payment</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="customerId">Customer ID:</label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={paymentDetails.customerId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="bookingId">Booking ID:</label>
          <input
            type="text"
            id="bookingId"
            name="bookingId"
            value={paymentDetails.bookingId}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={paymentDetails.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="paymentMode">Payment Mode:</label>
          <select
            id="paymentMode"
            name="paymentMode"
            value={paymentDetails.paymentMode}
            onChange={handleChange}
            required
          >
            <option value="">Select Payment Mode</option>
            <option value="CREDIT_CARD">Credit Card</option>
            <option value="DEBIT_CARD">Debit Card</option>
            <option value="PAYPAL">PayPal</option>
            {/* Add other payment modes if necessary */}
          </select>
        </div>
        <button type="submit" disabled={loading}>Submit Payment</button>
        {loading && <p>Processing payment...</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}
        {success && <p style={{ color: 'green' }}>Payment processed successfully!</p>}
      </form>
    </div>
  );
};

export default Payment;

