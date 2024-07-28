export const generateRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const insertNewListing = (newListingObject, randomId) => {
  const newListing = {
    id: randomId,
    ...newListingObject,
  };

  dummyData.push(newListing);
};

export const dummyData = [
  {
    id: 'k95vd991g',
    title: 'Dance Performance',
    name: 'Sarah Brown',
    email: 'sarah.brown@gmail.com',
    money: '45.67',
    location: {
      city: 'Austin',
      state: 'TX',
      country: 'United States',
    },
    date: '2024-09-05',
    time: '11:23:56',
  },
  {
    id: 'yh39olqll',
    title: 'Art Exhibition',
    name: 'David Lee',
    email: 'david.lee@gmail.com',
    money: '178.89',
    location: {
      city: 'Seattle',
      state: 'WA',
      country: 'United States',
    },
    date: '2025-02-14',
    time: '16:12:34',
  },
  {
    id: '0ka4ej1ix',
    title: 'Charity Run',
    name: 'Laura Davis',
    email: 'laura.davis@gmail.com',
    money: '120.45',
    location: {
      city: 'Miami',
      state: 'FL',
      country: 'United States',
    },
    date: '2025-12-03',
    time: '07:54:21',
  },
  {
    id: 'bxmvnlag4',
    title: 'Tech Conference',
    name: 'James Wilson',
    email: 'james.wilson@gmail.com',
    money: '32.50',
    location: {
      city: 'Boston',
      state: 'MA',
      country: 'United States',
    },
    date: '2026-03-27',
    time: '20:45:12',
  },
  {
    id: '4pympyhts',
    title: 'Charity Run',
    name: 'Olivia Martinez',
    email: 'olivia.martinez@gmail.com',
    money: '67.89',
    location: {
      city: 'Denver',
      state: 'CO',
      country: 'United States',
    },
    date: '2024-11-11',
    time: '15:30:59',
  },
  {
    id: '9er2ryhfo',
    title: 'Art Exhibition',
    name: 'Robert Anderson',
    email: 'robert.anderson@gmail.com',
    money: '199.99',
    location: {
      city: 'Philadelphia',
      state: 'PA',
      country: 'United States',
    },
    date: '2025-10-16',
    time: '22:14:43',
  },
  {
    id: '5a86ahmrp',
    title: 'Science Workshop',
    name: 'Emma Thompson',
    email: 'emma.thompson@gmail.com',
    money: '88.55',
    location: {
      city: 'San Diego',
      state: 'CA',
      country: 'United States',
    },
    date: '2026-06-23',
    time: '09:05:37',
  },
  {
    id: 'jgi1zzrz8',
    title: 'Food Carnival',
    name: 'William Taylor',
    email: 'william.taylor@gmail.com',
    money: '156.78',
    location: {
      city: 'Atlanta',
      state: 'GA',
      country: 'United States',
    },
    date: '2024-07-30',
    time: '17:22:11',
  },
  {
    id: 'ezdokhhe0',
    title: 'Science Workshop',
    name: 'Sophia White',
    email: 'sophia.white@gmail.com',
    money: '95.60',
    location: {
      city: 'Dallas',
      state: 'TX',
      country: 'United States',
    },
    date: '2025-04-18',
    time: '08:33:44',
  },
  {
    id: 'x7ly5iv83',
    title: 'Food Carnival',
    name: 'Liam Harris',
    email: 'liam.harris@gmail.com',
    money: '73.25',
    location: {
      city: 'Orlando',
      state: 'FL',
      country: 'United States',
    },
    date: '2026-02-11',
    time: '13:21:09',
  },
  {
    id: 'jjk57u8w1',
    title: 'Book Fair',
    name: 'Isabella Clark',
    email: 'isabella.clark@gmail.com',
    money: '134.50',
    location: {
      city: 'Las Vegas',
      state: 'NV',
      country: 'United States',
    },
    date: '2024-10-08',
    time: '10:19:30',
  },
  {
    id: 'a2wuk04tc',
    title: 'Food Carnival',
    name: 'Ava Johnson',
    email: 'ava.johnson@gmail.com',
    money: '58.23',
    location: {
      city: 'Portland',
      state: 'OR',
      country: 'United States',
    },
    date: '2024-08-15',
    time: '13:45:12',
  },
  {
    id: 'ptbl5hpih',
    title: 'Science Workshop',
    name: 'Mason Harris',
    email: 'mason.harris@gmail.com',
    money: '102.67',
    location: {
      city: 'San Jose',
      state: 'CA',
      country: 'United States',
    },
    date: '2025-01-28',
    time: '11:20:34',
  },
  {
    id: 'cwzgas7ql',
    title: 'Dance Performance',
    name: 'Ethan Martinez',
    email: 'ethan.martinez@gmail.com',
    money: '76.90',
    location: {
      city: 'San Antonio',
      state: 'TX',
      country: 'United States',
    },
    date: '2025-03-19',
    time: '17:55:21',
  },
  {
    id: 'iqfwnr4aa',
    title: 'Art Exhibition',
    name: 'Mia Garcia',
    email: 'mia.garcia@gmail.com',
    money: '43.78',
    location: {
      city: 'Columbus',
      state: 'OH',
      country: 'United States',
    },
    date: '2025-09-11',
    time: '09:43:56',
  },
  {
    id: 'okzvwtugk',
    title: 'Art Exhibition',
    name: 'Noah Lee',
    email: 'noah.lee@gmail.com',
    money: '89.99',
    location: {
      city: 'Indianapolis',
      state: 'IN',
      country: 'United States',
    },
    date: '2024-10-25',
    time: '14:29:13',
  },
  {
    id: '92ozau4q3',
    title: 'Science Workshop',
    name: 'Olivia Wilson',
    email: 'olivia.wilson@gmail.com',
    money: '54.21',
    location: {
      city: 'Charlotte',
      state: 'NC',
      country: 'United States',
    },
    date: '2025-06-14',
    time: '19:07:45',
  },
  {
    id: '8hijvv2lo',
    title: 'Food Carnival',
    name: 'Jacob Brown',
    email: 'jacob.brown@gmail.com',
    money: '168.45',
    location: {
      city: 'Jacksonville',
      state: 'FL',
      country: 'United States',
    },
    date: '2026-07-23',
    time: '08:39:22',
  },
  {
    id: 'froy1cn8d',
    title: 'Film Screening',
    name: 'Sophia Rodriguez',
    email: 'sophia.rodriguez@gmail.com',
    money: '125.88',
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'United States',
    },
    date: '2024-04-30',
    time: '16:25:31',
  },
  {
    id: 'lco5vb5nm',
    title: 'Dance Performance',
    name: 'Liam Adams',
    email: 'liam.adams@gmail.com',
    money: '67.34',
    location: {
      city: 'Fort Worth',
      state: 'TX',
      country: 'United States',
    },
    date: '2025-07-18',
    time: '12:17:59',
  },
  {
    id: 'ucxnai6mn',
    title: 'Art Exhibition',
    name: 'Emma Taylor',
    email: 'emma.taylor@gmail.com',
    money: '144.20',
    location: {
      city: 'Memphis',
      state: 'TN',
      country: 'United States',
    },
    date: '2026-05-06',
    time: '20:32:14',
  },
  {
    id: 'ja8yhbmc1',
    title: 'Theater Play',
    name: 'Aiden Scott',
    email: 'aiden.scott@gmail.com',
    money: '93.12',
    location: {
      city: 'Baltimore',
      state: 'MD',
      country: 'United States',
    },
    date: '2024-12-08',
    time: '06:50:39',
  },
  {
    id: '3fharf561',
    title: 'Science Workshop',
    name: 'Chloe Nelson',
    email: 'chloe.nelson@gmail.com',
    money: '82.75',
    location: {
      city: 'Boston',
      state: 'MA',
      country: 'United States',
    },
    date: '2025-11-22',
    time: '14:09:03',
  },
  {
    id: 'u0bi69et4',
    title: 'Theater Play',
    name: 'James Harris',
    email: 'james.harris@gmail.com',
    money: '145.67',
    location: {
      city: 'Denver',
      state: 'CO',
      country: 'United States',
    },
    date: '2026-01-11',
    time: '09:12:40',
  },
  {
    id: '2hc3h2htn',
    title: 'Theater Play',
    name: 'Megan Walker',
    email: 'megan.walker@gmail.com',
    money: '112.40',
    location: {
      city: 'Seattle',
      state: 'WA',
      country: 'United States',
    },
    date: '2024-06-19',
    time: '18:27:56',
  },
  {
    id: 'x5akxani6',
    title: 'Tech Conference',
    name: 'Lucas Wright',
    email: 'lucas.wright@gmail.com',
    money: '57.18',
    location: {
      city: 'Las Vegas',
      state: 'NV',
      country: 'United States',
    },
    date: '2025-04-04',
    time: '15:33:21',
  },
  {
    id: '48nahw4jv',
    title: 'Tech Conference',
    name: 'Isabella Hill',
    email: 'isabella.hill@gmail.com',
    money: '161.29',
    location: {
      city: 'San Diego',
      state: 'CA',
      country: 'United States',
    },
    date: '2026-08-30',
    time: '10:48:54',
  },
  {
    id: 'g8faxkl5a',
    title: 'Science Workshop',
    name: 'Evelyn Martinez',
    email: 'evelyn.martinez@gmail.com',
    money: '134.00',
    location: {
      city: 'Orlando',
      state: 'FL',
      country: 'United States',
    },
    date: '2024-11-14',
    time: '08:12:33',
  },
  {
    id: 'f2hecr3g9',
    title: 'Music Festival',
    name: 'Daniel Carter',
    email: 'daniel.carter@gmail.com',
    money: '68.45',
    location: {
      city: 'Nashville',
      state: 'TN',
      country: 'United States',
    },
    date: '2025-10-06',
    time: '19:57:21',
  },
  {
    id: 'gohvzgzxs',
    title: 'Art Exhibition',
    name: 'Grace Robinson',
    email: 'grace.robinson@gmail.com',
    money: '55.60',
    location: {
      city: 'Omaha',
      state: 'NE',
      country: 'United States',
    },
    date: '2026-03-09',
    time: '13:26:34',
  },
  {
    id: 'jyzwbhrhc',
    title: 'Charity Run',
    name: 'Henry Baker',
    email: 'henry.baker@gmail.com',
    money: '86.12',
    location: {
      city: 'Milwaukee',
      state: 'WI',
      country: 'United States',
    },
    date: '2024-07-25',
    time: '20:44:50',
  },
  {
    id: '82gfj2ksc',
    title: 'Food Carnival',
    name: 'Lily Rodriguez',
    email: 'lily.rodriguez@gmail.com',
    money: '97.85',
    location: {
      city: 'Kansas City',
      state: 'MO',
      country: 'United States',
    },
    date: '2025-05-03',
    time: '11:10:23',
  },
  {
    id: 'bcueum8b7',
    title: 'Charity Run',
    name: 'Jack Cooper',
    email: 'jack.cooper@gmail.com',
    money: '172.54',
    location: {
      city: 'Atlanta',
      state: 'GA',
      country: 'United States',
    },
    date: '2026-09-16',
    time: '14:05:12',
  },
  {
    id: '53tiay8ur',
    title: 'Dance Performance',
    name: 'Zoe Turner',
    email: 'zoe.turner@gmail.com',
    money: '139.60',
    location: {
      city: 'Cleveland',
      state: 'OH',
      country: 'United States',
    },
    date: '2024-12-01',
    time: '17:18:45',
  },
  {
    id: 'l39tjqv1g',
    title: 'Charity Run',
    name: 'Aiden Hall',
    email: 'aiden.hall@gmail.com',
    money: '105.76',
    location: {
      city: 'Minneapolis',
      state: 'MN',
      country: 'United States',
    },
    date: '2025-02-10',
    time: '10:42:09',
  },
  {
    id: 'qfi7w70pg',
    title: 'Theater Play',
    name: 'Nora Allen',
    email: 'nora.allen@gmail.com',
    money: '63.50',
    location: {
      city: 'Arlington',
      state: 'TX',
      country: 'United States',
    },
    date: '2026-04-29',
    time: '08:25:19',
  },
  {
    id: '8oo7omnb0',
    title: 'Film Screening',
    name: 'Leo Wright',
    email: 'leo.wright@gmail.com',
    money: '148.20',
    location: {
      city: 'Tucson',
      state: 'AZ',
      country: 'United States',
    },
    date: '2024-06-12',
    time: '15:36:21',
  },
  {
    id: 't5pohsj32',
    title: 'Art Exhibition',
    name: 'Mia Young',
    email: 'mia.young@gmail.com',
    money: '179.75',
    location: {
      city: 'Raleigh',
      state: 'NC',
      country: 'United States',
    },
    date: '2025-01-09',
    time: '18:22:40',
  },
  {
    id: 'xawqcxnr2',
    title: 'Charity Run',
    name: 'Oliver King',
    email: 'oliver.king@gmail.com',
    money: '74.99',
    location: {
      city: 'St. Louis',
      state: 'MO',
      country: 'United States',
    },
    date: '2026-05-14',
    time: '09:18:12',
  },
];

// export default dummyData;