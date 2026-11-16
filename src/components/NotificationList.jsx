const notifications = [
  { id: 1, type: 'success', message: 'Profile updated successfully' },
  { id: 2, type: 'warning', message: 'Password expires in 3 days' },
  { id: 3, type: 'info', message: 'New lecture materials available' },
];

function NotificationItem({ type, message }) {
  const icon = type === 'success' ? '✅' : type === 'warning' ? '⚠️' : 'ℹ️';
  return (
    <li className={`notification ${type}`}>
      <span className="notification-icon" aria-hidden="true">{icon}</span>
      <span>{message}</span>
    </li>
  );
}

function NotificationList() {
  return (
    <ul className="notification-list">
      {notifications.map((item) => (
        <NotificationItem key={item.id} type={item.type} message={item.message} />
      ))}
    </ul>
  );
}

export default NotificationList;
