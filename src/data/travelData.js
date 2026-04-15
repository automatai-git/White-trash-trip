import heroImg from '../assets/texas_hero_skull_1776277104906.png';
import heliImg from '../assets/heli_hogs_action_1776277120235.png';
import bbqImg from '../assets/texas_bbq_brisket_1776277135312.png';

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
        title: "Arrive & Check In",
        description: "Fly into DFW. Rent 2-3 large SUVs or a 15-passenger van. Head straight to the Airbnb in the Fort Worth Stockyards area.",
        icon: "✈️"
      },
      {
        time: "4:00 PM",
        title: "Fort Worth Herd Cattle Drive",
        description: "Walk Exchange Avenue. Catch the real longhorn cattle driven down the street. Browse western wear shops and buy everyone a cowboy hat.",
        icon: "🐂"
      },
      {
        time: "Evening",
        title: "Steaks at Cattlemen's or Lonesome Dove",
        description: "Get the bone-in ribeye. You're in Texas.",
        icon: "🥩"
      },
      {
        time: "Late Night",
        title: "Billy Bob's Texas",
        description: "The world's largest honky tonk. 120,000 sq ft, 30+ bar stations, live music, and real indoor/mechanical bull riding.",
        icon: "🍻"
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
    image: heliImg,
    events: [
      {
        time: "Morning",
        title: "Drive to Bryan, TX",
        description: "2.5 hour drive southeast to HeliBacon HQ.",
        icon: "🚙"
      },
      {
        time: "Midday",
        title: "Helicopter Hog Hunting",
        description: "The crown jewel. 1-hour safety course, 2-hour flight over 300,000 acres. Suppressed AR-15 (full-auto upgrade required). No bag limit. You will shoot from an airborne Bell 212 HP twin-engine helicopter.",
        icon: "🚁"
      },
      {
        time: "Afternoon",
        title: "Machine Gun Range",
        description: "Post-hunt chaser: M134 Minigun (3,000 rounds/min), M2 'Ma Deuce' .50 cal, MG42 Buzzsaw, Tommy Guns.",
        icon: "💥"
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
        title: "Texas Gun Experience (Grapevine)",
        description: "If HeliBacon wasn't enough, we hit Texas Gun Experience. Indoor range with massive full-auto selection.",
        icon: "🔫"
      },
      {
        time: "Evening",
        title: "PBR Stockyards Showcase",
        description: "Cowtown Coliseum. This is Professional Bull Riders. The big leagues. The most violent 8 seconds in sports.",
        icon: "🤠"
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
    image: bbqImg,
    events: [
      {
        time: "Morning (Early)",
        title: "Line up at Goldee's BBQ",
        description: "The #1 BBQ joint in Texas (Texas Monthly). Arrive by 8:30 AM with lawn chairs and beers. Doors open at 11:00 AM. Worth the wait.",
        icon: "🔥"
      },
      {
        time: "Afternoon",
        title: "Meat Coma",
        description: "Eat obscene amounts of brisket, ribs, and sausage on butcher paper. Return to basecamp to recover.",
        icon: "💤"
      },
      {
        time: "7:30 PM",
        title: "Stockyards Championship Rodeo",
        description: "Cowtown Coliseum. Bull riding, broncos, barrel racing. Afterwards, hit the honky tonk.",
        icon: "🐎"
      }
    ]
  },
  {
    id: "day-5",
    day: "Day 5",
    date: "Saturday, June 20",
    theme: "THE GRAND FINALE",
    headline: "Bass Pro, Rodeo, Billy Ray Cyrus",
    color: "#0055ff",
    events: [
      {
        time: "Morning",
        title: "Bass Pro Shops (Grapevine)",
        description: "Buy matching camo gear for the group photo. Massive aquarium, shooting arcade, tactical outdoor everything.",
        icon: "🎣"
      },
      {
        time: "Midday",
        title: "NASCAR Racing Experience",
        description: "Drive an actual NASCAR stock car around Texas Motor Speedway. 8 laps at up to 160 mph.",
        icon: "🏎️"
      },
      {
        time: "10:00 PM",
        title: "Billy Ray Cyrus at Billy Bob's",
        description: "CONFIRMED: Billy Ray Cyrus live. The absolute perfect closer for your redneck week - 'Achy Breaky Heart' live with 12 Norwegian guys in cowboy hats. Peak redneck achievement.",
        icon: "🎸"
      }
    ]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "Sunday, June 21",
    theme: "Recovery & Departure",
    headline: "Whataburger, Buc-ee's, Airport",
    color: "#111111",
    events: [
      {
        time: "Morning",
        title: "Whataburger Breakfast",
        description: "Honey Butter Chicken Biscuit for breakfast. A Texas religious experience.",
        icon: "🍔"
      },
      {
        time: "Midday",
        title: "Buc-ee's Final Stop",
        description: "Grab souvenirs, beef jerky for the flight home, and kolaches.",
        icon: "🦫"
      },
      {
        time: "Afternoon",
        title: "Fly Home",
        description: "Depart DFW. Arrive in Norway sunburned, full of brisket, and with helicopter hog hunting footage that will make everyone jealous.",
        icon: "🛫"
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
