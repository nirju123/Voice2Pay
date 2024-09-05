export const isLoggedIn= () => {
    console.log("hii2");
    const token = localStorage.getItem('jwtToken'); 
    console.log("hii3",token);
    if (!token) {
      return false;
    }
  
    const tokenPayload = JSON.parse(atob(token.split('.')[1])); // Decode the token payload
    const expirationTime = tokenPayload.exp * 1000; // Convert expiration time from seconds to milliseconds
    const currentTime = Date.now(); // Get the current time in milliseconds
    return currentTime < expirationTime; // Check if the current time is greater than or equal to the expiration time
  };
  export const handleSubmit = async (e,link,formData, onSuccess, onError) => {
    e.preventDefault();
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (response.status === 200) {
            const data = await response.json();
            localStorage.setItem('jwtToken', data.access_token);
            console.log('Response from backend:', data.access_token,"hii");
            onSuccess();
        } else {
            throw new Error(formData.username?"Phone or Account Number already exist or password less than 8 character":"Phone or Password Wrong");
        }
    } catch (error) {
        console.error('Error:', error);
        onError(error);
    }
};
export const handleSubmit1 = async (e,link,formData, onSuccess, onError) => {
    e.preventDefault();
    const token = localStorage.getItem('jwtToken'); 
    try {
        const response = await fetch(link, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify(formData)
        });

        if (response.status === 200) {
            const data = await response.json();
            onSuccess();
        } else {
            throw new Error(formData.username?"Phone or Account Number already exist or password less than 8 character":"Phone or Password Wrong");
        }
    } catch (error) {
        console.error('Error:', error);
        onError(error);
    }
};

