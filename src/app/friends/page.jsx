import Link from "next/link";

const FriendsPage = () => {
  const friends = [
    {
      id: 1,
      name: "Alex Johnson",
      picture: "https://i.pravatar.cc/400?img=12",
      email: "alex.johnson@gmail.com",
      phone: "+1 202-555-0112",
      location: "New York, USA",
      days_since_contact: 21,
      status: "overdue",
      tags: ["college", "close friend"],
      bio: "We met during university orientation in 2019 and still plan yearly road trips together.",
      goal: 14,
      next_due_date: "2026-05-10",
      last_interaction: "Video Call",
      favorite_memory: "Trip to the mountains during summer vacation.",
      timeline: [
        {
          type: "call",
          title: "Call with Alex Johnson",
          date: "2026-04-12",
        },
        {
          type: "text",
          title: "Text with Alex Johnson",
          date: "2026-04-25",
        },
      ],
    },
    {
      id: 2,
      name: "Sophia Martinez",
      picture: "https://i.pravatar.cc/400?img=25",
      email: "sophia.martinez@gmail.com",
      phone: "+1 202-555-0135",
      location: "Madrid, Spain",
      days_since_contact: 9,
      status: "almost due",
      tags: ["work", "designer"],
      bio: "Sophia was my teammate in a startup project and always shares creative UI ideas.",
      goal: 10,
      next_due_date: "2026-05-08",
      last_interaction: "Text",
      favorite_memory: "Late-night brainstorming during hackathon week.",
      timeline: [
        {
          type: "video",
          title: "Video with Sophia Martinez",
          date: "2026-04-30",
        },
      ],
    },
    {
      id: 3,
      name: "Daniel Kim",
      picture: "https://i.pravatar.cc/400?img=36",
      email: "daniel.kim@gmail.com",
      phone: "+82 10-4587-2231",
      location: "Seoul, South Korea",
      days_since_contact: 4,
      status: "on-track",
      tags: ["gaming", "best friend"],
      bio: "Daniel and I have been online gaming partners since high school.",
      goal: 14,
      next_due_date: "2026-05-20",
      last_interaction: "Call",
      favorite_memory: "Winning an online tournament together.",
      timeline: [
        {
          type: "call",
          title: "Call with Daniel Kim",
          date: "2026-05-01",
        },
      ],
    },
    {
      id: 4,
      name: "Emma Wilson",
      picture: "https://i.pravatar.cc/400?img=47",
      email: "emma.wilson@gmail.com",
      phone: "+44 7700 900123",
      location: "London, UK",
      days_since_contact: 16,
      status: "overdue",
      tags: ["travel", "photography"],
      bio: "We met during a photography workshop and often discuss travel destinations.",
      goal: 7,
      next_due_date: "2026-05-05",
      last_interaction: "Video Call",
      favorite_memory: "Exploring street photography in Kolkata.",
      timeline: [
        {
          type: "video",
          title: "Video with Emma Wilson",
          date: "2026-04-14",
        },
      ],
    },
  ];

  return (
    <div>
      <h2>All Friends her</h2>
      {friends.map((friend) => (
        <div key={friend.id}>
          <h2>{friend.name}</h2>
          <h2>{friend.location}</h2>
          <Link href={`/friends/${friend.id}`}>
            <button className="btn btn-info">Info</button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default FriendsPage;
