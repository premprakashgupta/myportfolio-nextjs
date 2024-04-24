export async function GET() {
    try {
      // Fetch data from the URL
      const response = await fetch('https://premprakashgupta.github.io/myportfoliodb/data.json');
  
      // Check if the response is successful
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
  
      // Parse the JSON response
      const data = await response.json();
  
      // Return the fetched data as JSON response
      return new Response(JSON.stringify(data), {
        headers: { 'Content-Type': 'application/json' },
      });
    } catch (error:any) {
      // Handle errors
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }
  }
  