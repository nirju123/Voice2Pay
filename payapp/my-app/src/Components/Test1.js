// export const handleSubmit = async (e,link,formData, onSuccess, onError) => {
//   e.preventDefault();
//   try {
//       const response = await fetch(link, {
//           method: 'POST',
//           headers: {
//               'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(formData)
//       });

//       if (response.status === 200) {
//           onSuccess();
//           const data = await response.json();
//           console.log('Response from backend:', data);
//       } else {
//           throw new Error(formData.username?"Phone or Account Number already exist or password less than 8 character":"Phone or Password Wrong");
//       }
//   } catch (error) {
//       console.error('Error:', error);
//       onError(error);
//   }
// };
// const response = await fetch('http://127.0.0.1:5000/login', {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify(formData)
//   })
//     .then(response => {
//       if (response.status===200) {
//           setFormData({
//               email: '',
//               password: ''
//              });
     
//         return response.json();
//       } else {
//         throw new Error('Email wrong or Password wrong ');
//       }
//     })
//     .then(data => {
//       console.log('Response from backend:', data);
//       localStorage.setItem('jwtToken', data.access_token);
//       navigate('/profile');
//     })
//     .catch(error => {
//       console.error('Error:', error);
//       alert('Error: ' + error.message);
//     });
  