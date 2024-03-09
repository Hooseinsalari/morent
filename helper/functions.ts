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
    return str?.substring(0, len) + "..."
  }
  return str;
}

export { formatDate, formatTime, truncateString };
