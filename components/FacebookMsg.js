import React from "react";
import { FacebookProvider, CustomChat } from "react-facebook";

const FacebookMsg = () => {
  return (
    <div>
      <FacebookProvider appId="123456789" chatSupport>
        <CustomChat pageId="123456789" minimized={false} />
      </FacebookProvider>
    </div>
  );
};

export default FacebookMsg;
