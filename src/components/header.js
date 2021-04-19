
const Header = (title, date, temp) => {
  const headerDiv = document.createElement("div");
  const spanDate = document.createElement("span");
  const spanTemp = document.createElement("span");
  const heading = document.createElement("h1");
  
  headerDiv.appendChild(spanDate);
  headerDiv.appendChild(heading);
  headerDiv.appendChild(spanTemp);
  headerDiv.classList.add("header");
  spanDate.classList.add("date");
  spanTemp.classList.add("temp");

  spanDate.textContent = date;
  spanTemp.textContent = temp;
  heading.textContent = title;

return headerDiv

  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}



const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  console.log(selector)
  let b = document.querySelector(selector)
  b.appendChild(Header("Lambda Times", "04/19/21", "51 degrees"))

  
}


export { Header, headerAppender }
