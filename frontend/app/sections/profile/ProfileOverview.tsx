"use client";

const ProfileOverview = () => {
  return (
    <div className="profile-overview">
      <div className="profile-card">
        <h3>About</h3>
        <p>Add your bio...</p>
      </div>

      <div className="profile-card">
        <h3>Details</h3>
        <p>Email: example@email.com</p>
        <p>Phone: Not added</p>
      </div>
    </div>
  );
};

export default ProfileOverview;