import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export function WelcomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="welcome-body">
        <div className="welcome-id">Who's Watching?</div>
        <div className="login-avatar">
          <div>
            <div className="avatar1"></div>
            <div className="profile1">Profile1</div>
          </div>
          <div>
            <div className="avatar2"></div>
            <div className="profile2">Profile2</div>
          </div>
          <div
            onClick={() => {
              navigate("/home");
            }}
          >
            <div className="avatar3"></div>
            <div className="profile3">PROFESSOR</div>
          </div>
          <div>
            <div className="avatar4"></div>
            <div className="profile4">Profile4</div>
          </div>
          <div>
            <div className="avatar5"></div>
            <div className="profile5">Profile5</div>
          </div>
        </div>

        <Button variant="outline-light" className=" manage-profiles">
          Manage Profiles
        </Button>
      </div>
    </>
  );
}
