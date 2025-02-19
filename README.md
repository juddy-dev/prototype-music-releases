# 🚀 React 18 + Next.js + AWS Amplify

→→→ [CLICK HERE TO TEST](????)
 - Email: test@juddy.dev
 - Password: T3st*123

This project is a web application built with **React** and **Next.js** using **AWS Amplify** for authentication. A custom UI design with **Chakra UI**.

## 📌 Features

- Developed with React 18 + Next.Js
- Authentication with AWS Amplify
- Responsive and modern UI with Chakra UI

## Pre-requisites

- **Node.js** (version 18 o higher) [Download Node](https://nodejs.org/).
- An account in **AWS** with a user group configured in **Cognito**  → [AWS Cognito](https://docs.aws.amazon.com/es_es/cognito/latest/developerguide/what-is-amazon-cognito.html)

## Installation

Follow these steps to install the project in your local environment:

1. Clone the repository:

   ```bash
   git clone ???

2. Install the dependencies:

   ```bash
   npm install

3. Create a file with the name `aws-exports.js` inside the folder `src`

4. Modify the file `aws-exports.js` with the next code:
```js
const awsConfig = {
    "aws_project_region": "YOUR REGION",
    "aws_cognito_region": "YOUR REGION",
    "aws_user_pools_id": "YOUR USER POOL ID",
    "aws_user_pools_web_client_id": "YOUR USER POOL WEB CLIENT ID"
};

export default awsConfig;
  
```
5. Build the development:

   ```bash
   npm run build

6. Run the development server:

   ```bash
   npm run dev

7. Open http://localhost:3000 to view the project in your browser.

## Usage

Once the server is running, you can:

- Navigate through the different pages of the app.