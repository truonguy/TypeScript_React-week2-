interface MembershipOption {
  title: string;
  features: string[];
}

export const membershipOptionData: MembershipOption[] = [
  {
    title: "Health",
    features: [
      "Unlimited classes",
      "Daily Locker",
      "Fitness Evaluation",
      "Guest Passes",
      "1 PT Sessionure",
    ],
  },
  {
    title: "Health Plus",
    features: [
      "Health's Features +",
      "Laundry Service",
      "Overnight Locker",
      "Guest Passes",
      "3 PT Sessionure",
    ],
  },
  {
    title: "Other",
    features: [
      "Corporate",
      "Neighborhood",
      "Student",
      "Guest Passes",
      "Spousal",
    ],
  },
];
