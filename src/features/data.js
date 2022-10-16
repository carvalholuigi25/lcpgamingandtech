/* sources: 
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch 
https://developer.mozilla.org/en-US/docs/Web/API/fetch
*/

function getOptions(mymethod = "GET", data = {}) {
    var options = {};

    if(mymethod == "POST" || mymethod == "PUT" || mymethod == "PATCH" || mymethod == "DELETE") {
       options = {
            method: mymethod,
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data)
      };
    } else {
        options = {
            method: mymethod,
            mode: 'cors',
            cache: 'no-cache', 
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrerPolicy: 'no-referrer'
        };
    }

    return options;
}

function fetchData(apiname = "games", mymethod = "GET", data = {}) {
    return fetch(`https://localhost:3001/${apiname}`, getOptions(mymethod, data)).then(response => response.json());
}

async function asyncFetchData(apiname = "games", mymethod = "GET", data = {}) {
  const response = await fetch(`https://localhost:3001/${apiname}`, getOptions(mymethod, data));
  return response.json();
}

export { fetchData, asyncFetchData }