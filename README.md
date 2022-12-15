Backend server and API for TradeNPost E-Commerce Site. 

Uses Express, Node to complete MERN stack. 

Used in conjunction with https://github.com/Ricardo-Lewin/TradeNPost-frontend

# Running Locally
Before getting started you will need to have access to the following (all offer free service accounts):

MongoDB https://www.mongodb.com/cloud/atlas/register

Cloudinary (For Image Storage) https://cloudinary.com/users/register_free#gsc.tab=0

Stripe (for test payments) https://dashboard.stripe.com/register


- git clone git@github.com:Ricardo-Lewin/TradeNPost-backend.git

- create a `.env` file in the root directory
- Add the following the the .env file:
    ```
    MONGO_USERNAME=
    MONGO_PW=
    CLOUD_NAME=
    CLOUD_API_KEY=
    CLOUD_API_SECRET=
    STRIPE_SECRET=
    ```
    - `MONGO_USERNAME` and `MONGO_PW` can be access in MongoDB after account creation. Navigate to Database Access on the left panel and then "add new databse user"
    - `CLOUD_NAME`, `CLOUD_API_KEY`, and `CLOUD_API_SECRET` should all be on your dashboard after account creation
    - `STRIPE_SECRET` also located in the dashboard

<br>

`npm install` in the project terminal to install all dependencies

`npm start` to start up server, a similar message to the following should appear
```
> tradenpost-backend@1.0.0 start
> node server.js

server running at port 8080
connected to mongodb

```

Happy Coding!
