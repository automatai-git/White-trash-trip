import heroImg from '../assets/texas_hero_skull_1776277104906.png';
import heliImg from '../assets/heli_hogs_action_1776277120235.png';
import bbqImg from '../assets/texas_bbq_brisket_1776277135312.png';
import suvsImg from '../assets/convoy_suvs_1776277619429.png';
import pbrImg from '../assets/pbr_bull_riding_1776277637131.png';
import nascarImg from '../assets/nascar_racing_1776277654488.png';

export const TRIP_META = {
  title: "THE ULTIMATE TEXAS REDNECK WEEK",
  subtitle: "Helicopters • Hogs • Machine Guns • Bull Riding • Brisket • Honky Tonks",
  dates: "June 16-21, 2026",
  location: "Fort Worth & Central Texas",
  group: "10-12 Men | Ages ~30",
  weather: "33-37°C (91-99°F) — Hot, humid, and merciless.",
  basecamp: "Fort Worth Stockyards. Walkable honky tonks, weekly rodeo, live country music.",
  heroImage: heroImg
};

export const PRE_FLIGHT_CHECKLIST = [
  "Order the official 'Texas Redneck Week' Squad T-Shirts",
  "Sign all death waivers for HeliBacon",
  "Purchase extreme sports travel insurance (for the bull riding)",
  "Start drinking Shiner Bock to build liver tolerance",
  "Watch 'Urban Cowboy' to prepare mentally",
  "Pre-book the 15-passenger convoy van"
];

export const ITINERARY = [
  {
    id: "day-1",
    day: "Day 1",
    date: "Tuesday, June 16",
    theme: "Arrival & First Beer",
    headline: "Stockyards, Steaks, Billy Bob's",
    color: "#ff3333",
    events: [
      {
        time: "Afternoon",
        title: "Arrive & Check In. DFW to Basecamp.",
        description: "Rent 2-3 massive SUVs. Head straight to the Airbnb in the Fort Worth Stockyards area.",
        image: suvsImg
      },
      {
        time: "4:00 PM",
        title: "Fort Worth Herd Cattle Drive",
        description: "Catch the real longhorn cattle driven down the street. Browse western wear shops and buy everyone a cowboy hat.",
        image: heroImg
      },
      {
        time: "Evening",
        title: "Steaks at Cattlemen's",
        description: "Get the bone-in ribeye. Welcome to Texas.",
        image: bbqImg
      },
      {
        time: "Late Night",
        title: "Billy Bob's Texas",
        description: "The world's largest honky tonk. 120,000 sq ft, 30+ bar stations, live music, and real indoor bull riding.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "Wednesday, June 17",
    theme: "HOGS FROM HEAVEN",
    headline: "HeliBacon: Heli Hog Hunt + Machine Guns",
    color: "#ff7b00",
    events: [
      {
        time: "Morning",
        title: "Convoy to Bryan, TX",
        description: "2.5 hour drive southeast to HeliBacon HQ.",
        image: suvsImg
      },
      {
        time: "Midday",
        title: "Helicopter Hog Hunting",
        description: "The crown jewel. 2-hour flight. Suppressed full-auto AR-15. No bag limit. You will shoot from an airborne Bell 212 HP twin-engine helicopter.",
        image: heliImg
      },
      {
        time: "Afternoon",
        title: "Heavy Metal Range",
        description: "Post-hunt chaser: M134 Minigun, M2 .50 cal, MG42 Buzzsaw.",
        image: heroImg
      }
    ]
  },
  {
    id: "day-3",
    day: "Day 3",
    date: "Thursday, June 18",
    theme: "HEAVY METAL & PBR",
    headline: "More Guns, More Bulls",
    color: "#999999",
    events: [
      {
        time: "Morning",
        title: "Texas Gun Experience",
        description: "Indoor range with massive full-auto selection.",
        image: heliImg
      },
      {
        time: "Evening",
        title: "PBR Stockyards Showcase",
        description: "Professional Bull Riders. The most violent 8 seconds in sports.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-4",
    day: "Day 4",
    date: "Friday, June 19",
    theme: "TEXAS BBQ PILGRIMAGE",
    headline: "Goldee's & Rodeo",
    color: "#8B4513",
    events: [
      {
        time: "Morning (Early)",
        title: "Goldee's BBQ",
        description: "The #1 BBQ joint in Texas. Arrive with lawn chairs and beers.",
        image: bbqImg
      },
      {
        time: "7:30 PM",
        title: "Stockyards Championship Rodeo",
        description: "Cowtown Coliseum. Bull riding, broncos, barrel racing. Afterwards, hit the honky tonk.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-5",
    day: "Day 5",
    date: "Saturday, June 20",
    theme: "THE GRAND FINALE",
    headline: "Bass Pro, Rodeo, Billy Ray",
    color: "#0055ff",
    events: [
      {
        time: "Midday",
        title: "NASCAR Racing Experience",
        description: "Drive an actual NASCAR stock car around Texas Motor Speedway. 8 laps at up to 160 mph.",
        image: nascarImg
      },
      {
        time: "10:00 PM",
        title: "Billy Ray Cyrus Live",
        description: "The absolute perfect closer for your redneck week - 'Achy Breaky Heart' live with 12 Norwegian guys in cowboy hats.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "Sunday, June 21",
    theme: "Recovery & Departure",
    headline: "Whataburger, Buc-ee's",
    color: "#111111",
    events: [
      {
        time: "Morning",
        title: "Whataburger Breakfast",
        description: "Honey Butter Chicken Biscuit for breakfast. A Texas religious experience.",
        image: bbqImg
      },
      {
        time: "Afternoon",
        title: "Fly Home",
        description: "Arrive in Norway sunburned, full of brisket, and with helicopter hog hunting footage.",
        image: suvsImg
      }
    ]
  }
];

export const CHECKLIST = [
  "Cowboy hat from the Stockyards",
  "Cowboy boots (even cheap ones)",
  "Whataburger Honey Butter Chicken Biscuit",
  "Stop at Buc-ee's for jerky",
  "Drink Shiner Bock",
  "Eat brisket from butcher paper with hands",
  "Ride a mechanical bull at Billy Bob's",
  "Say 'y'all' unironically at all times",
  "Eat chicken fried steak",
  "Photograph the 'Don't Mess With Texas' sign"
];
