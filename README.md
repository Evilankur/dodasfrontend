------ Documentation -------

->Hero Page

The Hero Page is the main page of the app, and it performs several key functions. Here's a detailed breakdown of what the code does:

1.Several modules, including axios, react, react-spinners, and next components, are imported to support the functionality of the page.

2.The useState hook is used to define key states such as searchTerm, loading, sidebarShow, and data. These states are used throughout the page to manage the user's interactions and display the search results.

3.The payload variable is defined as an object that includes some search parameters, which are later used to make API calls.

4.An API call is made to display the initial data using the base URL "https://dodas.xyz/api/search_record". The config file is also defined, which contains the configuration options for the API request.

5.The useEffect hook is used to make a POST request to the API endpoint once when the component is mounted. Axios is used to handle the request, and the response data is set to the data state.

6.The handleSearch event handler function is defined, which is called when the user submits the search form. This function uses axios to make a POST request to the API endpoint with the search parameters and sets the response data to the data state.

7.The page is rendered with a navigation bar that includes links and buttons. A search form with an input field and a submit button is also included. A loading spinner is displayed while the search results are being fetched. Finally, the search results are displayed in the content section of the page.

To summarize, the Hero Page provides users with an easy-to-use interface for searching and displaying data. The use of hooks and axios allows for efficient and dynamic data retrieval, making for a seamless user experience.
