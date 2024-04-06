// svg
import Home from "@/public/svg/home.svg";
import Car from "@/public/svg/car.svg";
import Insight from "@/public/svg/chart.svg";
import Wallet from "@/public/svg/empty-wallet-change.svg";
import Inbox from "@/public/svg/message.svg";
import Calender from "@/public/svg/calendar.svg";

// URL
export const BASE_API_URL = process.env.NEXT_PUBLIC_BASE_API_URL;

export const citiesInIran: { id: number; name: string }[] = [
  { id: 1, name: "Tehran" },
  { id: 2, name: "Mashhad" },
  { id: 3, name: "Isfahan" },
  { id: 4, name: "Tabriz" },
  { id: 5, name: "Shiraz" },
  { id: 6, name: "Ahvaz" },
  { id: 7, name: "Qom" },
  { id: 8, name: "Kermanshah" },
  { id: 9, name: "Rasht" },
  { id: 10, name: "Kerman" },
  { id: 11, name: "Hamedan" },
  { id: 12, name: "Yazd" },
  { id: 13, name: "Arak" },
  { id: 14, name: "Esfahan" },
  { id: 15, name: "Zahedan" },
  { id: 16, name: "Qazvin" },
  { id: 17, name: "Khorramabad" },
  { id: 18, name: "Urmia" },
  { id: 19, name: "Bandar Abbas" },
  { id: 20, name: "Zanjan" },
];

export const citiesCoordinates = [
  { name: "Tehran", lat: 35.6892, lng: 51.389 },
  { name: "Mashhad", lat: 36.2605, lng: 59.6168 },
  { name: "Isfahan", lat: 32.6546, lng: 51.6679 },
  { name: "Shiraz", lat: 29.5916, lng: 52.5839 },
  { name: "Tabriz", lat: 38.0806, lng: 46.2919 },
  { name: "Ahvaz", lat: 31.3183, lng: 48.6706 },
  { name: "Qom", lat: 34.6401, lng: 50.8764 },
  { name: "Kermanshah", lat: 34.3142, lng: 47.0659 },
  { name: "Rasht", lat: 37.2806, lng: 49.5832 },
  { name: "Kerman", lat: 30.2832, lng: 57.0788 },
  { name: "Hamedan", lat: 34.7993, lng: 48.5146 },
  { name: "Yazd", lat: 31.8795, lng: 54.2666 },
  { name: "Arak", lat: 34.0917, lng: 49.6892 },
  { name: "Esfahan", lat: 32.6546, lng: 51.6679 },
  { name: "Zahedan", lat: 29.4963, lng: 60.8629 },
  { name: "Qazvin", lat: 36.27, lng: 50.0049 },
  { name: "Khorramabad", lat: 33.4878, lng: 48.3551 },
  { name: "Urmia", lat: 37.5527, lng: 45.0761 },
  { name: "Bandar Abbas", lat: 27.1865, lng: 56.2808 },
  { name: "Zanjan", lat: 36.6736, lng: 48.4784 },
];

export const carTypes: string[] = [
  "Sport",
  "SUV",
  "MPV",
  "Sedan",
  "Coupe",
  "Hatchback",
];

export const carCapasity: string[] = ["2", "4", "6", "8"];

export const mainMenuItems = [
  { icon: Home, item: "Dashboard" },
  { icon: Car, item: "Car Rent" },
  { icon: Insight, item: "Insight" },
  { icon: Wallet, item: "Reimburse" },
  { icon: Inbox, item: "Inbox" },
  { icon: Calender, item: "Calender" },
];
