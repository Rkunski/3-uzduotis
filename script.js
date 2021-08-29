var valstybes = [
  {name: "Portugalija",sq: 92212, citizen:10347892},
  {name: "Amerika",sq: 42549000, citizen:964920000 },
  {name: "Lietuva",sq: 65300, citizen:2793694},
  {name: "Ispanija",sq:505990, citizen:47450795},
  {name: "Anglija",sq: 130395, citizen:55619400 }
]
for (var round = 1, i = 0; i < valstybes.length; i++) {
valstybes[i].round =(valstybes[i].sq * 1000000) / valstybes[i].citizen;
  console.log("Šalis: " + valstybes[i].name + ", joje gyvena " + (valstybes[i].citizen /1000000).toFixed(2)+ " mln. gyventojų. Valstybės plotas " + valstybes[i].sq + " km², plotas tenkantis vienam gyventojui: " + (valstybes[i].round).toFixed(2) + " m².");
}
