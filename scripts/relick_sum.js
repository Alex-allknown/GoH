function relicSum(relicParts) {
  for (let material in relicParts) {
    if (relicParts.hasOwnProperty(material) && sum.hasOwnProperty(material)) {
      sum[material] += relicParts[material];
    }
  }
}

let sum = { 
  H1: 0, H2: 0, H3: 0, H4: 0, H5: 0, H6: 0, H7: 0, H8: 0, H9: 0, 
  C1: 0, C2: 0, C3: 0 
};
console.log(sum);
