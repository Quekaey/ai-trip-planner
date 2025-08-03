"use client";

import React, { useContext, useEffect, useState } from "react";
import Header from "./_components/Header";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { UserDetailContext } from "@/context/UserDetailContext";

type ProviderProps = {
  children: React.ReactNode;
};

const Provider: React.FC<ProviderProps> = ({ children }) => {
  const createUser = useMutation(api.user.CreateNewUser);
  const { user } = useUser();
  const [userDetail, setUserDetail] = useState<any>();

  // Define the function before using it in useEffect
  const createNewUser = async () => {
    if (user) {
      try {
        const result = await createUser({
          email: user?.primaryEmailAddress?.emailAddress ?? "",
          imageUrl: user?.imageUrl,
          name: user?.fullName ?? "",
        });

        setUserDetail(result);
      } catch (error) {
        console.error("Failed to create user:", error);
      }
    }
  };

  useEffect(() => {
    if (user) {
      createNewUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  return (
    <UserDetailContext.Provider value={{ userDetail, setUserDetail }}>
      <div>
        <Header />
        {children}
      </div>
    </UserDetailContext.Provider>
  );
};

export default Provider;

export const useUserDetail = () => {
  return useContext(UserDetailContext);
};
