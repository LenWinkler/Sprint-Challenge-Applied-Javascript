// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

let topicsDiv = document.querySelector('.topics');
console.log(topicsDiv);

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response)
        response.data.topics.forEach(element => {
            let newTab = TabCreator(element);
            topicsDiv.appendChild(newTab);
        });
    })
    .catch(error => {
        console.log('something went wrong', error)
    })

    function TabCreator(obj) {
        // element
        let div = document.createElement('div');

        // class
        div.classList.add('tab');

        // //content
        div.textContent = obj;

        return div;
    }