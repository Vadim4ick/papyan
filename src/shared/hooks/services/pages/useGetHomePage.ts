"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetHomePage = () => {
  return useQuery({
    queryFn: () => gql.GetHomePage(),
    queryKey: ["home_page"],
  });
};

export { useGetHomePage };
