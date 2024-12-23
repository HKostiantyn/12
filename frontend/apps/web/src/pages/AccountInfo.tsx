 import React from "react";
 interface AccountInfoProps {
    handleUpdateAccountInfo: (userData: any) => void;
  }
  
  const AccountInfo: React.FC<AccountInfoProps> = ({ handleUpdateAccountInfo }) => {
    // Component logic here
    return (
      <div>
       <h1 className="text-2xl">AccountInfo</h1>;
      </div>
    );
  };
  
  export default AccountInfo;
  