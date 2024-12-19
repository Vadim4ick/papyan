"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetProblems = () => {
  return useQuery({
    queryFn: () => gql.GetProblems(),
    queryKey: ["problems"],
  });
};

export { useGetProblems };
