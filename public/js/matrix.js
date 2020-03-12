function mapdata() {

  let nodes = [];
  let edges = [];
  let d = 0;
  let d2 = 0;
  let obj1;
  let i;
  let j;

  // Write your
  function nodesEdges(n) {

    for (i = 0; i < n; i++) {
      for (j = 0; j < n; j++) {
        obj1 = {
          data: { id: `N${i}-${j}` },
        };

        console.log('>>>>', obj1);


        nodes.push(obj1);




        if ((j + 1) < n-1) {
          obj1 = { data: { id: `${d++}`, source: `N${i}-${j}`, target: `N${i}-${j + 1}` } };
        }
        edges.push(obj1);

        if (j - 1 >= 0) {
          obj1 = { data: { id: `${d++}`, source: `N${i}-${j}`, target: `N${i}-${j - 1}` } };
        }
        edges.push(obj1);


        if ((i + 1) < n-1) {

          obj1 = { data: { id: `${d++}`, source: `N${i}-${j}`, target: `N${i + 1}-${j}` } };
          console.log(obj1);
        }
        edges.push(obj1);
        if (i - 1 >= 0) {
          obj1 = { data: { id: `${d++}`, source: `N${i}-${j}`, target: `N${i - 1}-${j}` } };
        }
        edges.push(obj1);

        if ((i + 1) < n && (j + 1) < n) {
          obj1 = { data: { id: `${d++}`, source: `N${i}-${j}`, target: `N${i + 1}-${j + 1}` } };

        } edges.push(obj1);
        if (i < n-1 && j < n-1) {
          obj1 = { data: { id: `${d++}`, source: `N${i}-${j+1}`, target: `N${i+1 }-${j}` } };

        } edges.push(obj1);

      }
    }
       
    // for(let i=0;i<n-1;i++){
    //   for(let j=0;j<n-1;j++){
    //     obj={
    //       id:`N${i}-${j+1}`,
    //       source:`N${i}-${j+1}`,
    //       target:`N${i+1}-${j}`
    //     };
    //     let content={
    //       data:obj
    //     };
    //     edges.push(content);
    //   }
    // }

  }



  nodesEdges(3);


  elements = {
    nodes,
    edges
  };

  console.log({ d });
  console.log(edges.length);
  console.log(nodes.length);
  return elements;

}
module.exports.mapdata = mapdata;


