# InstaVote

## A blockchain app for conducting e-Elections

Elections are often a lengthy and cumbersome with a lot of difficulty for both the voter and the election commission. Our team has sought 2 major problems in the current process:

1. Users not being able to vote if they are not present in their constituency at the time of election.

2. A lot of time taken in vote counting which leads to a lot of evm mishandling accusations.

So our team seeks to eradicate these problems by creating a completely functional voting web-app which allows a voter to vote online from anywhere in the country with the safety of blockchain. Our web-app also provides on the spot results as early as requested due to a decentralized data storing mechanism which makes it easier to retrieve the votes earned by a candidate. Our app can also easily provide stats such as total voter turnout percentage and percentage votes earned by a candidate without requiring any mechanical calculations. Thus saving resources on time and money.

Our DApp will hold a decentralized user login system through which each voter can login and vote for a candidate of his/her constituency all of whose names will be displayed on an electronic ballot on his device. This event will take place through the transaction of a vote form the voter to the candidate. Also once a candidate has voted this DApp will ensure that a voter will not be able to vote more than once.

All the voting procedures will be time bound processes which will ensure that the voting can happen only on the election day after which no transaction can take place. Once the election day has taken place the election manager can view the results and may also display them if needed.

The user will have to simply register as a voter and/or candidate with their credentials(voterID details and a face-detection system) on a user-friendly registration page. After the details have been verified, the voters will be initialized as active voters. On the day of election the voter can login on the DApp with their credentials after which they can give their vote on the displayed ballot(within the stipulated election time).

The election manager can regulate the election processes such as deciding the election day and outing the results. The candidate can see their personal result on logging in the DApp after the election ends and the results are outed.

The technology stack we are using using:

1. Azure decentralized blockchain server
2. Solidity to maintain our smart contracts
3. ReactJs client as the frontend
4. AzureSQL to maintain voter database

So our product will result in a user friendly DApp that allows the voter to vote freely and makes the election process less cumbersome.

## Setup Instructions (For development environments)

1. Download and initiate `ganache-cli` or `ganache gui`
2. Import the ganache accounts to your metamask and connect it to localhost:8545 network
3. Run `truffle migrate --reset`
4. Run `node build.js`
5. Start sql server using `cd server && node app.js`
6. Start client portal using `cd client && npm start`
7. Start admin portal using `cd admin && npm start`
