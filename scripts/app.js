let table = document.querySelector("tbody")

let getData = async () => {
  let data = await fetch("http://localhost:3000/data")
  let parsedData = await data.json();
  parsedData.map(data => {
    let row = document.createElement('tr')
    let id = document.createElement("td")
    let fname = document.createElement("td")
    let lname = document.createElement("td")
    let email = document.createElement("td")
    let job = document.createElement("td")
    let city = document.createElement("td")

    id.innerHTML = data.id
    fname.innerHTML = data.last_name
    lname.innerHTML = data.first_name
    email.innerHTML = data.email
    job.innerHTML = data.job_title
    city.innerHTML = data.city

    row.append(id, fname, lname, email, job, city)

    row.addEventListener('mouseenter', () => {
      if (row.style.background === "transparent" || row.style.background === "white") {
        row.style.background = "navy"
        row.style.color = "white"
      }
      row.style.cursor = "pointer"
    })

    row.addEventListener('mouseleave', () => {
      row.style.background = "white"
      row.style.color = "black"
    })
    table.appendChild(row)
  })
}


getData()

