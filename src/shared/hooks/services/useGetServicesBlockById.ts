"use client";

import { gql } from "@/graphql/client";
import { useQuery } from "@tanstack/react-query";

const useGetServicesBlockById = ({ id }: { id: string }) => {
  return useQuery({
    queryFn: () =>
      gql.GetServiceBlockById({
        id: id,
      }),
    queryKey: ["services_bloks", id],
  });
};

export { useGetServicesBlockById };
