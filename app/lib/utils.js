export const getPricePerItem = (items, unique) => {
  if (items.length === 0) return [];

  // Create a count map to track occurrences of each item id
  const itemCountMap = items.reduce((acc, item) => {
    acc[item.id] = (acc[item.id] || 0) + 1;
    return acc;
  }, {});

  // Map through unique items and calculate the total price
  return unique.map((product) => ({
    id: product.id,
    amount: product.price * (itemCountMap[product.id] || 0),
  }));
};

export const getTotal = (array) => {
  return array.reduce((a, item) => a + item.amount, 0);
};

export const roundWithTwoDec = (num) =>
  (Math.round(num * 100) / 100).toFixed(2);

export const capitalize = (str) => {
  if (str.includes("_")) {
    const tempArr = str.split("_");
    tempArr.forEach((element, index) => {
      tempArr[index] = element[0].toUpperCase() + element.slice(1);
    });
    return tempArr.join(" ");
  }
  return str[0].toUpperCase() + str.slice(1);
};

export const fetchData = async (url) => {
  try {
    let res = await fetch(url);
    if (res.status >= 400) {
      throw new Error(`Error fetching ${url}: ${res.status}`);
    }
    let data = await res.json();
    return data;
  } catch (error) {
    console.error(`Fetch failed for ${url}:`, error);
    throw error; // Rethrow error to handle it at the top level
  }
};
