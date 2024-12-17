"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetAllDoctors = () => {
  return useQuery({
    queryFn: () => gql.GetAllDoctors(),
    queryKey: ["all_doctors"],
  });
};

export { useGetAllDoctors };
