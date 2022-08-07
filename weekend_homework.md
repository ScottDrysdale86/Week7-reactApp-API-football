# Weekend Homework: React Application with Requests

### Learning Objectives

- Be able to create a multi-component web application, with React
- Be able to make API requests to load JSON data into your application

## Brief

Your task is to create an application that makes a request to an API and displays the data.

Suggested APIs:

1. Studio Ghibli: https://ghibliapi.herokuapp.com/
2. Reddit: (Append `.json` to any Reddit URL - for example https://www.reddit.com/r/javascript.json)
3. Guardian search: https://content.guardianapis.com/search?q=brexit&format=json&api-key=test


These APIs all allow browser requests without authentication or keys. (In the case of the Guardian, `api-key=test` should be sufficient.)

There is a more extensive list of public APIs [here](https://github.com/public-apis/public-apis) that have varying degrees of accessibility. If you choose to use a different API, make sure you are able to load the data into your application without issue, so that you can spend the time focussing on building your application. We suggest you do not use an API that requires authentication (OAuth), though using an API which requires a key is fine, as long as you are able to get a key quickly and easily.

### MVP

- The application should display data from an API request.
- The application should have a clear separation of concerns (multiple components)
- Take input from the user to update the page. You could update the page by filtering or manipulating the data on user interaction, or you might make further API requests to load more data that is then displayed.

### Extensions

Looking into a library to visual the data.

- [Leaflet](https://leafletjs.com/) is an open-source library for rendering maps
- [Google Charts](https://developers.google.com/chart/) is a library for rendering charts and graphs
- [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) is a drawing surface for JavaScript.

You will need to use the library's documentation to integrate it into your application.

## Planning

- Look at the JSON you are going to be loading into your app and based on the data, draw a wireframe
- Start by loading the data from the API into your application and checking that it has loaded, before doing any work on the views
- Plan your components and draw a diagram of the data flow through the application

### PDA Reminder:

As part of this homework you are required to take screenshots of the following:

Show an API being used within your program. Take a screenshot of:

```
- The code that uses or implements the API
- The API being used by the program whilst running
```

- Go to your [PDA Checklist](https://github.com/codeclan/pda/tree/master/Evidence%20Gathering%20Portfolio)

- Submit your PDA evidence (screenshots, etc.) to your own PDA repo

PDA Reference: P 16
