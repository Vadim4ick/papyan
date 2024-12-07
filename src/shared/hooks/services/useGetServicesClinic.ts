"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetServicesClinic = () => {
  return useQuery({
    queryFn: () => gql.GetServiceClinic(),
    queryKey: ["services_clinic"],
  });
};

export { useGetServicesClinic };
