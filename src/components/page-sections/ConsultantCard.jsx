import Link from 'next/link';
import { FiPlus, FiSearch, FiClock } from "react-icons/fi";
import { MdOutlineEventAvailable } from "react-icons/md";
import { GiSkills } from "react-icons/gi";

const ConsultantCard = ({ member }) => {
    const formatText = (text) => {
        return text.replace(/_/g, " ").replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <div className="card">
            {/* Dark overlay on hover */}
            <div className="card-overlay"></div>

            {/* Image Section */}
            <div className="card-image">
                <img src={member.profilePicUrl} alt={member.fullName} />
            </div>

            {/* Card Content */}
            <div className="card-content">
                <h3 className="card-title">{member.fullName}</h3>
                <p className="card-role">{member.designation}</p>

                {/* Skills */}
                <div className="card-skills flex justify-center mb-2">
                    <GiSkills size={16} className='text-orange-800' />

                    <div className="skills-container">
                        {member.skills.length > 0 && (
                            <span className="skill-badge">{member.skills[0].length > 20 ? member.skills[0].slice(0, 28) + "..." : member.skills[0]}
                            </span>
                        )}

                        {member.skills.length > 1 && (
                            <span className="skill-badge more-skills">+{member.skills.length - 1}</span> // Show count of remaining skills
                        )}
                    </div>
                </div>

                {/* Work Hours & Availability */}
                <div className="card-footer">
                    <div className="footer-item flex items-center gap-2">
                        <FiClock size={16} color='purple' />
                        <div>
                            <span>{formatText(member.workHours)}</span>
                        </div>
                    </div>
                    <div className="footer-item flex items-center gap-2">
                        <MdOutlineEventAvailable size={16} color='green' />
                        <div><span>{member.availability}</span></div>
                    </div>
                </div>
            </div>

            {/* View Button - Appears on Hover */}
            <div className="card-button">
                <Link href={`/consultants/${member.id}?name=${member.fullName}`}>
                    View
                </Link>
            </div>
        </div>
    );
};

export default ConsultantCard;
