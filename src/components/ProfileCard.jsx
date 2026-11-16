const defaultAvatar = `data:image/svg+xml;utf8,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="#241c1e"/><circle cx="40" cy="31" r="14" fill="#8d7240"/><path d="M12 74c4-16 15-24 28-24s24 8 28 24z" fill="#8d7240"/></svg>'
)}`;

function ProfileCard({ name, role, email, avatarUrl = defaultAvatar }) {
  return (
    <div className="profile-card">
      <img className="profile-avatar" src={avatarUrl} alt={name} width="80" height="80" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-role">{role}</p>
      <a className="profile-email" href={`mailto:${email}`}>{email}</a>
    </div>
  );
}

export default ProfileCard;
