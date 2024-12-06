"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetServicesBlock = () => {
  return useQuery({
    queryFn: () => gql.GetServiceBlock(),
    queryKey: ["servicesBlock"],
  });
};

export { useGetServicesBlock };
