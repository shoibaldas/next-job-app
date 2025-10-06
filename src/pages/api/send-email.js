import nodemailer from "nodemailer";

export default async function handler(req, res) {
    // console.log("API endpoint hit with method:", req.method);

    if (req.method === "POST") {
        try {
            // console.log("Request body:", req.body);
            const { name, email, phone, message } = req.body;

            if (!name || !email || !phone || !message) {
                console.log("Missing required fields");
                return res.status(400).json({ success: false, error: "Missing required fields" });
            }

            // Check if SMTP2GO credentials are set
            if (!process.env.SMTP2GO_USER || !process.env.SMTP2GO_PASS) {
                console.error("SMTP2GO credentials are not configured");
                return res.status(200).json({ 
                    success: true, 
                    message: "Form submitted successfully (email service not configured)" 
                });
            }

            // Configure transporter with SMTP2GO
            const transporter = nodemailer.createTransport({
                host: "mail.smtp2go.com",
                port: 587, // or 2525
                auth: {
                    user: process.env.SMTP2GO_USER, // Your SMTP2GO username
                    pass: process.env.SMTP2GO_PASS  // Your SMTP2GO password
                }
            });

            // Send the email
            const info = await transporter.sendMail({
                from: "no-reply@iceltech.com", // must be your verified domain in SMTP2GO
                to: "contactus@iceltech.com",   // recipient
                subject: `New Message from ${name}`,
                text: `Message from ${name} (${email}, ${phone}): ${message}`,
                html: `<!DOCTYPE html>
                        <html lang="en">
                        <head>
                            <meta charset="UTF-8">
                            <meta name="viewport" content="width=device-width, initial-scale=1.0">
                            <title>Email Template</title>
                            <style>
                                body {
                                    margin: 0;
                                    padding: 0;
                                    background-color: #f9fafb;
                                    font-family: Arial, sans-serif;
                                }
                                .container {
                                    max-width: 600px;
                                    margin: 20px auto;
                                    background-color: #ffffff;
                                    border-radius: 8px;
                                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                                }
                                .header {
                                    background-color: #007bff;
                                    color: white;
                                    text-align: center;
                                    padding: 20px;
                                }
                                .content {
                                    padding: 20px;
                                }
                                .footer {
                                    background-color: #f1f1f1;
                                    text-align: center;
                                    padding: 10px;
                                }
                                table {
                                    width: 100%;
                                    border-collapse: collapse;
                                    margin-bottom: 20px;
                                }
                                th, td {
                                    border: 1px solid #dddddd;
                                    text-align: left;
                                    padding: 8px;
                                }
                                th {
                                    background-color: #f2f2f2;
                                }
                            </style>
                        </head>
                        <body>
                            <div class="container">
                                <div class="header">
                                    <h1>Message From ICEL Website</h1>
                                </div>
                                <div class="content">
                                    <table>
                                        <tr>
                                            <th>Name</th>
                                            <th>Email</th>
                                            <th>Phone</th>
                                        </tr>
                                        <tr>
                                            <td>${name}</td>
                                            <td>${email}</td>
                                            <td>${phone}</td>
                                        </tr>
                                    </table>
                                    <p>${message}</p>
                                </div>
                                <div class="footer">
                                    <p>©2025 ICEL TECH LLC. All rights reserved.</p>
                                </div>
                            </div>
                        </body>
                        </html>`
            });

            console.log("Email sent: ", info.messageId);
            res.status(200).json({ success: true });

        } catch (error) {
            console.error("Error in API handler:", error);
            return res.status(500).json({ 
                success: false, 
                error: "Failed to send email",
                details: error.message,
            });
        }
    } else {
        res.setHeader("Allow", ["POST"]);
        return res.status(405).json({ 
            success: false, 
            error: `Method ${req.method} Not Allowed` 
        });
    }
}
