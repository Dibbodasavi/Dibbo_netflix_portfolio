import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TopPicksRow.css';
import { FaVideo, FaPalette, FaBriefcase, FaGraduationCap, FaNewspaper, FaGlobeAmericas, FaCamera } from 'react-icons/fa';

type ProfileType = 'recruiter' | 'academic' | 'explorer';

interface TopPicksRowProps {
  profile: ProfileType;
}

const topPicksConfig = {
  recruiter: [
    { title: "Video Projects", imgSrc: "https://picsum.photos/seed/video/250/200", icon: <FaVideo />, route: "/video-projects" },
    { title: "Graphic Design", imgSrc: "https://picsum.photos/seed/design/250/200", icon: <FaPalette />, route: "/graphic-design" },
    { title: "Organizations", imgSrc: "https://picsum.photos/seed/orgs/250/200", icon: <FaBriefcase />, route: "/organizations" }
  ],
  academic: [
    { title: "Published Papers", imgSrc: "https://picsum.photos/seed/papers/250/200", icon: <FaGraduationCap />, route: "/papers" },
    { title: "Blog Posts", imgSrc: "https://picsum.photos/seed/blogs/250/200", icon: <FaNewspaper />, route: "/blogs" },
    { title: "Academic Background", imgSrc: "https://picsum.photos/seed/academic/250/200", icon: <FaGraduationCap />, route: "/education" }
  ],
  explorer: [
    { title: "Travel Stories", imgSrc: "https://picsum.photos/seed/travel/250/200", icon: <FaGlobeAmericas />, route: "/travel" },
    { title: "Photography", imgSrc: "https://picsum.photos/seed/photos/250/200", icon: <FaCamera />, route: "/photography" },
    { title: "Adventures", imgSrc: "https://picsum.photos/seed/adventure/250/200", icon: <FaGlobeAmericas />, route: "/adventures" }
  ]
};

const TopPicksRow: React.FC<TopPicksRowProps> = ({ profile }) => {
  const navigate = useNavigate();
  const topPicks = topPicksConfig[profile];

  return (
    <div className="top-picks-row">
      <h2 className="row-title">Today's Top Picks for {profile}</h2>
      <div className="card-row">
        {topPicks.map((pick, index) => (
          <div 
            key={index} 
            className="pick-card" 
            onClick={() => navigate(pick.route)}
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <img src={pick.imgSrc} alt={pick.title} className="pick-image" />
            <div className="overlay">
              <div className="pick-label">{pick.title}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopPicksRow;