import heroImg from '../assets/texas_hero_dusk.png';
import heliImg from '../assets/heli_hogs_action_1776277120235.png';
import bbqImg from '../assets/texas_bbq_brisket_1776277135312.png';
import suvsImg from '../assets/convoy_suvs_1776277619429.png';
import pbrImg from '../assets/pbr_bull_riding_1776277637131.png';

export const TRIP_META = {
  title: "THE ULTIMATE TEXAS REDNECK WEEK",
  subtitle: "Helicopters • Hogs • Machine Guns • Topgolf • Rodeo • Grand Ole Opry",
  highlights: ["Helicopters", "Hogs", "Machine Guns", "Topgolf", "Rodeo", "Grand Ole Opry"],
  dates: "June 16-21, 2026",
  location: "Fort Worth ➡️ Nashville",
  group: "10-12 Men | Ages ~30",
  weather: "91–99°F",
  weatherNote: "Hot · humid · merciless",
  basecamp: "Fort Worth Stockyards & Nashville Broadway.",
  heroImage: heroImg
};

export const PRE_FLIGHT_CHECKLIST = [
  "Order the official 'Texas Redneck Week' Squad T-Shirts",
  "Sign all death waivers for HeliBacon & the gun range",
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
    headline: "DFW Landing, Check-In, Topgolf",
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
        title: "Check-In & Supplies",
        description: "Check into the Stockyards basecamp. Massive grocery run for beer, steaks, and charcoal for the barbeque.",
        image: suvsImg
      },
      {
        time: "Evening",
        title: "Topgolf",
        description: "Climate-controlled bays, giant targets, and pitchers of beer. The first wagers of the week get settled here."
      },
      {
        time: "Night",
        title: "Easy Evening at Basecamp",
        description: "Beers on the porch and a strategy briefing. Rest up — the week ahead shows no mercy.",
        image: heroImg
      }
    ]
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "Wednesday, June 17",
    theme: "HEAVY METAL & BULLS",
    headline: "Gun Range, Dinner, Rodeo, Billy Bob's",
    color: "#ff7b00",
    events: [
      {
        time: "Daytime",
        title: "Texas Gun Experience",
        description: "Indoor range with a massive full-auto selection. Spray and pray."
      },
      {
        time: "Late Afternoon",
        title: "Texas-Sized Dinner",
        description: "Brisket or steaks the size of hubcaps. Carb-load before the bulls come out.",
        image: bbqImg
      },
      {
        time: "7:30 PM",
        title: "Championship Rodeo",
        description: "Cowtown Coliseum. Bull riding, broncos, and barrel racing.",
        image: pbrImg
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
    id: "day-3",
    day: "Day 3",
    date: "Thursday, June 18",
    theme: "HOGS FROM HEAVEN",
    headline: "Heli Hog Strike Team + Shopping, Topgolf Rematch",
    color: "#5b8def",
    events: [
      {
        time: "Early Morning",
        title: "Strike Team: Helicopter Hog Hunting",
        description: "One car of door gunners rolls out to HeliBacon HQ in Bryan, TX. 2-hour flight with suppressed full-auto weapons. No bag limit.",
        image: heliImg
      },
      {
        time: "Daytime",
        title: "Rear Guard: Shopping & Stockyards",
        description: "Everyone else: boots, hats, and belt buckles. Catch the cattle drive — or freestyle around Fort Worth.",
        image: heroImg
      },
      {
        time: "Evening",
        title: "Topgolf: The Rematch",
        description: "The squad reunites to settle the Day 1 scores. Losers buy the pitchers."
      }
    ]
  },
  {
    id: "day-4",
    day: "Day 4",
    date: "Friday, June 19",
    theme: "THE GREAT DIVIDE",
    headline: "50/50 Split: Nashville Dash or Fort Worth",
    color: "#8B4513",
    events: [
      {
        time: "Morning",
        title: "The Group Split",
        description: "The squad divides 50/50. Half saddle up for Music City, half hold down Fort Worth.",
        image: suvsImg
      },
      {
        time: "All Day",
        title: "Team Nashville: The Dash",
        description: "⚠️ EXTREME LOGISTICS WARNING: The 10-14 hour drive to Music City. Coffee and Shiner Bock (for the passengers).",
        image: suvsImg
      },
      {
        time: "All Day",
        title: "Team Fort Worth: Hold the Fort",
        description: "Stockyards encore, BBQ pilgrimage to Goldee's or Heim, and whatever else Texas demands.",
        image: bbqImg
      }
    ]
  },
  {
    id: "day-5",
    day: "Day 5",
    date: "Saturday, June 20",
    theme: "MUSIC CITY MAYHEM",
    headline: "Nashville: Opry 100 & Broadway",
    color: "#0055ff",
    events: [
      {
        time: "Daytime",
        title: "Music City",
        description: "Boots on Lower Broadway. Bars, hot chicken, and a warm-up lap before the main event."
      },
      {
        time: "9:00 PM",
        title: "Grand Ole Opry (Opry 100)",
        description: "The 100th-anniversary celebration in Nashville. Country music's biggest stage."
      },
      {
        time: "Late Night",
        title: "Broadway ++",
        description: "Honky tonk crawl down Lower Broadway. No man left behind (within reason).",
        image: bbqImg
      }
    ]
  },
  {
    id: "day-6",
    day: "Day 6",
    date: "Sunday, June 21",
    theme: "The Final Flight",
    headline: "Nashville to New York",
    color: "#ffb800",
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
