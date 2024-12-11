"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetServicesBloks = () => {
  return useQuery({
    queryFn: () => gql.GetServiceBlock(),
    queryKey: ["services_bloks"],
  });
};

export { useGetServicesBloks };
