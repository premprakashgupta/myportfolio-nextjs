// pages/api/send-email.ts
import mailjet from 'node-mailjet';


export async function POST(request:Request) {
  
 
  const res = await request.json()

  const {email,username,message}=res;
  if(username==="" || email==="" || message==="")
  {
    return Response.json({msg:"All Field is required"})
    
  }
  // Validate input data if necessary
  
  const mailjetClient = mailjet.apiConnect(
    process.env.MAILJET_API_KEY_PUBLIC || '',
    process.env.MAILJET_API_KEY_PRIVATE || ''
  );

  

  // Uncomment this part when you are ready to send emails
  const data = mailjetClient.post('send', { version: 'v3.1' }).request({
    Messages: [
      {
        From: {
          Email: email,
          Name: username,
        },
        To: [
          {
            Email: 'prem.com0011@gmail.com',
            Name: 'From Portfolio',
          },
        ],
        Subject: `${username} Email you from portfolio`,
        HTMLPart: `
  <html>
    <head>
      <style>
        body {
          font-family: 'Arial', sans-serif;
          background-color: #f4f4f4;
          color: #333;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background-color: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }
        h3 {
          color: #007bff;
        }
        p {
          color: #555;
        }
        ul {
          list-style-type: none;
          padding: 0;
        }
        li {
          margin-bottom: 10px;
        }
        strong {
          color: #ff6347;
        }
        a {
          color: #007bff;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h3 style="font-size: 24px;">Dear ${username}, welcome to <a href="https://www.mailjet.com/" style="color: #4caf50;">Mailjet</a>!</h3>
        <p style="font-size: 16px;">Thank you for your message. Here are the details:</p>
        <ul>
          <li style="font-size: 14px;"><strong>Email:</strong> <span style="color: #ff6347;">${email}</span></li>
          <li style="font-size: 14px;"><strong>Message:</strong> ${message}</li>
        </ul>
        <p style="font-size: 16px; color: #555;">May the delivery force be with you!</p>
      </div>
    </body>
  </html>
`,

      },
    ],
  });
 
  return Response.json({data})
}
