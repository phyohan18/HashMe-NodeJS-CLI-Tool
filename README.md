
# HashMe🔒💻

**Description** : “HashMe” is a command-line software that takes a .txt file as input and outputs a new hashed text file. The application also provides various algorithms from which you can select your preferred hash algorithm. The application reads every lines of the original file, with every input line applying the cryptographic operation to generate individual hashes.

**Two versions of the program ( Serial Processing & Parallel Processing )**

This application offers two modes of operation: serial and parallel processing. Node.js typically runs in a single thread, which can result in slow performance when processing large text files. To address this, I implemented the serial processing approach with the help of NodeJS's built-in Cluster module. The module creates child processes that each run on their own thread, based on the number of cores available in the system. The workload is then distributed among these threads by the main thread. This approach optimizes execution time by processing jobs in parallel, making it an efficient tool for handling large amounts of data using multi-core parallel processing.


URL - https://decentralized-chat-app-phi.vercel.app
## Tech Stack

Node.js, npm 

## Screenshots

![App Screenshot](https://i.ibb.co/dMrBZrj/Screenshot-2023-03-01-181706.png)


![App Screenshot](https://i.ibb.co/PGzBfq9/Screenshot-2023-03-01-182008.png)

![App Screenshot](https://i.ibb.co/XY2bzZ8/Screenshot-2023-03-01-182153.png)

![App Screenshot](https://i.ibb.co/fYMQKgy/Screenshot-2023-03-01-182254.png)

![App Screenshot](https://i.ibb.co/d73z0WP/Screenshot-2023-03-01-182454.png)

## Run Locally

Clone the project

```bash
  git clone https://github.com/phyohan18/Decentralized-Chat-App.git
```

Run npm install to install everything from package.json

```bash
 npm install
```

Then to run the development server:

```bash
 npm run dev
```
Open http://localhost:5173 and you'll be able to see the page appear.

## Features Completed

- **End-to-end encryption**: The system uses the Simple Encryption Algorithm (SEA) provided by Gun.js to encrypt messages, ensuring that only the sender and recipient can access the contents of the message.
- **Blockchain based Authentication**: Users can sign in using their wallet address as their unique identifier, removing the need for additional personal information and providing a secure and reliable authentication system.
- **In-app Message Translation Feature**: The system includes an auto-translate feature that supports over 10 languages, allowing users to communicate more easily with others who speak different languages.
- **Decentralized Architecture**: The system utilizes Gun.js to store user data and message logs on a decentralized network of servers, reducing the risk of data breaches and increasing user privacy.
- **Offensive & Toxic Message Detection Feature**: The system uses the Perspective API, powered by NLP, to automatically detect and filter out harmful or toxic messages.
- **Score-based User moderation Feature**: Users who send harmful or toxic messages receive warnings and may eventually be banned from the server, with the severity of the punishment based on their behaviour score.
- **Group messaging**: The system allows users to create chat rooms with customn images and invite others to join, enabling group communication and collaboration.
- **Screenshot Protection**: The app disabled Screenshot keyboard shortcut and print keyboard shortcut but may still be able to capture screenshots using device-level or OS-level features such as snipping tools or screen.
- **In-app Profanity Filter**: The system filters out swear or bad words, replacing them with asterisks to ensure a more positive and respectful user experience.
- **Customizable User Profile**: Users can upload custom avatars and set nicknames, personalizing their profile and expressing their identity.
- **Chat Group Search Feature**: The system includes a chat group search feature with a stunning UI, making it easy for users to find and join groups that align with their interests


## Feedback

If you have any feedback, please reach out to me at phyohan1234@gmail.com


## Authors

- [@phyohan18](https://www.github.com/phyohan18)



