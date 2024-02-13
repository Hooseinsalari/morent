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

export { formatDate, formatTime };
