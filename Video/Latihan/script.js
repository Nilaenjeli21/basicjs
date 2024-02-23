const message = [
    {type: 'A', name: 'Nila 1'},
    {type: 'A', name: 'Nila 2'},
    {type: 'B', name: 'Nila 3'},
    {type: 'B', name: 'Nila 4'},
    {type: 'C', name: 'Nila 5'},
    {type: 'C', name: 'Nila 6'},
    {type: 'D', name: 'Nila 7'},
    {type: 'D', name: 'Nila 8'},
    {type: 'E', name: 'Nila 9'},
    {type: 'E', name: 'Nila 10'},
  ];
 
  const k = {};
   message.forEach(function (data, index) {
     if (!k[data.type]) {
        k[data.type]=[];
        
     }
     k[data.type].push({index, name: data.name});
   })

  console.log(message,k);