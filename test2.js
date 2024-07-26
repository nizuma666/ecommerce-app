function calculateShippingCost(destination, weight, priority) {
  //validasi destination harus antara domestic dan international
  if (destination !== "domestic" && destination !== "international") {
    return console.log("Invalid destination");
  }
  // validasi weight harus lebih dari 0
  if (weight <= 0) return console.log("Invalid weight");

  // validasi priority harus antara strandard, express, dan priority
  if (
    priority !== "standard" &&
    priority !== "express" &&
    priority !== "priority"
  ) {
    return console.log("Invalid priority");
  }
  // menghitung biaya pengiriman domestic berdasarkan weight
  const calculateDomesticCost = (priority, weight) => {
    if (priority == "standard") {
      return weight * 5;
    } else if (priority == "express") {
      return weight * 10;
    } else if (priority == "priority") {
      weight * 20;
    }
  };

  // validasi biaya pengiriman international berdasarkan weight
  const calculateInternationalCost = (priority, weight) => {
    if (priority == "standard") {
      return weight * 15;
    } else if (priority == "express") {
      return weight * 25;
    } else if (priority == "priority") {
      weight * 50;
    }
  };

  const res = "The total shipping cost you have to pay is";

  // fungsi untuk format dollar
  let USD = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  
  // menghitung biaya pengiriman domestic jika weight lebih dari 10
  if (destination == "domestic") {
    if (weight > 10) {
      return console.log(
        res,
        USD.format(calculateDomesticCost(priority, weight) + 10)
      );
    }
    return console.log(
      res,
      USD.format(calculateDomesticCost(priority, weight))
    );
  }
 
  // menghitung biaya pengiriman international jika weight lebih dari 10
  if (destination == "international") {
    if (weight > 5) {
      return console.log(
        res,
        USD.format(calculateInternationalCost(priority, weight) + 50)
      );
    }
    return console.log(
      res,
      USD.format(calculateInternationalCost(priority, weight))
    );
  }
}

//memanggil fungsi dengan paramter yang dibutuhkan
calculateShippingCost("international", 11, "express");
