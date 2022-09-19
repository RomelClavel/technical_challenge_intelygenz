# Technical Challenge Intelygenz (Romel Clavel)

Decided to keep the API key for ease of revisions. Didn't have to input any sensible info to obtain it. It blocks after making to many requests.

## How to Run

        git clone https://github.com/RomelClavel/technical_challenge_intelygenz.git
        cd lector-rss
        npm install

        // To run on dev mode
        npx expo start

        // To run on production
        npx expo start --no-dev --minify

        // After that scan the QR code with the Expo app and you're ready to go

## Third Party Libraries

### Dev Dependencies

-   Typescript and all it's sub-libraries: to write type safe code. Minimizing errors during development and increasing development speed once the initial setup is done.
-   Eslint and all it's sub-libraries: to maintain a consistent coding style. That way multiple developers could jump on the project and the code would stay consistent.
-   Prettier: For readability and clean code.

### Dependencies

-   Expo: We use expo for the development of the app. It allows us ease and speed of development. I removes the extra difficulty of the development of a react native app.
-   React Native Async Storage: As storage. We use it to store the detailed article clicked on the article list to save its data adn render it on the next view. We also use it to implement the cache storage for the offline functionality.
-   React Native SVG: To render icons in the app.
-   React Navigation: For the detailed article page. The app reaches that page via Stack Navigation.

## Functional Extra Credits

-   Offline functionality was implemented using the Expo Async Storage. All the logic is implemented in the store folder and its used in the News Service.
-   The search by title bar can be seen in the Top News Section. Its implemented as its own component for reusability.

## Interesting stuff that happened

-   When I read the extra credit for the Search by title I tought that had to be done in a differet View, so I used Bottom tab navigation and configured It to work almost the same as the Top News Section. When I later read the extra credit more carefully I found out that the search was supposed to be done on the same View as the Article List.
