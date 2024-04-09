const filePath = 'Pagination.json';

fetch(filePath)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);
    renderTable_and_Paging(data,1)
  })
  .catch(error => {
    console.error('Error fetching JSON:', error);
  });

function renderTable_and_Paging(data, currentPage) {
    const recordsPerPage = 5; 
  
    const table = document.createElement('table');
    const headerRow = table.insertRow();
    const keys = Object.keys(data[0]);
    keys.forEach(key => {
      const th = document.createElement('th');
      th.textContent = key;
      headerRow.appendChild(th);
    });
  
    const startIdx = (currentPage - 1) * recordsPerPage;
    const endIdx = startIdx + recordsPerPage;
    const paginatedData = data.slice(startIdx, endIdx);
  
    const tbody = table.createTBody();
    paginatedData.forEach(rowData => {
      const tr = tbody.insertRow();
      keys.forEach(key => {
        const td = tr.insertCell();
        td.textContent = rowData[key];
      });
    });
  
    const container = document.getElementById('tableContainer');
    container.innerHTML = '';
    container.appendChild(table);
  
    
    const totalPages = Math.ceil(data.length / recordsPerPage);
    const paginationDiv = document.createElement('div');
    paginationDiv.classList.add('pagination');
  
    
    const firstButton = document.createElement('button');
    firstButton.textContent = 'First';
    firstButton.addEventListener('click', () => {
      renderTable_and_Paging(data, 1);
    });
    paginationDiv.appendChild(firstButton);
  
   
    const pageNumbersDiv = document.createElement('div');
    pageNumbersDiv.classList.add('page-numbers');
    for (let i = 2; i <= totalPages; i++) { 
      const pageNumberButton = document.createElement('button');
      pageNumberButton.textContent = i;
      pageNumberButton.addEventListener('click', () => {
        renderTable_and_Paging(data, i);
      });
      pageNumbersDiv.appendChild(pageNumberButton);
    }
    paginationDiv.appendChild(pageNumbersDiv);
  
   
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Previous';
    nextButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        renderTable_and_Paging(data, currentPage - 1);
      }
    });
    paginationDiv.appendChild(nextButton);
  
    container.appendChild(paginationDiv);
}