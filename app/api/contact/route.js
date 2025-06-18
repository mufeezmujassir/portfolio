import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Get form data from the request
    const formData = await request.formData();
    const name = formData.get('name');
    const email = formData.get('email');  
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Log the form data for debugging
    console.log('Form submission received:', { name, email, subject });
    
    // IMPORTANT: Replace this with your actual Web3Forms access key
    // For testing without a key, we'll return a success response
    // Get your free access key from: https://web3forms.com/
    const accessKey = "f46d707f-1dbf-4cb2-9974-3de25c30962d";
    
    // If using the placeholder key, return a simulated success for testing
    if (accessKey === "f46d707f-1dbf-4cb2-9974-3de25c30962d") {
      console.log('Using placeholder access key - returning simulated success');
      // Return success response for testing purposes
      return NextResponse.json(
        { success: true, message: 'Form submission received! (Test Mode)' },
        { status: 200 }
      );
    }
    
    // Create the payload for Web3Forms API
    const web3formsData = new FormData();
    web3formsData.append('access_key', accessKey);
    web3formsData.append('name', name);
    web3formsData.append('email', email);
    web3formsData.append('subject', subject);
    web3formsData.append('message', message);
    
    // Convert FormData to JSON for the API request
    const formDataObj = {};
    web3formsData.forEach((value, key) => {
      formDataObj[key] = value;
    });
    
    // Send data to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formDataObj)
    });
    
    const result = await response.json();
    
    if (!result.success) {
      console.error('Web3Forms API error:', result);
      throw new Error('Failed to submit form to Web3Forms');
    }
    
    // Return success response
    return NextResponse.json(
      { success: true, message: 'Form submission received! We will contact you soon.' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error processing form submission:', error);
    
    // Return error response
    return NextResponse.json(
      { success: false, message: 'Failed to process your submission. Please try again later.' },
      { status: 500 }
    );
  }
}