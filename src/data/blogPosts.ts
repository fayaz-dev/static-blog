export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  likes: number;
  comments: number;
  featured?: boolean;
  content?: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Digital Minimalism: Less Screen, More Life",
    excerpt: "Exploring how reducing our digital footprint can lead to a more fulfilling and present life.",
    image: "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Lifestyle",
    readTime: "7 min read",
    date: "Dec 8, 2024",
    likes: 42,
    comments: 8,
    content: [
      "In our increasingly connected world, the concept of digital minimalism has emerged as a powerful antidote to the overwhelming presence of technology in our daily lives. This philosophy encourages us to be more intentional about our digital consumption, focusing on tools and platforms that truly add value to our existence.",
      "The journey toward digital minimalism begins with a honest assessment of our current digital habits. How many hours do we spend scrolling through social media? How often do we check our phones throughout the day? These questions, while sometimes uncomfortable to answer, are essential for understanding our relationship with technology.",
      "Digital minimalism isn't about rejecting technology entirely. Instead, it's about curating our digital environment to support our goals, values, and well-being. This might mean unsubscribing from newsletters that don't bring joy, deleting apps that consume time without providing value, or setting specific times for checking emails and social media.",
      "The benefits of embracing digital minimalism extend far beyond just having more time. Many practitioners report improved focus, better sleep quality, stronger real-world relationships, and a greater sense of presence in their daily activities. By reducing digital noise, we create space for deeper thinking, creativity, and meaningful connections.",
      "Starting your digital minimalism journey doesn't require dramatic changes overnight. Begin with small steps: turn off non-essential notifications, designate phone-free zones in your home, or commit to a daily digital sunset where you disconnect from devices an hour before bed. These small changes can lead to profound shifts in how you experience life."
    ]
  },
  {
    id: 2,
    title: "The Hidden Gems of Kyoto's Temple Gardens",
    excerpt: "A journey through the serene and mystical temple gardens that capture the essence of Japanese aesthetics.",
    image: "https://images.pexels.com/photos/1829980/pexels-photo-1829980.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Travel",
    readTime: "5 min read",
    date: "Dec 5, 2024",
    likes: 67,
    comments: 12
  },
  {
    id: 3,
    title: "AI and Human Creativity: Partners or Rivals?",
    excerpt: "Examining the evolving relationship between artificial intelligence and human creative expression.",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Technology",
    readTime: "9 min read",
    date: "Dec 3, 2024",
    likes: 89,
    comments: 23
  },
  {
    id: 4,
    title: "The Renaissance of Analog Art in Digital Times",
    excerpt: "Why traditional art forms are experiencing a revival in our increasingly digital world.",
    image: "https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Art",
    readTime: "6 min read",
    date: "Nov 30, 2024",
    likes: 34,
    comments: 7
  },
  {
    id: 5,
    title: "The Philosophy of Slow Living",
    excerpt: "Embracing a slower pace of life as a form of resistance against modern society's rush.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Philosophy",
    readTime: "8 min read",
    date: "Nov 28, 2024",
    likes: 56,
    comments: 15
  },
  {
    id: 6,
    title: "Sustainable Fashion: Style with Conscience",
    excerpt: "How to build a wardrobe that's both stylish and environmentally responsible.",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=600",
    category: "Lifestyle",
    readTime: "5 min read",
    date: "Nov 25, 2024",
    likes: 78,
    comments: 19
  },
  {
    id: 7,
    title: "The Art of Mindful Living in a Digital Age",
    excerpt: "Discovering peace and presence in our hyperconnected world through ancient wisdom and modern practices.",
    image: "https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Mindfulness",
    readTime: "8 min read",
    date: "Dec 15, 2024",
    likes: 124,
    comments: 31,
    featured: true
  },
  {
    id: 8,
    title: "Creative Spaces: Designing Your Inspiration Corner",
    excerpt: "Transform any corner of your home into a sanctuary of creativity and productivity.",
    image: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Design",
    readTime: "6 min read",
    date: "Dec 12, 2024",
    likes: 87,
    comments: 16
  },
  {
    id: 9,
    title: "The Poetry of Everyday Moments",
    excerpt: "Finding extraordinary beauty in the ordinary rhythms of daily life.",
    image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=800",
    category: "Poetry",
    readTime: "4 min read",
    date: "Dec 10, 2024",
    likes: 63,
    comments: 9
  }
];