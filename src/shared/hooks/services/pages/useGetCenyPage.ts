"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetCenyPage = () => {
  return useQuery({
    queryFn: () => gql.GetCenyPage(),
    queryKey: ["ceny_page"],
  });
};

export { useGetCenyPage };
