module["exports"] = [
  {value: "com", good: true},
  {value: "info", good: true},
  {value: "name", good: true},
  {value: ".net", good: false},    
  {value: "....com", good: false},
  {value: "._.info", good: false},
  {value: "./name", good: false},
  {value: "./.net", good: false}

];
