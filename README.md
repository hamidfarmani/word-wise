# WordWise - English Language Assistant

WordWise is a Next.js application that serves as an English language assistant. It takes a word as input and utilizes the ChatGPT language model to find its meaning, usage in a sentence with suggestion to an example of that usage in a Youtube video, synonyms, antonyms, and word suggestions at various language proficiency levels. The retrieved information is then saved in a database using Prisma, with the database hosted on PlanetScale.

## Features

- Input a word and get comprehensive information about it, including meaning, usage in a sentence, synonyms, antonyms, and suggestions for similar words at different language proficiency levels.
- Utilizes ChatGPT, a powerful language model, to understand and analyze the given word.
- Stores the retrieved information in a PlanetScale-hosted database using Prisma for future reference.

## Prerequisites

- Node.js and npm installed on your machine.
- A PlanetScale account for setting up the database. (or you can change the DATABASE_URL to a local one)

## Getting Started

1. Clone the repository:

```
git clone https://github.com/hamidfarmani/word-wise.git
cd word-wise
```

2. Install the dependencies:

```
yarn
```

3. Run the project:

```
yarn run dev
```

4. Open your web browser and navigate to `http://localhost:3000` to access the WordWise application.

## How It Works

1. Enter a word in the input field on the WordWise website.
2. If the word doesn't exist in our database, the application sends the word to the ChatGPT language model to gather relevant information, including meaning, usage in a sentence, synonyms, antonyms, and word suggestions at different language proficiency levels.
3. The retrieved data is saved to the PlanetScale-hosted database using Prisma for future reference and quick retrieval.
4. The application displays the information about the word to the user, providing valuable insights into the word's usage and related vocabulary.

## Technologies Used

- Next.js: A React framework for building server-rendered applications.
- OpenAI ChatGPT API: An AI language model from OpenAI used for language understanding and generation.
- Prisma: A database toolkit and ORM used for efficient database interactions.
- PlanetScale: A cloud-native database platform used to host and manage the database.

## Contributing

Contributions are welcome! If you find any issues or have ideas to enhance WordWise, please feel free to open a pull request. We appreciate any improvements or bug fixes that can make the WordWise application even better.

If you're looking for ideas to contribute, consider implementing one of the following features:

- **Accounts for Users**: Create a user authentication system that allows users to create accounts, log in, and save their progress. This feature can enhance user experience and provide personalized content.

- **Word of the Day**: Introduce a "Word of the Day" feature that showcases a new word each day with its meaning, usage, and interesting facts. Users can subscribe to receive daily notifications and expand their vocabulary over time.

- **Word Game Challenges**: Develop word-based mini-games or challenges within the application. For example, users can compete against the clock to find synonyms, complete word puzzles, or unscramble jumbled words.

- **Language Progress Tracker**: Implement a feature that allows users to track their language learning progress over time. Users can see their improvements in vocabulary, grammar, and language proficiency through interactive charts and statistics.

- **Word Associations**: Enable users to explore word associations and semantic relationships. When a user searches for a word, the application can display a web of related words, creating a visually engaging experience.

- **Multilingual Definitions**: Expand the application to provide definitions and information in multiple languages. This will benefit users who are learning English as a second language and can help bridge language barriers.

- **Vocabulary Challenges**: Organize vocabulary challenges or competitions within the user community. Users can participate in quizzes, word-building competitions, or word usage contests to test their language skills.

- **Language Localization**: Implement support for multiple languages to make WordWise accessible to a wider audience. Users should be able to choose their preferred language for a more inclusive experience.
