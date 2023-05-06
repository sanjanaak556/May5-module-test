
const sortButtons = document.querySelectorAll(".sort");
fetch('MOCK_DATA.json')
  .then(response => response.json())
  .then(data =>{
    
    let datas = data;
    console.log(datas);
    displayData(datas);
  })
  .catch(error => console.error(error));

  function displayData(datas){
    htmlData=``
    for(let data of datas){
      htmlData=`
        <tr>
        <td> ${data.id} </td>
        <td> ${data.first_name} ${data.last_name}  </td>
        <td> ${data.gender} </td>
        <td> ${data.class} </td>
        <td> ${data.marks} </td>
        <td> ${data.passing} </td>
        <td> ${data.email} </td>
        </tr>
      `
      result.innerHTML += htmlData
    }
  }

sortButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const sortBy = button.getAttribute("data-sort");
    switch (sortBy) {
      case "name-asc":
        data.sort((a, b) => a.first_name.localeCompare(b.first_name));
        break;
      case "name-desc":
        data.sort((a, b) => b.first_name.localeCompare(a.first_name));
        break;
      case "marks":
        data.sort((a, b) => a.marks - b.marks);
        break;
      case "passing":
        const passingData = studentsData.filter((student) => student.passing);
        data(passingData);
        return;
      case "data":
        studentsData.sort((a, b) => a.class.localeCompare(b.class));
        break;
      case "gender":
        const femaleData = studentsData.filter((student) => student.gender === "female");
        const maleData = studentsData.filter((student) => student.gender === "male");
        tablebody.innerHTML = "";
        
        return;
    }
    displayData(data);
  });
});
