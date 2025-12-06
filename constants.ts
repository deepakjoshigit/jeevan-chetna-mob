import { DonationAmount, GalleryItem, Program, TeamMember } from './types';

// SECURITY NOTE: The Secret Key provided (vFlozdmbPlrYH8pj4CkwVtfk) should NEVER be used on the client-side.
// It is used for server-side verification of payments. 
// We only use the Key ID here to initiate the payment widget.
export const RAZORPAY_KEY_ID = "rzp_live_Rn2dFscVisbwzC";

export const NGO_NAME = "Jeevan Chetna Foundation";
export const NGO_EMAIL = "info@jeevanchetnafoundation.org";
export const NGO_EMAILS = ["info@jeevanchetnafoundation.org", "jeevanchetnafoundationn@gmail.com"];
export const NGO_PHONE = "+91 90121 46420, +91 89585 21254";

export const NGO_HEAD_OFFICE = "Divya Ratan Colony, Gas Godam Road, Haldwani, Nainital. Pin - 263139";
export const NGO_WORKING_OFFICE = "Ramari Choti, Gadhi Aashram road, Haldwani, Nainital";
export const NGO_ADDRESS = NGO_HEAD_OFFICE; // Default for single line display

export const SOCIAL_LINKS = {
  facebook: "https://www.facebook.com/jeevanchetnafoundation",
  instagram: "https://www.instagram.com/jeevanchetnafoundation/",
  map: "https://maps.app.goo.gl/69WmXLLPHYRpWjyd9"
};

export const BANK_DETAILS = {
  accountName: "Jeevan Chetna Foundation",
  bankName: "State Bank of India (SBI)",
  accountNumber: "00000044208565753",
  ifscCode: "SBIN0000646",
  branch: "Uttarakhand" // Derived from IFSC/Context or generic
};

export const LEGAL_DETAILS = {
  pan: "AAGCJ9244C",
  tan: "MRTJO5239D",
  cin: "U85500UT2025NPL019366", // MCA Certificate
  license: "069568",
  udyam: "UK-07-0038439",
  startupIndia: "DIPP215092",
  csr: "CSR00096141",
  reg12a: "AAGCJ9244CE2025101",
  reg80g: "AAGCJ9244CF2025101",
  darpan: "UK/20250681855",
};

export const OTHER_REGISTRATIONS = [
  "GEM Portal Registered",
  "CSR.GOV.IN Registered",
  "E/Anudaan Registration",
  "Company MOA / INC13",
  "Article of Association (AOA)",
  "Rent Agreement"
];

export const DONATION_TIERS: DonationAmount[] = [
  { value: 500, label: "₹500", desc: "Support a child's stationery for a month" },
  { value: 1000, label: "₹1,000", desc: "Provide basic healthcare checkup" },
  { value: 5000, label: "₹5,000", desc: "Sponsor vocational training for one youth" },
];

export const PROGRAMS: Program[] = [
  {
    id: "education",
    title: "Shiksha Jyoti",
    description: "Providing quality education to underprivileged children in rural areas. We focus on foundational literacy and numeracy to bridge the learning gap.",
    image: "https://picsum.photos/800/600?random=1",
    stats: [{ label: "Students", value: "1,200+" }, { label: "Schools", value: "15" }]
  },
  {
    id: "health",
    title: "Swasthya Raksha",
    description: "Mobile medical vans conducting regular health camps, eye checkups, and distributing essential medicines to remote villages.",
    image: "https://picsum.photos/800/600?random=2",
    stats: [{ label: "Patients", value: "5,000+" }, { label: "Camps", value: "45" }]
  },
  {
    id: "women",
    title: "Nari Shakti",
    description: "Empowering women through skill development workshops, self-help groups, and financial literacy programs to ensure independence.",
    image: "https://picsum.photos/800/600?random=3",
    stats: [{ label: "Women Trained", value: "850+" }, { label: "SHGs", value: "30" }]
  }
];

export const TEAM: (TeamMember & { din?: string })[] = [
  { id: "1", name: "Pravin Kumar Pandey", role: "Director", image: "https://picsum.photos/400/400?random=10", din: "11145062" },
  { id: "2", name: "Deepak Joshi", role: "Director", image: "./deepak_joshi.jpg", din: "11145061" },
  { id: "3", name: "Amit Singh", role: "Volunteer Head", image: "https://picsum.photos/400/400?random=12" },
];

// REPLACE THESE URLs WITH YOUR ACTUAL IMAGE LINKS
export const GALLERY_IMAGES: GalleryItem[] = [
  { id: 1, src: "https://picsum.photos/800/600?random=101", alt: "Education Drive in Rural School", category: "Education" },
  { id: 2, src: "https://picsum.photos/800/600?random=102", alt: "Medical Checkup Camp", category: "Health" },
  { id: 3, src: "https://picsum.photos/800/600?random=103", alt: "Women Skill Development", category: "Empowerment" },
  { id: 4, src: "https://picsum.photos/800/600?random=104", alt: "Food Distribution Drive", category: "Community" },
  { id: 5, src: "https://picsum.photos/800/600?random=105", alt: "Children Planting Trees", category: "Environment" },
  { id: 6, src: "https://picsum.photos/800/600?random=106", alt: "Volunteer Team Meeting", category: "Team" },
  { id: 7, src: "https://picsum.photos/800/600?random=107", alt: "School Kit Distribution", category: "Education" },
  { id: 8, src: "https://picsum.photos/800/600?random=108", alt: "Senior Citizen Support", category: "Health" },
  { id: 9, src: "https://picsum.photos/800/600?random=109", alt: "Cultural Event Celebration", category: "Community" },
];