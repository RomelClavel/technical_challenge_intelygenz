# Technical Challenge Intelygenz (Romel Clavel)

Decided to keep the API key for ease of revisions. Didn't have to input any sensible info to obtain it. It blocks after making to many requests.

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
