# Contact Management System

A Contact Management System built using Node.js, Express.js, MongoDB, and Mongoose.

## Technologies Used

- Node.js
- Express.js
- MongoDB
- Mongoose
- dotenv
- Nodemon

## Features

- Create a new contact
- Fetch all contacts
- Fetch contact by ID
- Update contact details
- Delete contact
- Phone number validation
- Email validation
- Required field validation
- Unique contact ID
- Unique email address
- Error handling

## Contact Fields

| Field | Type | Validation |
|---|---|---|
| contactId | String | Required, Unique |
| name | String | Required |
| phone | String | Required, 10 digits |
| email | String | Required, Valid format, Unique |

## Database

Database Name: contact_management

## API Endpoints

### Create Contact

POST /api/contacts

Example:

{
  "contactId": "C001",
  "name": "santhosh",
  "phone": "9876543210",
  "email": "san@gmail.com"
}

### Get All Contacts

GET /api/contacts

### Get Contact by ID

GET /api/contacts/C001

### Update Contact

PUT /api/contacts/C001

Example:

{
  "name": "santhosh Updated",
  "phone": "9876543211",
  "email": "san.updated@gmail.com"
}

### Delete Contact

DELETE /api/contacts/C001

## Validation

The application validates:

- Name is required.
- Phone number must contain exactly 10 digits.
- Email must have a valid format.
- Contact ID must be unique.
- Email must be unique.

## Error Handling

The API handles validation errors, duplicate records, missing contacts, and server errors with appropriate HTTP status codes and JSON responses.

## Testing

The APIs were tested using CURL requests in the terminal.

Tested operations:

- POST - Create contact
- GET - Fetch all contacts
- GET by ID - Fetch individual contact
- PUT - Update contact
- DELETE - Delete contact

Validation tests:

- Invalid phone number
- Invalid email address
- Missing required fields
- Duplicate email

## Project Structure

contact-management-system/

models/
    Contact.js

routes/
    contactRoutes.js

.env
.gitignore
package.json
package-lock.json
README.md
server.js

## Setup Instructions

Install dependencies:

npm install

Create a .env file:

MONGO_URI=your_mongodb_connection_string
PORT=5000

Start the server:

npm start

For development:

npm run dev

## Author

Vikaasan S