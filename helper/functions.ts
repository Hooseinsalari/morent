function formatDate(selectedDate: Date | null | undefined) {
  const date = new Date(selectedDate!);

  const day = date.getDate();
  const month = date.toLocaleString("en", { month: "short" });
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
}

function formatTime(selectedTime: any) {
  const time = selectedTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  });

  return `${time}`;
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

function numberOfDays(start: number, end: number) {
  const startDate = new Date(`${start}`);
  const endDate = new Date(`${end}`);

  let timeDifference = endDate.getTime() - startDate.getTime();

  const numberOfDays = Math.ceil(
    (timeDifference || 86400000) / (1000 * 60 * 60 * 24)
  );

  return numberOfDays.toFixed(2);
}

export { formatDate, formatTime, truncateString, extractDate, numberOfDays };
