function calculateTax(income, age, dependents) {
  //Membuat validasi dasar dari nilai parameter
  if (income < 0 || typeof income !== "number")
    return console.log("Invalid income");
  if (age < 0 || typeof age !== "number") return console.log("Invalid age");

  if (dependents < 0 || typeof dependents !== "number")
    return console.log("Invalid dependents");

  // Membuat validasi minimum umur untuk pajak
  if (age < 18) return console.log("Not eligible for tax");

  // Menghitung pajak berdasarkan besar penghasilan
  const calculateBaseTax = (income) => {
    if (income <= 10000) {
      return income * 0.1;
    } else if (income > 10000 || income <= 50000) {
      return income * 0.2;
    } else {
      return income * 0.3;
    }
  };
  let baseTax = calculateBaseTax(income);

  //Menghitung pengurangan pajak berdasarkan jumlah tanggungan yang dimiliki
  let deductionTax = baseTax - dependents * 500;

  //Validasi maksimal umur untuk pajak
  if (age >= 65) {
    deductionTax *= 0.2;
  }

  let USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  //Mengembalikan nilai pajak beserta method Math.max untuk membuat minimal pajak 0
  return console.log(
    `Here are the tax details: \nAge: ${age},\nDependents: ${dependents},\nIncome: ${USD.format(
      income
    )},\nthen the annual tax you have to pay is`,
    USD.format(Math.max(0, deductionTax))
  );
}

let income = 60000;
let age = 70;
let dependents = 3;
calculateTax(income, age, dependents)
