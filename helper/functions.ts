function formatDate(selectedDate: Date | null | undefined) {
  const date = new Date(selectedDate!);

  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function formatTime(hour: number, minute: number) {
  let formatedHour = `${hour}`;
  let formatedMinute = `${minute}`;

  if (hour <= 9) {
    formatedHour = `0${hour}`;
  }

  if (minute <= 9) {
    formatedMinute = `0${minute}`;
  }

  return `${formatedHour} : ${formatedMinute}`;
}

function truncateString(str: string | undefined, len: number) {
  if (str && str?.length > len) {
    return str?.substring(0, len) + "...";
  }
  return str;
}

function extractDate(dateString: string) {
  const dateObj = new Date(dateString);
  const formattedDate = dateObj.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  return formattedDate;
}

function totalPriceCalculation(end: number, start: number, price: number) {
  let totalPrice = price;

  if (end !== start) {
    totalPrice = (end - start) * price;
  }

  return totalPrice.toFixed(2);
}

function isFilled(obj: {}) {
  return Object.values(obj).every((value) => value !== "" && value !== false);
}

function getMonthName(num: number | null) {
  const monthName: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  return monthName[num! - 1];
}

export {
  formatDate,
  formatTime,
  truncateString,
  extractDate,
  totalPriceCalculation,
  isFilled,
  getMonthName,
};
