import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from 'jwt-decode';

function Protected(props) {
  const { Component } = props;
  const navigate = useNavigate();
  
  useEffect(() => {
    let token = localStorage.getItem('jwttoken');
    if (!token) {
      navigate('/Login');
    } else {
      let decodedToken = decodeToken(token);
      let role = decodedToken.role;
      openComponentByRole(role, decodedToken.UserName);
    }
  }, [navigate]);

  const decodeToken = (token) => {
    const decodedToken = jwt_decode(token);
    const role =
      decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'
      ];
      const UserName =
      decodedToken[
        'http://schemas.microsoft.com/ws/2008/06/identity/claims/UserName'
      ];
    return { role, UserName };
  };

  const openComponentByRole = (role, UserName) => {
    switch (role) {
      case 'Admin':
        navigate(`/Admin/${UserName}`);
        break;
      case 'Agent':
        navigate(`/TravelAgent/${UserName}`);
        break;
      case 'Traveller':
        navigate(`/TravellerPage/${UserName}`);
        break;
      default:
        navigate('/');
        break;
    }
  };

  return <div>
    <Component />
  </div>;
}

export {Protected};