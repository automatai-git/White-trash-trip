import heroImg from '../assets/texas_hero_skull_1776277104906.png';
import heliImg from '../assets/heli_hogs_action_1776277120235.png';
import bbqImg from '../assets/texas_bbq_brisket_1776277135312.png';
import suvsImg from '../assets/convoy_suvs_1776277619429.png';
import pbrImg from '../assets/pbr_bull_riding_1776277637131.png';
import nascarImg from '../assets/nascar_racing_1776277654488.png';
import tankImg from '../assets/m1_abrams_tank_texas_1776277660000.png';

export const TRIP_META = {
  title: "THE ULTIMATE TEXAS REDNECK WEEK",
  subtitle: "Helicopters • Hogs • Machine Guns • Drive Tanks • NASCAR • Grand Ole Opry",
  dates: "June 16-21, 2026",
  location: "Fort Worth ➡️ Uvalde ➡️ Nashville",
  group: "10-12 Men | Ages ~30",
  weather: "33-37°C (91-99°F) — Hot, humid, and merciless.",
  basecamp: "Fort Worth Stockyards & Nashville Broadway.",
  heroImage: heroImg
};

export const PRE_FLIGHT_CHECKLIST = [
  "Order the official 'Texas Redneck Week' Squad T-Shirts",
  "Sign all death waivers for HeliBacon & DriveTanks",
  "Purchase extreme sports travel insurance (for the bull riding)",
  "Start drinking Shiner Bock to build liver tolerance",
  "Watch 'Urban Cowboy' to prepare mentally",
  "Pre-book the 15-passenger convoy van (unlimited mileage!)"
];

export const ITINERARY = [
  {
    id: "day-1",
    day: "Day 1",
    date: "Tuesday, June 16",
    theme: "Arrival & Logistics",
    headline: "DFW Landing, Supplies, Billy Bob's",
    color: "#ff3333",
    events: [
      {
        time: "4:45 PM",
        title: "Landing at DFW",
        description: "Touchdown in the Lone Star State. Hit the ground running.",
        image: suvsImg
      },
      {
        time: "6:00 PM",
        title: "Airbnb & Supplies",
        description: "Check into the Stockyards basecamp. Massive grocery run for beer, steaks, and charcoal for the barbeque.",
        image: heroImg
      },
      {
        time: "Night",
        title: "Billy Bob's Texas",
        description: "The world's largest honky tonk. 120,000 sq ft of country chaos. Live music and indoor bull riding.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "Wednesday, June 17",
    theme: "HOGS FROM HEAVEN",
    headline: "HeliBacon & Easy Night",
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
        description: "2-hour flight with suppressed full-auto weapons. No bag limit.",
        image: heliImg
      },
      {
        time: "Evening",
        title: "Easy Night",
        description: "Back to Fort Worth for a low-key night. Recovery is key for what's coming.",
        image: bbqImg
      }
    ]
  },
  {
    id: "day-3",
    day: "Day 3",
    date: "Thursday, June 18",
    theme: "HEAVY METAL & BULLS",
    headline: "Machine Guns & Stockyards Shopping",
    color: "#999999",
    events: [
      {
        time: "Morning",
        title: "Texas Gun Experience",
        description: "Indoor range with a massive full-auto selection. Spray and pray.",
        image: heliImg
      },
      {
        time: "Afternoon",
        title: "Shopping & Stockyards",
        description: "Buy boots, hats, and belt buckles. Catch the cattle drive.",
        image: heroImg
      },
      {
        time: "Evening",
        title: "Bull Riding Showcase",
        description: "Professional Bull Riders in the Stockyards. The most violent 8 seconds in sports.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-4",
    day: "Day 4",
    date: "Friday, June 19",
    theme: "SPEED & STEER",
    headline: "BBQ, NASCAR, & Rodeo",
    color: "#8B4513",
    events: [
      {
        time: "Morning",
        title: "BBQ Pilgrimage",
        description: "Goldee's or Heim. Brisket for breakfast.",
        image: bbqImg
      },
      {
        time: "Afternoon",
        title: "NASCAR Racing Experience",
        description: "Drive an actual NASCAR stock car at Texas Motor Speedway. 160mph.",
        image: nascarImg
      },
      {
        time: "7:30 PM",
        title: "Championship Rodeo",
        description: "Cowtown Coliseum. Bull riding, broncos, and barrel racing.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-5",
    day: "Day 5",
    date: "Saturday, June 20",
    theme: "THE BIG HAUL",
    headline: "DriveTanks & Nashville Dash",
    color: "#0055ff",
    events: [
      {
        time: "Early Morning",
        title: "DriveTanks (Uvalde, TX)",
        description: "Drive an M1 Abrams or Sherman tank at Ox Ranch. Crush a car for the hell of it.",
        image: tankImg
      },
      {
        time: "Midday",
        title: "The Nashville Dash",
        description: "⚠️ EXTREME LOGISTICS WARNING: Start the 10-14 hour drive to Music City. Coffee and Shiner Bock (for the passengers).",
        image: suvsImg
      },
      {
        time: "9:00 PM",
        title: "Grand Ole Opry (Opry 100)",
        description: "The 100th-anniversary celebration in Nashville. Country music's biggest stage.",
        image: pbrImg
      }
    ]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "Sunday, June 21",
    theme: "The Final Flight",
    headline: "Nashville to New York",
    color: "#111111",
    events: [
      {
        time: "Morning",
        title: "Nashville Recovery",
        description: "Broadway bars or Whataburger (if you can find one in TN).",
        image: bbqImg
      },
      {
        time: "Afternoon",
        title: "Fly to New York",
        description: "Nashville (BNA) to NYC. Trip complete.",
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
  "Photograph the 'Don't Mess With Texas' sign",
  "Drive a tank at Ox Ranch",
  "See the Grand Ole Opry 100th Anniversary"
];
