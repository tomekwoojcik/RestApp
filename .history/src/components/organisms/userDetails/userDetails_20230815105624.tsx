/* eslint-disable import/no-cycle */
import { FC, useContext } from "react";
import UserContext from "../../context/userContext";
import UserDetailsColumn from "../../molecules/userDetailsColumn/userDetailsColumn";

const UserDetails: FC = () => {
  const { personData } = useContext(UserContext);
  const {
    addressData,
    basicData,
    contactData,
    image,
    jobData,
    universityData,
  } = personData;
  image;
  return (
    <div>
      <UserDetailsColumn columnName="Basic data" data={basicData} />
      <UserDetailsColumn columnName="Address" data={addressData} />
      <UserDetailsColumn columnName="Contact data" data={contactData} />
      <UserDetailsColumn columnName="Job data" data={jobData} />
      <UserDetailsColumn columnName="University data" data={universityData} />
    </div>
  );
};

export default UserDetails;
