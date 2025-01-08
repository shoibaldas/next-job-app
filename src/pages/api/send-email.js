import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({ success: false, error: "Missing required fields" });
        }

        try {
            await sendgrid.send({
                to: "codemen.shoibal@gmail.com", // Replace with your Gmail address
                from: "codemen.shoibal@gmail.com", // Replace with a verified email in SendGrid
                subject: `New Message from ${name}`,
                text: `Message from ${name} (${email}): ${message}`,
                // html: `
                //     <h3>New Contact Form Submission</h3>
                //     <p><strong>Name:</strong> ${name}</p>
                //     <p><strong>Email:</strong> ${email}</p>
                //     <p><strong>Message:</strong> ${message}</p>
                // `,
                html: `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Email Template</title>
                            <style>
                                /* Basic reset for email */
                                body {
                                    margin: 0;
                                    padding: 0;
                                    background-color: #f9fafb; /* Light gray background */
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 20px auto;
                                    background-color: #ffffff; /* White background */
                                    border-radius: 8px;
                                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                                }
                                .header {
                                    background-color: #007bff; /* Blue background */
                                    color: white;
                                    text-align: center;
                                    padding: 20px;
                                }
                                .content {
                                    padding: 20px;
                                }
                                .footer {
                                    background-color: #f1f1f1; /* Light gray footer */
                                    text-align: center;
                                    padding: 10px;
                                }
                                table {
                                    width: 100%;
                                    border-collapse: collapse; /* Ensure borders collapse */
                                    margin-bottom: 20px; /* Space below the table */
                                }
                                th, td {
                                    border: 1px solid #dddddd; /* Light gray border */
                                    text-align: left;
                                    padding: 8px; /* Padding inside cells */
                                }
                                th {
                                    background-color: #f2f2f2; /* Light gray header background */
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <!-- Header -->
                                <div class="header">
                                    <h1>Message From ICEL Website</h1>
                                </div>

                                <!-- Table -->
                                <div class="content">
                                    <table>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                        </tr>
                                        <tr>
                                            <td>${name}</td> <!-- Replace with dynamic value -->
                                            <td>${email}</td> <!-- Replace with dynamic value -->
                                        </tr>
                                    </table>

                                    <!-- Main Content -->
                                    <p>${message}</p>
                                </div>

                                <!-- Footer -->
                                <div class="footer">
                                    <p>© 2025 ICEL TECH LLC-FZ UAE. All rights reserved.</p>
                                </div>
                            </div>
                        </body>
                        </html>`
            });

            res.status(200).json({ success: true });
        } catch (error) {
            console.error("Error sending email:", error);
            res.status(500).json({ success: false, error: "Failed to send email" });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
